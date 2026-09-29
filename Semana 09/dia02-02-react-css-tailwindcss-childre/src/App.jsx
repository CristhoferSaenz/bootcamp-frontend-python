import './Card.css'

//Propiedad del cntenido hijo 


const Card = ({ children }) => {
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
  <p className="description">{ children || 'Contenido por defecto' }</p>
  <button className="button">Click me</button>

</section>

  )
}

const CardConTailwind = () => {
    return (
<section className="mt-4 bg-orange-500 w-[300px] p-4 flex- col gap-4 rounded-md"
> 
  <h1 className="text-xl font-bold text-white text-center">Hola soy un componente anidado</h1>
  <p className="text-center text-gray-300">Este es un párrafo dentro del componente anidado.</p>
  <button className="w-full bg-white text-orange-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md">Click me</button>
</section>

  )
}

const App = () => {
  return (
    <section>
      <h1 className='tex-2xl text-center text-amber-700 mb-8'>React + css + tailwindcss</h1>

      <Card>
        Usamos la propiedad (children)
      </Card>

      <Card />


      <CardConTailwind />

    </section>
  )
}

export default App