export default function MisGastos({ user, movimientos = [] }) {
  const totalMovimientos = movimientos.length
  const totalGastos = movimientos.filter((m) => m.tipo === 'Gasto').length
  const totalPagos = movimientos.filter((m) => m.tipo === 'Pago').length
  const totalDeducciones = movimientos.filter((m) => m.tipo === 'Deducción').length
  const totalBonificaciones = movimientos.filter((m) => m.tipo === 'Bonificación').length

  return (
    <div id="mis-gastos" className="vista">
      <h2>Movimientos de {user?.nombres}</h2>
      <div className="banner">
        <div>
          <strong>Total de movimientos:</strong>
          <div>{totalMovimientos}</div>
        </div>
        <div>
          <strong>Gastos:</strong>
          <div>{totalGastos}</div>
        </div>
        <div>
          <strong>Pagos:</strong>
          <div>{totalPagos}</div>
        </div>
        <div>
          <strong>Deducciones:</strong>
          <div>{totalDeducciones}</div>
        </div>
        <div>
          <strong>Bonificaciones:</strong>
          <div>{totalBonificaciones}</div>
        </div>
      </div>

      <div className="table-responsive">
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {movimientos.length === 0 ? (
              <tr>
                <td colSpan="5">No hay movimientos registrados</td>
              </tr>
            ) : (
              movimientos.map((movimiento) => (
                <tr key={movimiento.id}>
                  <td>{movimiento.tipo}</td>
                  <td>{movimiento.valor}</td>
                  <td>{movimiento.descripcion}</td>
                  <td>{movimiento.fecha || '-'}</td>
                  <td>{movimiento.categoria || '-'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
