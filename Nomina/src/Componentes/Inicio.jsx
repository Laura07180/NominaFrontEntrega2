import React from 'react'

export default function Inicio({ user, totalUsers = 0, totalNominas = 0, totalPagos = 0 }) {
  return (
    <div>
      <div id="inicio" className="vista activa">
        <h1>¡Bienvenido a Talento Humano!</h1>
        {user ? (
          <p>Hola {user.nombres}, ya estás autenticado.</p>
        ) : (
          <p>Sistema de gestión de nómina - CESDE</p>
        )}

        <div className="banner">
          <div>
            <strong>Total personas registradas:</strong>
            <div id="countEmpleados">{totalUsers}</div>
          </div>
          <div>
            <strong>Nóminas generadas:</strong>
            <div id="countNominas">{totalNominas}</div>
          </div>
          <div>
            <strong>Pagos realizados:</strong>
            <div id="countPagos">{totalPagos}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
