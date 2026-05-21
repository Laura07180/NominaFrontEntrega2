import { useState } from 'react'

const DEDUCCIONES_PREDEFINIDAS = ['Salud', 'Pensión', 'ARL', 'Fondo de Solidaridad']
const PORCENTAJE_DEDUCCION = 0.04

export default function Deduccion({ employees = [], deducciones = [], onAddDeduccion }) {
  const [form, setForm] = useState({ empleadoDocumento: '', tiposSeleccionados: [] })
  const [mensaje, setMensaje] = useState('')

  const selectedEmployee = employees.find((item) => item.documento === form.empleadoDocumento)
  const salarioEmpleado = selectedEmployee ? Number(String(selectedEmployee.salario).replace(/[^0-9.-]+/g, '')) : 0
  const valorDeduccion = salarioEmpleado ? Number((salarioEmpleado * PORCENTAJE_DEDUCCION).toFixed(2)) : 0

  const handleChange = (event) => {
    const { name, value, checked } = event.target

    if (name === 'tipo') {
      setForm((prev) => ({
        ...prev,
        tiposSeleccionados: checked
          ? [...prev.tiposSeleccionados, value]
          : prev.tiposSeleccionados.filter((item) => item !== value),
      }))
      return
    }

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    try {
      if (!selectedEmployee) {
        throw new Error('Selecciona un empleado válido')
      }

      if (form.tiposSeleccionados.length === 0) {
        throw new Error('Selecciona al menos una deducción para aplicar')
      }

      form.tiposSeleccionados.forEach((tipo) => {
        onAddDeduccion({
          empleadoDocumento: selectedEmployee.documento,
          empleadoNombre: selectedEmployee.nombre,
          tipo: `${tipo} 4%`,
          valor: valorDeduccion,
        })
      })

      setMensaje(`Se aplicaron ${form.tiposSeleccionados.length} deducción(es) del 4% a ${selectedEmployee.nombre}`)
      setForm({ empleadoDocumento: '', tiposSeleccionados: [] })
    } catch (error) {
      setMensaje(error.message)
    }
  }

  return (
    <div id="deduccion" className="vista">
      <h2>Deducciones</h2>
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

          <div className="deduccion-lista">
            <p>Selecciona las deducciones a aplicar (todas serán al 4%):</p>
            {DEDUCCIONES_PREDEFINIDAS.map((tipo) => (
              <label key={tipo} className="deduccion-opcion">
                <input
                  type="checkbox"
                  name="tipo"
                  value={tipo}
                  checked={form.tiposSeleccionados.includes(tipo)}
                  onChange={handleChange}
                />
                {tipo}
              </label>
            ))}
          </div>

          <div className="deduccion-info">
            <p>Valor fijo por deducción: {selectedEmployee ? `${valorDeduccion} COP` : 'Selecciona un empleado'}</p>
            <p>Porcentaje aplicado: 4%</p>
          </div>

          <button type="submit">Aplicar deducciones</button>
        </form>
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>

      <div className="table-responsive">
        <table id="tablaDeducciones" border="1" width="100%">
          <thead>
            <tr>
              <th>Empleado</th>
              <th>Deducción</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {deducciones.length === 0 ? (
              <tr>
                <td colSpan="3">No hay deducciones registradas</td>
              </tr>
            ) : (
              deducciones.map((deduccion) => (
                <tr key={deduccion.id}>
                  <td>{deduccion.empleadoNombre}</td>
                  <td>{deduccion.tipo}</td>
                  <td>{deduccion.valor}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
