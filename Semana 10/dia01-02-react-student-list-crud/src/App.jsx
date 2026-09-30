import React from 'react'

const App = () => {
  return (
    <main className="w-80 mx-auto bg-white border border-slate-300 rounded-2xl mt-6 p-5 shadow-sm font-sans">
      
      {/* Título Principal */}
      <h1 className="text-xl text-center text-slate-800 font-bold mb-4">
        Student CRUD
      </h1>

      {/* Formulario */}
      <form className="flex flex-col gap-3 bg-slate-100 p-4 rounded-xl border border-slate-700">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-bold text-slate-800">
            Name
          </span>
          <input 
            className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg w-full px-3 py-2 outline-none"
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-bold text-slate-800">
            City
          </span>
          <input
            className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg w-full px-3 py-2 outline-none"
            type="text"
            name="city"
            placeholder="Ex. Chiclayo"
          />
        </label>

        {/* Botones Save y Clear */}
        <div className="flex gap-2 pt-2">  
          <input
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm flex-1 py-2 cursor-pointer transition-colors" 
            type="submit"
            value="Save"
          />
          <input 
            className="bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-xl text-sm flex-1 py-2 cursor-pointer transition-colors"
            type="reset"
            value="Clear"
          />
        </div>
      </form>

      {/* Subtítulo */}
      <h2 className="text-sm font-bold text-center mt-5 mb-3 text-slate-800">
        Student list
      </h2>

      {/* BARRA DE CABECERA (Exacta a la imagen) */}
      <div className="grid grid-cols-3 bg-slate-100 border border-slate-700 rounded-xl px-4 py-2 text-sm font-semibold text-slate-800">
        <div className="text-left">Name</div>
        <div className="text-center">city</div>       
        <div className="text-right">Actions</div>
      </div>

      {/* LISTA DE ESTUDIANTES */}
      <div className="grid grid-cols-3 items-center px-4 py-2 text-sm text-slate-800 font-medium">
        <div className="text-left">Student 1</div>
        <div className="text-center">Chiclayo</div>
        <div className="flex justify-end gap-1 text-base">
          <button className="hover:scale-110 transition-transform">✏️</button>
          <button className="hover:scale-110 transition-transform">❌</button>
        </div>
      </div>

    </main>
  )
}

export default App