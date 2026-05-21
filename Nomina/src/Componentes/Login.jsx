import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Auth.css'

export default function Login({ onLogin }) {
  const navigate = useNavigate()
  const [documento, setDocumento] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await onLogin(documento)
    if (result.success) {
      navigate('/')
    } else {
      setMensaje(result.message)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <span className="logo-icon">💼</span>
          <h1>Inicio de Sesión</h1>
          <p>Accede a tu cuenta de Talento Humano</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="documento">Número de Documento</label>
            <input
              id="documento"
              type="text"
              value={documento}
              onChange={(event) => setDocumento(event.target.value)}
              placeholder="Ingresa tu documento"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Ingresar
          </button>
        </form>

        {mensaje && (
          <div className="auth-message error">
            {mensaje}
          </div>
        )}

        <div className="auth-footer">
          <span className="link-text">¿No tienes cuenta?</span>
          <Link to="/register">Regístrate aquí</Link>
        </div>
      </div>
    </div>
  )
}
