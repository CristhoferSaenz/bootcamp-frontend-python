const API_URL = 'https://apibox.vercel.app/mzf92Np2itaXUYzhRTIrBBs9ueG0xXt5/tareas'

async function request(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
  })

  const responseText = response.status === 204 ? '' : await response.text()
  let data = null
  if (responseText) {
    try {
      data = JSON.parse(responseText)
    } catch {
      data = responseText
    }
  }

  if (!response.ok) {
    const message = typeof data === 'object' && data
      ? data.message || data.error
      : data
    throw new Error(message || `APIBox respondió con el código ${response.status}.`)
  }

  return data
}

function unwrapList(data) {
  if (Array.isArray(data)) return data
  if (Array.isArray(data?.data)) return data.data
  if (Array.isArray(data?.tareas)) return data.tareas
  throw new Error('APIBox no devolvió una lista de tareas válida.')
}

function unwrapRecord(data) {
  if (Array.isArray(data)) return data[0] ?? null
  if (data && typeof data === 'object') return data.data ?? data.task ?? data.tarea ?? data
  return null
}

export function normalizeTask(task, index = 0) {
  const completed = task.completed ?? task.completado ?? task.completada ?? task.done ?? false
  return {
    ...task,
    id: String(task.id ?? task._id ?? task.uuid ?? `apibox-${index}`),
    title: task.title ?? task.titulo ?? 'Tarea sin título',
    description: task.description ?? task.descripcion ?? '',
    module: task.module ?? task.modulo ?? '',
    priority: task.priority ?? task.prioridad ?? 'Media',
    dueDate: task.dueDate ?? task.fechaLimite ?? task.fecha_limite ?? '',
    completed: completed === true || completed === 'true' || completed === 1,
    createdAt: task.createdAt ?? task.created_at ?? Date.now(),
  }
}

export async function fetchTasks() {
  const raw = unwrapList(await request(API_URL))
  return { tasks: raw.map(normalizeTask), raw }
}

export async function createTask(task) {
  const apiTask = { ...task }
  delete apiTask.id
  const result = await request(API_URL, {
    method: 'POST',
    body: JSON.stringify(apiTask),
  })
  const record = unwrapRecord(result)
  return normalizeTask(record ? { ...task, ...record } : task)
}

export async function updateTask(task) {
  const apiTask = { ...task }
  delete apiTask.id
  const result = await request(`${API_URL}/${encodeURIComponent(task.id)}`, {
    method: 'PUT',
    body: JSON.stringify(apiTask),
  })
  const record = unwrapRecord(result)
  return normalizeTask(record ? { ...task, ...record } : task)
}

export async function deleteTask(id) {
  await request(`${API_URL}/${encodeURIComponent(id)}`, { method: 'DELETE' })
}
