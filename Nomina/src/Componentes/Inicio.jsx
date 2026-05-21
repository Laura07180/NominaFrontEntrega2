import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Inicio.css'

export default function Inicio({ user, totalUsers = 0, totalNominas = 0, totalPagos = 0 }) {
  const navigate = useNavigate()

  const handleAction = (path) => () => {
    navigate(path)
  }

  return (
    <div id="inicio" className="inicio-container">
      {user ? (
        <>
          <div className="hero-section">
            <div className="hero-content">
              <h1>¡Bienvenido de vuelta, <span className="highlight">{user.nombres}</span>!</h1>
              <p>Sistema de gestión de nómina y talento humano</p>
            </div>
            <div className="hero-decoration">
              <div className="decoration-circle"></div>
            </div>
          </div>

          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3>Personas Registradas</h3>
                <p className="stat-number">{totalUsers}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <h3>Nóminas Generadas</h3>
                <p className="stat-number">{totalNominas}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-content">
                <h3>Pagos Realizados</h3>
                <p className="stat-number">{totalPagos}</p>
              </div>
            </div>
          </div>

          <div className="quick-actions">
            <h2>Acciones Rápidas</h2>
            <div className="actions-grid">
              <button type="button" className="action-btn action-btn-primary" onClick={handleAction('/empleados')}>
                <span>➕</span> Nuevo Empleado
              </button>
              <button type="button" className="action-btn action-btn-secondary" onClick={handleAction('/nomina')}>
                <span>📝</span> Generar Nómina
              </button>
              <button type="button" className="action-btn action-btn-accent" onClick={handleAction('/pagos')}>
                <span>💳</span> Procesar Pago
              </button>
              <button type="button" className="action-btn action-btn-tertiary" onClick={handleAction('/gastos')}>
                <span>📈</span> Ver Reportes
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="login-welcome">
          <div className="welcome-content">
            <h1>Sistema de Gestión de Talento Humano</h1>
            <p>Administra nóminas, empleados y recursos humanos de forma eficiente</p>
            <div className="welcome-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <p>Gestión de nómina automatizada</p>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <p>Control de empleados y cargos</p>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <p>Reportes y análisis detallados</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
