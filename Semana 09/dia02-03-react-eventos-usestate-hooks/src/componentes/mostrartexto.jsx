import { useState } from "react"

const MostrarTexto = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div style={styles.tarjeta}>
      <button 
        style={styles.boton} 
        onClick={() => setVisible(prev => !prev)}
      >
        {visible ? "Ocultar " : "Mostrar "}
      </button>

      {visible && (
        <p style={styles.mensaje}>
          ¡Hola a todos! 😜
        </p>
      )}
    </div>
  )
}

const styles = {
  tarjeta: {
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '24px',
    width: '280px',
    textAlign: 'center',
    margin: '20px auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
    fontFamily: 'system-ui, sans-serif'
  },
  boton: {
    padding: '10px 18px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: '#6366f1',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  mensaje: {
    margin: '16px 0 0 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1f2937'
  }
}

export default MostrarTexto