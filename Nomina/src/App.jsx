import { useEffect, useState } from 'react'
import Navbar from './Componentes/Navbar'
import Emplaeados from './Componentes/Emplaeados'
import Inicio from './Componentes/Inicio'
import Cargos from './Componentes/Cargos'
import Nomina from './Componentes/Nomina'
import Pagos from './Componentes/Pagos'
import Deduccion from './Componentes/Deduccion'
import Bonificacion from './Componentes/Bonificacion'
import Registro from './Componentes/Registro'
import Login from './Componentes/Login'
import MisGastos from './Componentes/MisGastos'
import PrivateRoute from './Componentes/PrivateRoute'
import { Routes, Route } from 'react-router-dom'
import { getSessionUser, loginUser, logoutUser, registerUser, saveSessionUser, getUsers } from './services/userService'
import { getEmployees, addEmployee } from './services/employeeService'
import { getCargos, addCargo } from './services/cargoService'
import { getNominas, addNomina } from './services/nominaService'
import { getPagos, addPago } from './services/pagoService'
import { getDeducciones, addDeduccion } from './services/deduccionService'
import { getBonificaciones, addBonificacion } from './services/bonificacionService'

export default function App() {
  const [user, setUser] = useState(getSessionUser())
  const [users, setUsers] = useState([])
  const [employees, setEmployees] = useState([])
  const [cargos, setCargos] = useState([])
  const [nominas, setNominas] = useState([])
  const [pagos, setPagos] = useState([])
  const [deducciones, setDeducciones] = useState([])
  const [bonificaciones, setBonificaciones] = useState([])

  // Cargar datos al iniciar
  useEffect(() => {
    getUsers().then(setUsers)
    getEmployees().then(setEmployees)
    getCargos().then(setCargos)
    getNominas().then(setNominas)
    getPagos().then(setPagos)
    getDeducciones().then(setDeducciones)
    getBonificaciones().then(setBonificaciones)
  }, [])

  const movimientosUsuario = user
    ? [
        ...deducciones
          .filter((d) => d.empleadoDocumento === user.documento)
          .map((d) => ({ id: `deduccion-${d.id}`, tipo: 'Deducción', valor: d.valor, descripcion: d.tipo, fecha: '', categoria: '' })),
        ...bonificaciones
          .filter((b) => b.empleadoDocumento === user.documento)
          .map((b) => ({ id: `bonificacion-${b.id}`, tipo: 'Bonificación', valor: b.valor, descripcion: b.tipo, fecha: '', categoria: '' })),
        ...pagos
          .filter((p) => {
            const nomina = nominas.find((n) => n.id === p.nominaId)
            return nomina?.empleadoDocumento === user.documento
          })
          .map((p) => ({ id: `pago-${p.id}`, tipo: 'Pago', valor: p.monto, descripcion: p.periodo, fecha: p.fecha, categoria: '' })),
      ]
    : []

  const handleRegister = async (userData) => {
    const result = await registerUser(userData)
    if (result.success) {
      getUsers().then(setUsers)
    }
    return result
  }

  const handleLogin = async (documento) => {
    const result = await loginUser(documento)
    if (result.success) {
      saveSessionUser(result.user)
      setUser(result.user)
    }
    return result
  }

  const handleLogout = () => {
    logoutUser()
    setUser(null)
  }

  const handleAddEmployee = async (employeeData) => {
    const newEmployee = await addEmployee(employeeData)
    setEmployees((prev) => [...prev, newEmployee])
    return newEmployee
  }

  const handleAddCargo = async (cargoData) => {
    const newCargo = await addCargo(cargoData)
    setCargos((prev) => [...prev, newCargo])
    return newCargo
  }

  const handleAddNomina = async (nominaData) => {
    const newNomina = await addNomina(nominaData)
    setNominas((prev) => [...prev, newNomina])
    return newNomina
  }

  const handleAddPago = async (pagoData) => {
    const newPago = await addPago(pagoData)
    setPagos((prev) => [...prev, newPago])
    return newPago
  }

  const handleAddDeduccion = async (deduccionData) => {
    const newDeduccion = await addDeduccion(deduccionData)
    setDeducciones((prev) => [...prev, newDeduccion])
    return newDeduccion
  }

  const handleAddBonificacion = async (bonificacionData) => {
    const newBonificacion = await addBonificacion(bonificacionData)
    setBonificaciones((prev) => [...prev, newBonificacion])
    return newBonificacion
  }

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Inicio user={user} totalUsers={users.length} totalNominas={nominas.length} totalPagos={pagos.length} />} />
        <Route path="/register" element={<Registro onRegister={handleRegister} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/gastos" element={<PrivateRoute user={user}><MisGastos user={user} movimientos={movimientosUsuario} /></PrivateRoute>} />
        <Route path="/empleados" element={<PrivateRoute user={user}><Emplaeados employees={employees} cargos={cargos} onAddEmployee={handleAddEmployee} /></PrivateRoute>} />
        <Route path="/nomina" element={<PrivateRoute user={user}><Nomina employees={employees} nominas={nominas} onAddNomina={handleAddNomina} /></PrivateRoute>} />
        <Route path="/cargos" element={<PrivateRoute user={user}><Cargos cargos={cargos} onAddCargo={handleAddCargo} /></PrivateRoute>} />
        <Route path="/pagos" element={<PrivateRoute user={user}><Pagos nominas={nominas} pagos={pagos} deducciones={deducciones} bonificaciones={bonificaciones} onAddPago={handleAddPago} /></PrivateRoute>} />
        <Route path="/deducciones" element={<PrivateRoute user={user}><Deduccion employees={employees} deducciones={deducciones} onAddDeduccion={handleAddDeduccion} /></PrivateRoute>} />
        <Route path="/bonificaciones" element={<PrivateRoute user={user}><Bonificacion employees={employees} bonificaciones={bonificaciones} onAddBonificacion={handleAddBonificacion} /></PrivateRoute>} />
      </Routes>
    </>
  )
}
//laura, duvan, julian, simon, yeison, edison