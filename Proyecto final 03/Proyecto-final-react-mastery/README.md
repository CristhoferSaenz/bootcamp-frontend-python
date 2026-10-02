# Taskflow — Proyecto final React Mastery

Aplicación responsive para organizar tareas. Incluye CRUD completo, rutas con React Router y persistencia local con `localStorage`.

## Ejecutar en tu computadora

Necesitas Node.js instalado. En una terminal, entra a esta carpeta y ejecuta:

```bash
npm install
npm run dev
```

Vite mostrará una dirección local (normalmente `http://localhost:5173`). Ábrela en el navegador.

Si Vite muestra `Failed to resolve import "react-router-dom"`, abre una terminal en la carpeta del proyecto, detén el servidor si está activo y ejecuta:

```bash
npm install react-router-dom
npm run dev
```

Esto instala el paquete que usa `src/App.jsx` y actualiza el lockfile de npm de esa copia del proyecto.

## Cómo está resuelto, paso a paso

1. **Modelo de datos:** cada tarea tiene `id`, `title`, `description`, `priority`, `dueDate`, `completed` y `createdAt`.
2. **Persistencia:** `App` lee la clave `taskflow.tasks.v1` desde `localStorage` al iniciar y guarda los cambios cada vez que cambia la lista. Si es la primera visita, aparecen tres tareas de ejemplo.
3. **Listado (Read):** el resumen muestra tareas recientes y `/tareas` lista todas. La búsqueda revisa título y descripción; las pestañas filtran todas, pendientes y completadas.
4. **Crear (Create):** `/tareas/nueva` abre un formulario con validación de título, descripción opcional, prioridad y fecha límite.
5. **Editar (Update):** cada tarea se puede editar desde `/tareas/:id/editar`. El checkbox también permite cambiar su estado.
6. **Eliminar (Delete):** el botón de papelera pide confirmación antes de quitar la tarea.
7. **Rutas y estados:** React Router separa el resumen, listado, formulario y edición. Se muestra una pantalla de carga al iniciar y un aviso si falla el almacenamiento.

## Tecnologías

- React 19 con hooks (`useState`, `useEffect`, `useMemo`)
- Vite
- React Router DOM
- CSS propio y `localStorage`

## APIBox

La aplicación usa esta colección como fuente principal de datos:

```text
https://apibox.vercel.app/mzf92Np2itaXUYzhRTIrBBs9ueG0xXt5/tareas
```

Al abrir la aplicación, solicita la lista con `GET`. Crear, editar y eliminar tareas usa `POST`, `PUT /tareas/:id` y `DELETE /tareas/:id`. La colección estaba vacía al integrar el proyecto, por lo que la pantalla inicia sin tareas; los registros nuevos se guardarán allí. `localStorage` conserva una copia local para mostrarla si APIBox no responde.

Cada tarea se envía como JSON con `id`, `title`, `description`, `priority`, `dueDate`, `completed` y `createdAt`.
