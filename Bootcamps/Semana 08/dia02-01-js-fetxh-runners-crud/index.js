<<<<<<< HEAD

const apiUrl = 'https://apibox.vercel.app/mzf92Np2itaXUYzhRTIrBBs9ueG0xXt5/corredores';


const cargarRunners = async () => {
    document.querySelector('#loading').classList.remove('hidden');
    const response = await fetch(apiUrl);
    const data = await response.json();
    renderRunners(data);    
}   

const renderRunners = (runners) => {
    const lista = document.querySelector('#lista');

lista.innerHTML = ''

const contador = document.querySelector('#contador');
contador.textContent = runners.length;

    runners.forEach(runner => {
        const li = document.createElement('li');

    
        li.className = 'flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 transition-colors'
        
        li.innerHTML = `
						<div class="shrink-0 w-14 h-14 rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
              <span class="font-mono text-base font-medium">${runner.dorsal}</span>
            </div>

            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium truncate">${runner.nombre}</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">${runner.categoria}</span>
                <span class="text-xs text-neutral-400">${runner.age} años</span>
              </div>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              <button data-action="editar" data-id="${runner.id}" class="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">
                Editar
              </button>
              <button data-action="eliminar" data-id="${runner.id}" class="text-xs text-neutral-400 hover:text-red-500 transition-colors">
                Eliminar
              </button>
            </div>
	
        `
        lista.appendChild(li)
    })   
}

const form = document.querySelector('#form');

form.addEventListener('submit', async(event) => {
    event.preventDefault();
    const runnerform = document.forms['form']

    const nombre = runnerform['nombre'].value;
    const edad = runnerform['edad'].value;
    const categoria = runnerform['categoria'].value;
    const dorsal = runnerform['dorsal'].value;


    const nuevoRunner = {
        nombre,
        edad,
        categoria,
        dorsal
    }   

    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoRunner)
    }


    try {
        const response = await fetch(apiUrl, opciones)
        
        if (!response.ok) {
            throw new Error('Error al guardar el corredor');
        }
    
    console.log( `Se guardo el corredor` ) 
    cargarRunners();
    corredorform.reset();    
    } catch (error) {
        console.log('Error al guardar el corredor:', error)
    }

 


})

=======

const apiUrl = 'https://apibox.vercel.app/mzf92Np2itaXUYzhRTIrBBs9ueG0xXt5/corredores';


const cargarRunners = async () => {
    document.querySelector('#loading').classList.remove('hidden');
    const response = await fetch(apiUrl);
    const data = await response.json();
    renderRunners(data);    
}   

const renderRunners = (runners) => {
    const lista = document.querySelector('#lista');

lista.innerHTML = ''

const contador = document.querySelector('#contador');
contador.textContent = runners.length;

    runners.forEach(runner => {
        const li = document.createElement('li');

    
        li.className = 'flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 transition-colors'
        
        li.innerHTML = `
						<div class="shrink-0 w-14 h-14 rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
              <span class="font-mono text-base font-medium">${runner.dorsal}</span>
            </div>

            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium truncate">${runner.nombre}</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">${runner.categoria}</span>
                <span class="text-xs text-neutral-400">${runner.age} años</span>
              </div>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              <button data-action="editar" data-id="${runner.id}" class="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">
                Editar
              </button>
              <button data-action="eliminar" data-id="${runner.id}" class="text-xs text-neutral-400 hover:text-red-500 transition-colors">
                Eliminar
              </button>
            </div>
	
        `
        lista.appendChild(li)
    })   
}

const form = document.querySelector('#form');

form.addEventListener('submit', async(event) => {
    event.preventDefault();
    const runnerform = document.forms['form']

    const nombre = runnerform['nombre'].value;
    const edad = runnerform['edad'].value;
    const categoria = runnerform['categoria'].value;
    const dorsal = runnerform['dorsal'].value;


    const nuevoRunner = {
        nombre,
        edad,
        categoria,
        dorsal
    }   

    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoRunner)
    }


    try {
        const response = await fetch(apiUrl, opciones)
        
        if (!response.ok) {
            throw new Error('Error al guardar el corredor');
        }
    
    console.log( `Se guardo el corredor` ) 
    cargarRunners();
    corredorform.reset();    
    } catch (error) {
        console.log('Error al guardar el corredor:', error)
    }

 


})

>>>>>>> b83d5ae142e437e4c8d48fb17009b49bc6d74323
cargarRunners();    