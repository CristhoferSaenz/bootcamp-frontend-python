import { useState } from 'react'

const Contador = () => {
  const [contador, setContador] = useState(0)

  return (
    <div style={styles.casillero}>
      <h3 style={styles.titulo}>Contador</h3>
      <span style={styles.numero}>{contador}</span>

      <div style={styles.contenedorBotones}>
        <button 
          style={{ ...styles.boton, backgroundColor: '#dc3545' }} 
          onClick={() => setContador(prev => prev - 1)}
        >
          - Disminuir
        </button>

        <button 
          style={{ ...styles.boton, backgroundColor: '#6c757d' }} 
          onClick={() => setContador(0)}
        >
          Reiniciar
        </button>

        <button 
          style={{ ...styles.boton, backgroundColor: '#28a745' }} 
          onClick={() => setContador(prev => prev + 1)}
        >
          + Aumentar
        </button>
      </div>
    </div>
  )
}

// Estilos inline para que funcione sin necesidad de archivos CSS externos
const styles = {
  casillero: {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '24px',
    width: '300px',
    textAlign: 'center',
    margin: '20px auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    fontFamily: 'system-ui, sans-serif'
  },
  titulo: {
    margin: '0 0 8px 0',
    color: '#666',
    fontSize: '16px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  numero: {
    display: 'block',
    fontSize: '56px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px'
  },
  contenedorBotones: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center'
  },
  boton: {
    padding: '10px 14px',
    fontSize: '13px',
    border: 'none',
    borderRadius: '6px',
    color: '#ffffff',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
}

export default Contador