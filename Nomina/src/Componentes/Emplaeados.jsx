import { useState } from 'react'

export default function Emplaeados({ employees = [], cargos = [], onAddEmployee }) {
  const [form, setForm] = useState({ nombre: '', documento: '', salario: '', cargo: '', cargoId: '' })
  const [mensaje, setMensaje] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === 'cargoId') {
      const selectedCargo = cargos.find((cargoItem) => cargoItem.id === Number(value))
      setForm((prev) => ({
        ...prev,
        cargoId: value,
        cargo: selectedCargo ? selectedCargo.nombre : '',
        salario: selectedCargo ? selectedCargo.salarioBase : '',
      }))
      return
    }

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      const employeeData = {
        nombre: form.nombre,
        documento: form.documento,
        salario: form.salario,
        cargo: form.cargo,
      }
      const employee = onAddEmployee(employeeData)
      setMensaje(`Empleado ${employee.nombre} registrado`)
      setForm({ nombre: '', documento: '', salario: '', cargo: '', cargoId: '' })
    } catch (error) {
      setMensaje(error.message)
    }
  }

  return (
    <div id="empleado" className="vista">
      <h2>Gestión de Empleados</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
          <input
            name="documento"
            value={form.documento}
            onChange={handleChange}
            placeholder="Documento"
          />
          <input
            name="salario"
            value={form.salario}
            readOnly
            placeholder="Salario se carga desde el cargo"
          />
          <select name="cargoId" value={form.cargoId} onChange={handleChange}>
            <option value="">Selecciona un cargo</option>
            {cargos.map((cargoItem) => (
              <option key={cargoItem.id} value={cargoItem.id}>
                {cargoItem.nombre}
              </option>
            ))}
          </select>
          <button type="submit">Guardar empleado</button>
        </form>
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>

      <div className="table-responsive">
        <table id="tablaEmpleados" border="1" width="100%">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Documento</th>
              <th>Salario</th>
              <th>Cargo</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="4">No hay empleados registrados</td>
              </tr>
            ) : (
              employees.map((empleado) => (
                <tr key={empleado.id}>
                  <td>{empleado.nombre}</td>
                  <td>{empleado.documento}</td>
                  <td>{empleado.salario}</td>
                  <td>{empleado.cargo}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
