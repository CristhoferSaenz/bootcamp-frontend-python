import './Card.css'

const Card = () => {
  return (
<section className="card"
style={{
  backgroundColor: '#f3a5fd',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}}
> 
  <h1 className="title">Hola soy un componente anidado</h1>
  <p className="description">Este es un párrafo dentro del componente anidado.</p>
  <button className="button">Click me</button>
</section>

  )
}

const App = () => {
  return (
    <Card />
  )
}

export default App