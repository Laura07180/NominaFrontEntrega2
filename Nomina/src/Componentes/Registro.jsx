import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/Auth.css'

export default function Registro({ onRegister }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nombres: '',
    tipoDocumento: 'Cédula',
    documento: '',
    edad: '',
  })
  const [mensaje, setMensaje] = useState('')
  const [tipoMensaje, setTipoMensaje] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = onRegister(form)
    setMensaje(result.message)
    setTipoMensaje(result.success ? 'success' : 'error')
    if (result.success) {
      setTimeout(() => navigate('/login'), 2000)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <span className="logo-icon">📝</span>
          <h1>Crear Cuenta</h1>
          <p>Regístrate en Talento Humano</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="nombres">Nombres Completos</label>
            <input
              id="nombres"
              name="nombres"
              type="text"
              value={form.nombres}
              onChange={handleChange}
              placeholder="Ej: Juan Carlos Pérez"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tipoDocumento">Tipo de Documento</label>
            <select 
              id="tipoDocumento"
              name="tipoDocumento" 
              value={form.tipoDocumento} 
              onChange={handleChange}
            >
              <option value="Cédula">Cédula</option>
              <option value="Tarjeta de identidad">Tarjeta de Identidad</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="documento">Número de Documento</label>
            <input
              id="documento"
              name="documento"
              type="text"
              value={form.documento}
              onChange={handleChange}
              placeholder="Ej: 1234567890"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="edad">Edad</label>
            <input
              id="edad"
              name="edad"
              type="number"
              value={form.edad}
              onChange={handleChange}
              placeholder="Ej: 25"
              min="1"
              max="120"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Crear Perfil
          </button>
        </form>

        {mensaje && (
          <div className={`auth-message ${tipoMensaje}`}>
            {mensaje}
          </div>
        )}

        <div className="auth-footer">
          <span className="link-text">¿Ya tienes cuenta?</span>
          <Link to="/login">Inicia sesión aquí</Link>
        </div>
      </div>
    </div>
  )
}
  

