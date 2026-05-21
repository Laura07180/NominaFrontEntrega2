import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar({ user, onLogout }) {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-logo-section">
          <Link to="/" className="navbar-logo">
            <span className="logo-text">CESDE</span>
          </Link>
        </div>

        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            >
              Inicio
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link 
                  to="/cargos" 
                  className={`navbar-link ${isActive('/cargos') ? 'active' : ''}`}
                >
                  Cargos
                </Link>
              </li>
              <li>
                <Link 
                  to="/empleados" 
                  className={`navbar-link ${isActive('/empleados') ? 'active' : ''}`}
                >
                  Empleados
                </Link>
              </li>
              <li>
                <Link 
                  to="/deducciones" 
                  className={`navbar-link ${isActive('/deducciones') ? 'active' : ''}`}
                >
                  Deducciones
                </Link>
              </li>
              <li>
                <Link 
                  to="/bonificaciones" 
                  className={`navbar-link ${isActive('/bonificaciones') ? 'active' : ''}`}
                >
                  Bonificaciones
                </Link>
              </li>
              <li>
                <Link 
                  to="/nomina" 
                  className={`navbar-link ${isActive('/nomina') ? 'active' : ''}`}
                >
                  Nómina
                </Link>
              </li>
              <li>
                <Link 
                  to="/pagos" 
                  className={`navbar-link ${isActive('/pagos') ? 'active' : ''}`}
                >
                  Pagos
                </Link>
              </li>
              <li>
                <Link 
                  to="/gastos" 
                  className={`navbar-link ${isActive('/gastos') ? 'active' : ''}`}
                >
                  Gastos
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link 
                  to="/login" 
                  className={`navbar-link ${isActive('/login') ? 'active' : ''}`}
                >
                  Ingresar
                </Link>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className={`navbar-link ${isActive('/register') ? 'active' : ''}`}
                >
                  Registrarse
                </Link>
              </li>
            </>
          )}
        </ul>

        {user && (
          <div className="navbar-user">
            <span className="user-name">{user.nombres}</span>
            <button 
              type="button" 
              onClick={onLogout}
              className="logout-btn"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
