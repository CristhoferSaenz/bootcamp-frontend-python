import React from 'react'
import Profile from './componentes/Profile'

const App = () => {
  return (
    <section>
      <h1>Reto Semana 10</h1>
      <p>Desarrolla un componente Profile que reciba las propiedades nombre y role, y muestre la información en una tarjeta.</p>
      <Profile nombre="Juan Pérez" role="Desarrollador Frontend" />
      <Profile nombre="María López" role="Diseñadora UX/UI" />
      <Profile nombre="Carlos García" role="Project Manager" />
    </section>
  )
}

export default App