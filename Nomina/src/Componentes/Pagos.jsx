import { useState } from 'react'

export default function Pagos({ nominas = [], pagos = [], onAddPago }) {
  const [form, setForm] = useState({ nominaId: '', monto: '', fecha: '' })
  const [mensaje, setMensaje] = useState('')

  const selectedNomina = nominas.find((item) => item.id === Number(form.nominaId))

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      if (!selectedNomina) {
        throw new Error('Selecciona primero una nómina')
      }
      onAddPago({
        nominaId: selectedNomina.id,
        monto: form.monto,
        fecha: form.fecha,
        empleadoNombre: selectedNomina.empleadoNombre,
        periodo: selectedNomina.periodo,
      })
      setMensaje(`Pago registrado para ${selectedNomina.empleadoNombre}`)
      setForm({ nominaId: '', monto: '', fecha: '' })
    } catch (error) {
      setMensaje(error.message)
    }
  }

  return (
    <div id="pago" className="vista">
      <h2>Pagos</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <select name="nominaId" value={form.nominaId} onChange={handleChange}>
            <option value="">Selecciona una nómina</option>
            {nominas.map((nomina) => (
              <option key={nomina.id} value={nomina.id}>
                {nomina.empleadoNombre} - {nomina.periodo}
              </option>
            ))}
          </select>
          <input
            name="monto"
            value={form.monto}
            onChange={handleChange}
            placeholder="Monto"
          />
          <input
            name="fecha"
            type="date"
            value={form.fecha}
            onChange={handleChange}
          />
          <button type="submit">Registrar pago</button>
        </form>
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>

      <div className="table-responsive">
        <table id="tablaPagos" border="1" width="100%">
          <thead>
            <tr>
              <th>Empleado</th>
              <th>Periodo</th>
              <th>Monto</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {pagos.length === 0 ? (
              <tr>
                <td colSpan="4">No hay pagos registrados</td>
              </tr>
            ) : (
              pagos.map((pago) => (
                <tr key={pago.id}>
                  <td>{pago.empleadoNombre}</td>
                  <td>{pago.periodo}</td>
                  <td>{pago.monto}</td>
                  <td>{pago.fecha}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
