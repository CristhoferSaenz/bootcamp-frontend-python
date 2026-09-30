import MostrarTexto from './componentes/mostrartexto' 
import Contador from './componentes/Contador'

const App = () => {
  return (
    <section> 
      <h1 className='text-2xl text-center text-amber-700 mb-8'>React + eventos + useState + hooks</h1>
      
      <MostrarTexto />
      <Contador />

    </section>
  )
}

export default App