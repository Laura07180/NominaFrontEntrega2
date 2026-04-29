import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Registro({ onRegister }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nombres: '',
    tipoDocumento: 'Cédula',
    documento: '',
    edad: '',
  })
  const [mensaje, setMensaje] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = onRegister(form)
    setMensaje(result.message)
    if (result.success) {
      navigate('/login')
    }
  }

  return (
    <div id="registro" className="vista">
      <h2>Registro de usuario</h2>
      <form onSubmit={handleSubmit} className="card">
        <input
          name="nombres"
          value={form.nombres}
          onChange={handleChange}
          placeholder="Nombres"
        />
        <select name="tipoDocumento" value={form.tipoDocumento} onChange={handleChange}>
          <option value="Cédula">Cédula</option>
          <option value="Tarjeta de identidad">Tarjeta de identidad</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
        <input
          name="documento"
          value={form.documento}
          onChange={handleChange}
          placeholder="Documento"
        />
        <input
          name="edad"
          value={form.edad}
          onChange={handleChange}
          placeholder="Edad"
          type="number"
          min="1"
        />
        <button type="submit">Crear perfil</button>
      </form>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  )
}
