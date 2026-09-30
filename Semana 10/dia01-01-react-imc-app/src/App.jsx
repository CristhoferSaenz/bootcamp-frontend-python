import { useState } from "react"

const App = () => {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)

  const handlePeso = (event) => {
    setPeso(Number(event.target.value))
  }

  const handleAltura = (event) => {
    setAltura(Number(event.target.value))
  }

  const alturaM = altura / 100
  const imc = alturaM > 0 ? peso / (alturaM ** 2) : 0
  const imcDecimal = imc.toFixed(2)

  // TODO: Según el IMC mostrar los siguientes valores:
  // Menor a < 18.5 -> Bajo peso
  // Menor a 18.5 - 24.9 -> Peso saludable
  // Menor a 25.0 - 29.9 -> Sobrepeso
  // Menor a > 30.0 -> Obesidad

  let imcResultado = "???"

  if (imc > 0) {
    if (imc < 18.5) {
      imcResultado = "Bajo peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
      imcResultado = "Peso saludable"
    } else if (imc >= 25.0 && imc <= 29.9) {
      imcResultado = "Sobrepeso"
    } else if (imc >= 30.0) {
      imcResultado = "Obesidad"
    }
  }

  return (
    <section className="w-[400px] h-[400px] bg-slate-200 p-6 mt-8 mx-auto rounded-lg shadow-lg flex flex-col justify-between"> 
      <h1 className="text-3xl text-sky-600 text-center font-bold">IMC Calculator</h1>

      <div className="pt-4">
        <h3 className="font-bold">Peso = {peso} kg</h3>
        <input
          type="range"
          min="0"
          max="200"
          value={peso}
          className="w-full accent-sky-600 cursor-pointer"
          onChange={handlePeso}
        />
      </div>

      <div className="pt-4">
        <h3 className="font-bold">Altura = {altura} cm</h3>
        <input
          type="range"
          min="0"
          max="200"
          value={altura}
          className="w-full accent-sky-600 cursor-pointer"
          onChange={handleAltura}
        />
      </div>

      <div className="text-center pt-2">
        <p className="font-bold text-gray-700">Tu IMC es {imcDecimal}</p>
        <p className="font-bold text-xl text-sky-700">Estado de IMC es : {imcResultado}</p>
      </div>
    </section>
  )
}

export default App