import { useState } from 'react'

export default function Pagos({ nominas = [], pagos = [], deducciones = [], bonificaciones = [], onAddPago }) {
  const [form, setForm] = useState({ nominaId: '', fecha: '' })
  const [mensaje, setMensaje] = useState('')

  const selectedNomina = nominas.find((item) => item.id === Number(form.nominaId))

  const selectedNominaSalario = selectedNomina
    ? Number(String(selectedNomina.salarioBase ?? selectedNomina.salario ?? 0).replace(/[^0-9.-]+/g, ''))
    : 0

  const totalDeducciones = selectedNomina
    ? deducciones
        .filter((item) => item.empleadoDocumento === selectedNomina.empleadoDocumento)
        .reduce(
          (sum, item) => sum + Number(String(item.valor || 0).replace(/[^0-9.-]+/g, '')),
          0,
        )
    : 0

  const totalBonificaciones = selectedNomina
    ? bonificaciones
        .filter((item) => item.empleadoDocumento === selectedNomina.empleadoDocumento)
        .reduce(
          (sum, item) => sum + Number(String(item.valor || 0).replace(/[^0-9.-]+/g, '')),
          0,
        )
    : 0

  const montoCalculado = selectedNomina
    ? selectedNominaSalario + totalBonificaciones - totalDeducciones
    : ''

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
      if (!form.fecha) {
        throw new Error('Selecciona una fecha de pago')
      }
      if (Number.isNaN(montoCalculado)) {
        throw new Error('El monto calculado no es válido. Revisa la nómina y las deducciones.')
      }
      onAddPago({
        nominaId: selectedNomina.id,
        monto: montoCalculado,
        fecha: form.fecha,
        empleadoNombre: selectedNomina.empleadoNombre,
        periodo: selectedNomina.periodo,
      })
      setMensaje(`Pago registrado para ${selectedNomina.empleadoNombre}`)
      setForm({ nominaId: '', fecha: '' })
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

          <div className="pago-detalle">
            <div>
              <strong>Salario base:</strong>
              <span>{selectedNomina ? selectedNominaSalario : '-'}</span>
            </div>
            <div>
              <strong>Bonificaciones:</strong>
              <span>{selectedNomina ? totalBonificaciones : 0}</span>
            </div>
            <div>
              <strong>Deducciones:</strong>
              <span>{selectedNomina ? totalDeducciones : 0}</span>
            </div>
            <div>
              <strong>Monto a pagar:</strong>
              <span>{selectedNomina ? montoCalculado : '-'}</span>
            </div>
          </div>

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
