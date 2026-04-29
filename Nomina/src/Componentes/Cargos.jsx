import { useState } from 'react'

export default function Cargos({ cargos = [], onAddCargo }) {
  const [form, setForm] = useState({ nombre: '', salarioBase: '' })
  const [mensaje, setMensaje] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      const cargo = onAddCargo(form)
      setMensaje(`Cargo ${cargo.nombre} guardado`)
      setForm({ nombre: '', salarioBase: '' })
    } catch (error) {
      setMensaje(error.message)
    }
  }

  return (
    <div id="cargo" className="vista">
      <h2>Gestión de Cargos</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre del cargo"
          />
          <input
            name="salarioBase"
            value={form.salarioBase}
            onChange={handleChange}
            placeholder="Salario base"
          />
          <button type="submit">Guardar cargo</button>
        </form>
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>

        <div className="table-responsive">
          <table id="tablaCargos" border="1" width="100%">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Salario base</th>
              </tr>
            </thead>
            <tbody>
              {cargos.length === 0 ? (
                <tr>
                  <td colSpan="2">No hay cargos registrados</td>
                </tr>
              ) : (
                cargos.map((cargo) => (
                  <tr key={cargo.id}>
                    <td>{cargo.nombre}</td>
                    <td>{cargo.salarioBase}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
    </div>
  )
}