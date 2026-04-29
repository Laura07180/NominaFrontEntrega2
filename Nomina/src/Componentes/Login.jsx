import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login({ onLogin }) {
  const navigate = useNavigate()
  const [documento, setDocumento] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = onLogin(documento)
    if (result.success) {
      navigate('/gastos')
    } else {
      setMensaje(result.message)
    }
  }

  return (
    <div id="login" className="vista">
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleSubmit} className="card">
        <input
          value={documento}
          onChange={(event) => setDocumento(event.target.value)}
          placeholder="Documento"
        />
        <button type="submit">Ingresar</button>
      </form>
      <p>
        ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  )
}
