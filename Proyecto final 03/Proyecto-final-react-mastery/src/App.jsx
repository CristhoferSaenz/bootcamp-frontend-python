import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { createTask, deleteTask as deleteApiTask, fetchTasks, normalizeTask, updateTask as updateApiTask } from './services/tasksApi'
import './App.css'

const STORAGE_KEY = 'taskflow.tasks.v1'

function AppShell({ tasks, loading, error, setError, onCreate, onUpdate, onDelete }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const addTask = async (task) => { if (await onCreate(task)) navigate('/tareas') }
  const updateTask = async (updated) => { if (await onUpdate(updated)) navigate('/tareas') }
  const toggleTask = (id) => { const task = tasks.find((item) => item.id === id); if (task) onUpdate({ ...task, completed: !task.completed }) }
  const deleteTask = (id) => {
    const task = tasks.find((item) => item.id === id)
    if (task && window.confirm(`¿Eliminar “${task.title}”? Esta acción no se puede deshacer.`)) onDelete(id)
  }
  const filteredTasks = useMemo(() => tasks.filter((task) => `${task.title} ${task.description}`.toLowerCase().includes(query.toLowerCase())), [tasks, query])
  const stats = { total: tasks.length, pending: tasks.filter((task) => !task.completed).length, completed: tasks.filter((task) => task.completed).length }

  return <div className="app-shell">
    <aside className="sidebar">
      <NavLink to="/" className="brand"><span className="brand-mark">✓</span><span>Taskflow<small>ORGANIZA TU DÍA</small></span></NavLink>
      <div className="nav-label">MENÚ</div>
      <nav className="nav-links">
        <NavLink to="/" end><span>⌂</span> Resumen</NavLink>
        <NavLink to="/tareas"><span>▤</span> Todas las tareas <b>{tasks.length}</b></NavLink>
      </nav>
      <div className="sidebar-bottom"><div className="avatar">A</div><div><strong>Mi espacio</strong><small>Plan personal</small></div></div>
    </aside>
    <main className="main-area">
      <header className="topbar"><div className="breadcrumb">Mi espacio <span>/</span> <strong>Organizador</strong></div><div className="top-actions"><label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar tareas..." aria-label="Buscar tareas" /><kbd>⌘ K</kbd></label><span className="today">{new Intl.DateTimeFormat('es', { weekday: 'short', day: 'numeric', month: 'short' }).format(new Date())}</span></div></header>
      {error && <div className="error-banner" role="alert">No se pudieron guardar los cambios: {error}. <button onClick={() => setError('')}>Cerrar</button></div>}
      {loading ? <div className="loading"><span className="spinner" />Cargando tus tareas…</div> : <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} stats={stats} onToggle={toggleTask} onDelete={deleteTask} />} />
        <Route path="/tareas" element={<TaskList tasks={filteredTasks} query={query} onToggle={toggleTask} onDelete={deleteTask} />} />
        <Route path="/tareas/nueva" element={<TaskForm onSave={addTask} />} />
        <Route path="/tareas/:id/editar" element={<TaskEditor tasks={tasks} onSave={updateTask} />} />
        <Route path="*" element={<Dashboard tasks={tasks} stats={stats} onToggle={toggleTask} onDelete={deleteTask} />} />
      </Routes>}
    </main>
  </div>
}

function Dashboard({ tasks, stats, onToggle, onDelete }) {
  const navigate = useNavigate()
  const recent = tasks.slice(0, 4)
  return <section className="page-content">
    <div className="welcome-row"><div><p className="eyebrow">MIÉRCOLES · UN PASO A LA VEZ</p><h1>Tu día, en orden<span>.</span></h1><p className="subtitle">Un espacio tranquilo para enfocarte en lo que importa.</p></div><button className="primary-button" onClick={() => navigate('/tareas/nueva')}><span>＋</span> Nueva tarea</button></div>
    <div className="stat-grid"><StatCard icon="▤" label="Tareas en total" value={stats.total} tone="lavender" /><StatCard icon="◷" label="Por completar" value={stats.pending} tone="peach" /><StatCard icon="✓" label="Completadas" value={stats.completed} tone="mint" /></div>
    <section className="panel task-panel"><div className="panel-heading"><div><p className="eyebrow">VISTA GENERAL</p><h2>Tareas recientes</h2></div><NavLink to="/tareas" className="text-link">Ver todas <span>→</span></NavLink></div>{recent.length ? <TaskRows tasks={recent} onToggle={onToggle} onDelete={onDelete} /> : <EmptyState onCreate={() => navigate('/tareas/nueva')} />}</section>
    <div className="tip-card"><span className="tip-icon">✦</span><div><strong>Un pequeño consejo</strong><p>Divide las tareas grandes en pasos pequeños. Cada avance cuenta.</p></div><span className="tip-sparkle">✳</span></div>
    <footer className="app-footer">Hecho para ayudarte a avanzar <span>✦</span></footer>
  </section>
}

function StatCard({ icon, label, value, tone }) { return <article className="stat-card"><div className={`stat-icon ${tone}`}>{icon}</div><div><p>{label}</p><strong>{value.toString().padStart(2, '0')}</strong></div><span className="stat-dot">↗</span></article> }

function TaskList({ tasks, query, onToggle, onDelete }) {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('Todas')
  const visible = tasks.filter((task) => filter === 'Todas' || (filter === 'Pendientes' ? !task.completed : task.completed))
  return <section className="page-content"><div className="welcome-row"><div><p className="eyebrow">TU ESPACIO DE TRABAJO</p><h1>Todas las tareas<span>.</span></h1><p className="subtitle">{tasks.length} tareas para llevar tus planes a la acción.</p></div><button className="primary-button" onClick={() => navigate('/tareas/nueva')}><span>＋</span> Nueva tarea</button></div>
    <section className="panel task-panel"><div className="list-toolbar"><div className="filter-tabs">{['Todas', 'Pendientes', 'Completadas'].map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="count-label">{visible.length} resultados</span></div>
      {visible.length ? <TaskRows tasks={visible} onToggle={onToggle} onDelete={onDelete} /> : <div className="empty-state"><span className="empty-icon">{query ? '⌕' : '✦'}</span><strong>{query ? 'No encontramos coincidencias' : 'No hay tareas en esta vista'}</strong><p>{query ? 'Prueba con otra palabra.' : 'Crea una tarea y empieza a organizarte.'}</p><button className="secondary-button" onClick={() => navigate('/tareas/nueva')}>＋ Crear tarea</button></div>}
    </section></section>
}

function TaskRows({ tasks, onToggle, onDelete }) {
  const navigate = useNavigate()
  return <div className="task-list">{tasks.map((task) => <article className={`task-row ${task.completed ? 'is-complete' : ''}`} key={task.id}><button className={`check-button ${task.completed ? 'checked' : ''}`} onClick={() => onToggle(task.id)} aria-label={task.completed ? 'Marcar pendiente' : 'Marcar completada'}>{task.completed ? '✓' : ''}</button><div className="task-copy"><strong>{task.title}</strong><p>{task.description || 'Sin descripción'}</p><div className="task-meta"><span className={`priority priority-${task.priority.toLowerCase()}`}><i />{task.priority}</span>{task.dueDate && <span>▦ {new Date(`${task.dueDate}T12:00:00`).toLocaleDateString('es', { day: 'numeric', month: 'short' })}</span>}</div></div><div className="task-actions"><button title="Editar" aria-label="Editar tarea" onClick={() => navigate(`/tareas/${task.id}/editar`)}>✎</button><button title="Eliminar" aria-label="Eliminar tarea" onClick={() => onDelete(task.id)}>⌫</button></div></article>)}</div>
}

function EmptyState({ onCreate }) { return <div className="empty-state"><span className="empty-icon">✦</span><strong>Todo empieza con una idea</strong><p>Crea tu primera tarea y dale forma a tu día.</p><button className="secondary-button" onClick={onCreate}>＋ Crear tarea</button></div> }

function TaskEditor({ tasks, onSave }) { const { id } = useParams(); const task = tasks.find((item) => item.id === id); return task ? <TaskForm initialTask={task} onSave={onSave} /> : <div className="page-content"><div className="empty-state"><strong>No encontramos esa tarea</strong><NavLink to="/tareas" className="text-link">Volver a tareas →</NavLink></div></div> }

function TaskForm({ initialTask, onSave }) {
  const navigate = useNavigate()
  const [title, setTitle] = useState(initialTask?.title ?? '')
  const [description, setDescription] = useState(initialTask?.description ?? '')
  const [priority, setPriority] = useState(initialTask?.priority ?? 'Media')
  const [dueDate, setDueDate] = useState(initialTask?.dueDate ?? '')
  const [formError, setFormError] = useState('')
  const handleSubmit = (event) => { event.preventDefault(); if (!title.trim()) { setFormError('Escribe un título para continuar.'); return } onSave({ ...initialTask, id: initialTask?.id ?? crypto.randomUUID(), title: title.trim(), description: description.trim(), priority, dueDate, completed: initialTask?.completed ?? false, createdAt: initialTask?.createdAt ?? Date.now() }) }
  return <section className="page-content form-page"><div className="welcome-row"><div><p className="eyebrow">{initialTask ? 'ACTUALIZA TUS PLANES' : 'NUEVO COMIENZO'}</p><h1>{initialTask ? 'Editar tarea' : 'Nueva tarea'}<span>.</span></h1><p className="subtitle">{initialTask ? 'Ajusta los detalles cuando lo necesites.' : 'Anota eso que quieres sacar adelante.'}</p></div></div>
    <form className="panel task-form" onSubmit={handleSubmit}><label className="field-label">Título <span>*</span><input autoFocus value={title} onChange={(event) => { setTitle(event.target.value); setFormError('') }} placeholder="Ej. Terminar mi proyecto" maxLength="100" />{formError && <small className="field-error">{formError}</small>}</label><label className="field-label">Descripción <span className="optional">(opcional)</span><textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Agrega algunos detalles para recordar…" rows="4" maxLength="400" /></label><div className="field-grid"><label className="field-label">Prioridad<select value={priority} onChange={(event) => setPriority(event.target.value)}><option>Alta</option><option>Media</option><option>Baja</option></select></label><label className="field-label">Fecha límite <span className="optional">(opcional)</span><input type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} /></label></div><div className="form-actions"><button type="button" className="secondary-button" onClick={() => navigate(-1)}>Cancelar</button><button type="submit" className="primary-button">{initialTask ? 'Guardar cambios' : 'Crear tarea'} <span>→</span></button></div></form>
  </section>
}

export default function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    let active = true
    const loadTasks = async () => {
      try {
        const remoteTasks = await fetchTasks()
        if (!active) return
        setTasks(remoteTasks)
        setError('')
      } catch (loadError) {
        if (!active) return
        try {
          const cachedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
          setTasks(Array.isArray(cachedTasks) ? cachedTasks.map(normalizeTask) : [])
        } catch {
          setTasks([])
        }
        setError(`No se pudo cargar APIBox: ${loadError.message}`)
      } finally {
        if (active) setLoading(false)
      }
    }
    loadTasks()
    return () => { active = false }
  }, [])
  useEffect(() => { if (loading) return; try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)) } catch { setError('revisa el espacio disponible en tu navegador') } }, [tasks, loading])
  const runMutation = async (mutation) => {
    try {
      const result = await mutation()
      setError('')
      return result ?? true
    } catch (mutationError) {
      setError(`APIBox: ${mutationError.message}`)
      return false
    }
  }
  const onCreate = (task) => runMutation(async () => {
    const savedTask = await createTask(task)
    setTasks((current) => [savedTask, ...current])
  })
  const onUpdate = (task) => runMutation(async () => {
    const savedTask = await updateApiTask(task)
    setTasks((current) => current.map((item) => item.id === task.id ? savedTask : item))
  })
  const onDelete = (id) => runMutation(async () => {
    await deleteApiTask(id)
    setTasks((current) => current.filter((item) => item.id !== id))
  })
  return <BrowserRouter><AppShell tasks={tasks} loading={loading} error={error} setError={setError} onCreate={onCreate} onUpdate={onUpdate} onDelete={onDelete} /></BrowserRouter>
}
