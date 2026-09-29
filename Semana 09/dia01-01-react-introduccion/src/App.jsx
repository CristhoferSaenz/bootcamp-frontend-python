// 01 componnte base usando function



// que es un componente ?
// Un componente en React es una pieza reutilizable de código que puede contener su propio estado y lógica. Puede ser una función o una clase que devuelve JSX (JavaScript XML), que es una sintaxis similar a HTML que se puede usar en JavaScript.

// partes de un componente
// 1. Importaciones: Se importan las dependencias necesarias, como React y otros módulos.
// 2. logica del componente: Se define la función o clase que representa el componente. Aquí es donde se puede manejar el estado, los efectos secundarios y otras funcionalidades.
//3. retorno de JSX: La función o clase devuelve JSX, que describe cómo se verá la interfaz de usuario del componente.
//4. exportación: Se exporta el componente para que pueda ser utilizado en otras partes de la aplicación.

// reglas basica de un componente
// *un solo componente por archivo
// *es recomendable que el nombre del archivo sea el mismo que el del componente ejemplo: si el componente se llama "MiComponente", el archivo debe llamarse "MiComponente.jsx".

// 02 componente usando mutiples lineas

/* function App(){
  return (
    <div>
      <h1>Hola Mundo</h1>
      <p>Bienvenidos a mi primer componente</p>
    </div>
  )
} */

/* export default App */

// 03 componente usando fragment
// Un fragmento en React es una forma de agrupar múltiples elementos sin agregar un nodo adicional al DOM. Se utiliza cuando se desea devolver varios elementos desde un componente sin envolverlos en un contenedor adicional, como un <div>.

/*  function App(){
  return (
    <div>
      <h1>React.js</h1>
      <p>Bienvenidos estamos aprendiendo React</p>
    </div>
  )
} 
  */

//04 exrensiones vscode para usar con react.js
// snippets de reactjs code snippets

//snipert: rfc

/*  function App() {
  return (
    <div>App</div>
  )
}

export default App
 */

//snippet: rafce

/* import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
 */
//05 anidar componentes dentro de otros componentes

/* function ComponenteApp() {
  return <h4>Hola soy un componente anidado</h4>
}

function ComponenteApp2() {
  return <h4>Hola soy un componente anidado 2</h4>
} 

const app = () => {
  return (
    <section>
      <h1>Hola Mundo</h1>
      <p>Bienvenidos a mi primer componente</p>

      <ComponenteApp />
      <ComponenteApp2 />  

    </section>
  )
}

export default app */

//06 importar y exportar componentes externos

/* import ComponenteSaludo from './components/ComponenteSaludo.jsx'

const app = () => {
  return (
    <section>
      <h1>componentes externos</h1>
      <ComponenteSaludo />

    </section>
  )
}

export default app */

//07 usando expresiones con JSX 

//import nombreexportado, {frutas, curso} from './modulo.js'

//const app = () => {
  //logica del componente

 // const suma = 2 + 2
 // const nombre = "Alexis"
 // const edad = 25

  // comentario: JSX permite usar expresiones de JavaScript dentro de llaves {}

//  return (
//    <section>
//      <h1>Expresiones con JSX</h1>
//      <p>Bienvenidos a mi primer componente</p>
//      <p>La suma es: {suma}</p>
//      <p>El nombre es: {nombre}</p>
//      <p>La edad es: {edad}</p>      
//      {/* Este es un comentario en JSX */}

//      <p>{frutas}</p>
//      <p>{JSON.stringify(curso)}</p>
//      <p>{curso.nombre}</p> 

//</section>  
//  )
//} 
//export default app
 

// 09 propiedades de un componente 

/* const ComponenteSaludo = (props) => {
  return <h4>Hola {props.nombre}, tienes {props.edad} años</h4>
} 

const App = () => {
  return (
    <section>
      <h4>Propiedades de un componente</h4>

      <ComponenteSaludo nombre="Alexis" edad={25} />
      <ComponenteSaludo nombre="Juan" edad={30} />
    </section>  
  )
}
 export default App*/

//10 propiedades de un componente usando destructuring

const ComponenteSaludo = (props) => {
  const { nombre, edad } = props;
  return <h4>Hola {nombre}, tienes {edad} años</h4>
} 

const App = () => {
  return (
    <section>
      <h4>Propiedades de un componente</h4>

      <ComponenteSaludo nombre="Alexis" edad={25} />
      <ComponenteSaludo nombre="Juan" edad={30} />
    </section>  
  )
}

export default App


