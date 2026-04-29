import { Link } from 'react-router-dom'

export default function Navbar({ user, onLogout }) {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link>
        {user ? (
          <>
            <Link to="/empleados">Empleados</Link>
            <Link to="/cargos">Cargos</Link>
            <Link to="/nomina">Nómina</Link>
            <Link to="/pagos">Pagos</Link>
            <Link to="/deducciones">Deducciones</Link>
            <Link to="/bonificaciones">Bonificaciones</Link>
            <Link to="/gastos">Mis Gastos</Link>
            <button type="button" onClick={onLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Ingresar</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}
      </nav>
    </div>
  )
}
