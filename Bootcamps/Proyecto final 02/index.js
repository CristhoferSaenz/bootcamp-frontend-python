const apiUrl = 'https://dragonball-api.com/api/characters';

// Estado de la paginación
let paginaActual = 1;
const limitePorPagina = 5;
let totalPaginas = 1;

// Elementos del DOM
const form = document.querySelector('#form');
const lista = document.querySelector('#lista');
const contador = document.querySelector('#contador');
const loading = document.querySelector('#loading');
const vacio = document.querySelector('#vacio');
const cancelBtn = document.querySelector('#cancelBtn');
const formTitle = document.querySelector('#formTitle');
const submitBtn = document.querySelector('#submitBtn');
const paginacionContenedor = document.querySelector('#paginacion');

// 1. CARGAR PERSONAJES CON PAGINACIÓN (5 POR PÁGINA)
const cargarPersonajes = async (page = 1) => {
    loading.classList.remove('hidden');
    vacio.classList.add('hidden');
    lista.innerHTML = '';

    try {
        const response = await fetch(`${apiUrl}?page=${page}&limit=${limitePorPagina}`);
        if (!response.ok) throw new Error('Error al obtener los personajes');
        
        const data = await response.json();
        
        // Manejar respuesta con paginación
        const personajes = data.items || [];
        totalPaginas = data.meta?.totalPages || 1;
        paginaActual = page;

        // Actualizar contador total de items
        contador.textContent = data.meta?.totalItems || personajes.length;

        renderPersonajes(personajes);
        renderPaginacion();
    } catch (error) {
        console.error('Error al cargar personajes:', error);
    } finally {
        loading.classList.add('hidden');
    }
}

// 2. RENDERIZAR PERSONAJES
const renderPersonajes = (personajes) => {
    lista.innerHTML = '';

    if (personajes.length === 0) {
        vacio.classList.remove('hidden');
        return;
    }

    vacio.classList.add('hidden');

    personajes.forEach(personaje => {
        const id = personaje.id;
        const nombre = personaje.name || 'Sin Nombre';
        const imagen = personaje.image || 'https://via.placeholder.com/150';
        const raza = personaje.race || 'Desconocido';
        const genero = personaje.gender || 'Unknown';

        const li = document.createElement('li');
        li.className = 'flex items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow';
        
        const esFemenino = genero === 'Female';
        const genderBadgeClass = esFemenino 
            ? 'bg-pink-50 text-pink-600 border-pink-100' 
            : 'bg-emerald-50 text-emerald-600 border-emerald-100';

        li.innerHTML = `
            <div class="flex items-center gap-4 min-w-0">
                <div class="shrink-0 w-16 h-16 rounded-xl border border-blue-100 bg-blue-50 overflow-hidden flex items-center justify-center">
                    <img 
                        src="${imagen}" 
                        alt="${nombre}" 
                        class="w-full h-full object-cover object-top"
                        onerror="this.src='https://via.placeholder.com/150'"
                    >
                </div>

                <div class="min-w-0">
                    <h3 class="text-base font-bold text-slate-800 truncate">${nombre}</h3>
                    <div class="flex items-center gap-2 mt-1.5">
                        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100">
                            ${raza}
                        </span>
                        <span class="text-xs font-semibold px-2.5 py-0.5 rounded-md border ${genderBadgeClass}">
                            ${genero}
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-2 shrink-0">
                <button 
                    data-action="editar" 
                    data-id="${id}" 
                    data-name="${nombre}" 
                    data-race="${raza}" 
                    data-image="${imagen}"
                    data-gender="${genero}"
                    class="flex items-center gap-1.5 text-xs font-medium text-blue-600 border border-blue-200 bg-white hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                    ✏️ Editar
                </button>
                <button 
                    data-action="eliminar" 
                    data-id="${id}" 
                    class="flex items-center gap-1.5 text-xs font-medium text-red-500 border border-red-200 bg-white hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                    🗑️ Eliminar
                </button>
            </div>
        `;
        lista.appendChild(li);
    });
}

// 3. RENDERIZAR BOTONES DE PAGINACIÓN DINÁMICOS
const renderPaginacion = () => {
    if (!paginacionContenedor) return;

    paginacionContenedor.innerHTML = `
        <button id="firstBtn" ${paginaActual === 1 ? 'disabled' : ''} class="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors disabled:opacity-50">│&lt; Primera</button>
        <button id="prevBtn" ${paginaActual === 1 ? 'disabled' : ''} class="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors disabled:opacity-50">&lt; Anterior</button>
        
        <span class="px-3 py-1.5 font-bold text-orange-600">Página ${paginaActual} de ${totalPaginas}</span>

        <button id="nextBtn" ${paginaActual === totalPaginas ? 'disabled' : ''} class="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors disabled:opacity-50">Siguiente &gt;</button>
        <button id="lastBtn" ${paginaActual === totalPaginas ? 'disabled' : ''} class="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors disabled:opacity-50">Última &gt;│</button>
    `;

    // Eventos de los botones de paginación
    document.querySelector('#firstBtn')?.addEventListener('click', () => cargarPersonajes(1));
    document.querySelector('#prevBtn')?.addEventListener('click', () => cargarPersonajes(paginaActual - 1));
    document.querySelector('#nextBtn')?.addEventListener('click', () => cargarPersonajes(paginaActual + 1));
    document.querySelector('#lastBtn')?.addEventListener('click', () => cargarPersonajes(totalPaginas));
}

// 4. GUARDAR / EDITAR / ELIMINAR Y CANCELAR
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    alert('Nota: La API oficial de Dragon Ball es de solo lectura.');
});

cancelBtn?.addEventListener('click', () => {
    form.reset();
    document.querySelector('#personajeId').value = '';
    formTitle.innerHTML = '<span>👤</span> NUEVO PERSONAJE';
    submitBtn.textContent = '+ Agregar Personaje';
    cancelBtn.classList.add('hidden');
});

// INICIALIZACIÓN
cargarPersonajes(1);