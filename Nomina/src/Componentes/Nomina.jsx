import { useState } from 'react'

export default function Nomina({ employees = [], nominas = [], onAddNomina }) {
  const [form, setForm] = useState({ empleadoDocumento: '', periodo: '' })
  const [mensaje, setMensaje] = useState('')

  const selectedEmployee = employees.find((item) => item.documento === form.empleadoDocumento)
  const salarioBase = selectedEmployee?.salario || ''
  const cargo = selectedEmployee?.cargo || ''

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      if (!selectedEmployee) {
        throw new Error('Debes seleccionar un empleado válido')
      }
      const newNomina = onAddNomina({
        empleadoDocumento: form.empleadoDocumento,
        periodo: form.periodo,
        salarioBase,
        empleadoNombre: selectedEmployee.nombre,
        cargo,
      })
      setMensaje(`Nómina registrada para ${newNomina.empleadoNombre}`)
      setForm({ empleadoDocumento: '', periodo: '' })
    } catch (error) {
      setMensaje(error.message)
    }
  }

  return (
    <div id="nomina" className="vista">
      <h2>Gestión de Nómina</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <select name="empleadoDocumento" value={form.empleadoDocumento} onChange={handleChange}>
            <option value="">Selecciona un empleado</option>
            {employees.map((empleado) => (
              <option key={empleado.id} value={empleado.documento}>
                {empleado.nombre} - {empleado.documento}
              </option>
            ))}
          </select>
          <input
            name="periodo"
            value={form.periodo}
            onChange={handleChange}
            placeholder="Periodo"
          />
          <button type="submit">Generar nómina</button>
        </form>
        {salarioBase && <p>Salario base actual: {salarioBase}</p>}
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>

      <div className="table-responsive">
        <table id="tablaNominas" border="1" width="100%">
          <thead>
            <tr>
              <th>Empleado</th>
              <th>Documento</th>
              <th>Periodo</th>
              <th>Salario base</th>
              <th>Cargo</th>
            </tr>
          </thead>
          <tbody>
            {nominas.length === 0 ? (
              <tr>
                <td colSpan="5">No hay nóminas registradas</td>
              </tr>
            ) : (
              nominas.map((nomina) => (
                <tr key={nomina.id}>
                  <td>{nomina.empleadoNombre}</td>
                  <td>{nomina.empleadoDocumento}</td>
                  <td>{nomina.periodo}</td>
                  <td>{nomina.salarioBase}</td>
                  <td>{nomina.cargo}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
