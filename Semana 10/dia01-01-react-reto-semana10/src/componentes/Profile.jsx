
const Profile = ({ nombre, role }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.nombre}>{nombre}</h3>
      <p style={styles.role}> Rol: {role}</p>
    </div>
  )
}

// Estilos básicos para que cada perfil se vea como una tarjeta
const styles = {
  card: {
    border: '1px solid #f02525',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px 0',
    backgroundColor: '#f6c3c3',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    color: '#333'
  },
  nombre: {
    margin: '0 0 8px 0',
    color: '#2c3e50'
  },
  role: {
    margin: 0,
    fontWeight: 'bold',
    color: '#6366f1'
  }
}

export default Profile