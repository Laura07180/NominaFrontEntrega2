import { useState } from 'react'

export default function Bonificacion({ employees = [], bonificaciones = [], onAddBonificacion }) {
  const [form, setForm] = useState({ empleadoDocumento: '', tipo: '', valor: '' })
  const [mensaje, setMensaje] = useState('')

  const selectedEmployee = employees.find((item) => item.documento === form.empleadoDocumento)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      if (!selectedEmployee) {
        throw new Error('Selecciona un empleado válido')
      }
      onAddBonificacion({
        empleadoDocumento: selectedEmployee.documento,
        empleadoNombre: selectedEmployee.nombre,
        tipo: form.tipo,
        valor: form.valor,
      })
      setMensaje(`Bonificación registrada para ${selectedEmployee.nombre}`)
      setForm({ empleadoDocumento: '', tipo: '', valor: '' })
    } catch (error) {
      setMensaje(error.message)
    }
  }

  return (
    <div id="bonificacion" className="vista">
      <h2>Bonificaciones</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <select name="empleadoDocumento" value={form.empleadoDocumento} onChange={handleChange}>
            <option value="">Selecciona un empleado</option>
            {employees.map((empleado) => (
              <option key={empleado.id} value={empleado.documento}>
                {empleado.nombre}
              </option>
            ))}
          </select>
          <input
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            placeholder="Tipo bonificación"
          />
          <input
            name="valor"
            value={form.valor}
            onChange={handleChange}
            placeholder="Valor"
          />
          <button type="submit">Guardar bonificación</button>
        </form>
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>

      <div className="table-responsive">
        <table id="tablaBonificaciones" border="1" width="100%">
          <thead>
            <tr>
              <th>Empleado</th>
              <th>Bonificación</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {bonificaciones.length === 0 ? (
              <tr>
                <td colSpan="3">No hay bonificaciones registradas</td>
              </tr>
            ) : (
              bonificaciones.map((bonificacion) => (
                <tr key={bonificacion.id}>
                  <td>{bonificacion.empleadoNombre}</td>
                  <td>{bonificacion.tipo}</td>
                  <td>{bonificacion.valor}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
