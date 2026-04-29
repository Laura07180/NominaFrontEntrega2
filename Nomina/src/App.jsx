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
import { getSessionUser, loginUser, logoutUser, registerUser, getUsers } from './services/userService'
import { getGastosByDocumento } from './services/gastoService'
import { getEmployees, addEmployee } from './services/employeeService'
import { getCargos, addCargo } from './services/cargoService'
import { getNominas, addNomina } from './services/nominaService'
import { getPagos, addPago } from './services/pagoService'
import { getDeducciones, addDeduccion } from './services/deduccionService'
import { getBonificaciones, addBonificacion } from './services/bonificacionService'

export default function App() {
  const [user, setUser] = useState(getSessionUser())
  const [users, setUsers] = useState(getUsers())
  const [employees, setEmployees] = useState(getEmployees())
  const [cargos, setCargos] = useState(getCargos())
  const [nominas, setNominas] = useState(getNominas())
  const [pagos, setPagos] = useState(getPagos())
  const [deducciones, setDeducciones] = useState(getDeducciones())
  const [bonificaciones, setBonificaciones] = useState(getBonificaciones())
  const [gastos, setGastos] = useState([])

  const movimientosUsuario = user
    ? [
        ...gastos.map((gasto) => ({
          id: `gasto-${gasto.id}`,
          tipo: 'Gasto',
          valor: gasto.valor,
          descripcion: gasto.descripcion,
          fecha: gasto.fecha,
          categoria: gasto.categoria,
        })),
        ...deducciones
          .filter((deduccion) => deduccion.empleadoDocumento === user.documento)
          .map((deduccion) => ({
            id: `deduccion-${deduccion.id}`,
            tipo: 'Deducción',
            valor: deduccion.valor,
            descripcion: deduccion.tipo,
            fecha: '',
            categoria: '',
          })),
        ...bonificaciones
          .filter((bonificacion) => bonificacion.empleadoDocumento === user.documento)
          .map((bonificacion) => ({
            id: `bonificacion-${bonificacion.id}`,
            tipo: 'Bonificación',
            valor: bonificacion.valor,
            descripcion: bonificacion.tipo,
            fecha: '',
            categoria: '',
          })),
        ...pagos
          .filter((pago) => {
            const nomina = nominas.find((item) => item.id === pago.nominaId)
            return nomina?.empleadoDocumento === user.documento
          })
          .map((pago) => ({
            id: `pago-${pago.id}`,
            tipo: 'Pago',
            valor: pago.monto,
            descripcion: pago.periodo,
            fecha: pago.fecha,
            categoria: '',
          })),
      ]
    : []

  useEffect(() => {
    if (user) {
      setGastos(getGastosByDocumento(user.documento))
    } else {
      setGastos([])
    }
  }, [user])

  const handleRegister = (userData) => {
    const result = registerUser(userData)
    if (result.success) {
      setUsers(getUsers())
    }
    return result
  }

  const handleLogin = (documento) => {
    const result = loginUser(documento)
    if (result.success) {
      setUser(result.user)
    }
    return result
  }

  const handleLogout = () => {
    logoutUser()
    setUser(null)
    setGastos([])
  }

  const handleAddEmployee = (employeeData) => {
    const newEmployee = addEmployee(employeeData)
    setEmployees((prev) => [...prev, newEmployee])
    return newEmployee
  }

  const handleAddCargo = (cargoData) => {
    const newCargo = addCargo(cargoData)
    setCargos((prev) => [...prev, newCargo])
    return newCargo
  }

  const handleAddNomina = (nominaData) => {
    const newNomina = addNomina(nominaData)
    setNominas((prev) => [...prev, newNomina])
    return newNomina
  }

  const handleAddPago = (pagoData) => {
    const newPago = addPago(pagoData)
    setPagos((prev) => [...prev, newPago])
    return newPago
  }

  const handleAddDeduccion = (deduccionData) => {
    const newDeduccion = addDeduccion(deduccionData)
    setDeducciones((prev) => [...prev, newDeduccion])
    return newDeduccion
  }

  const handleAddBonificacion = (bonificacionData) => {
    const newBonificacion = addBonificacion(bonificacionData)
    setBonificaciones((prev) => [...prev, newBonificacion])
    return newBonificacion
  }

  const handleAddGasto = (gastoData) => {
    const newGasto = addGasto(gastoData)
    setGastos((prev) => [...prev, newGasto])
    return newGasto
  }

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <Inicio
              user={user}
              totalUsers={users.length}
              totalNominas={nominas.length}
              totalPagos={pagos.length}
            />
          }
        />
        <Route path="/register" element={<Registro onRegister={handleRegister} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/gastos"
          element={
            <PrivateRoute user={user}>
              <MisGastos user={user} movimientos={movimientosUsuario} />
            </PrivateRoute>
          }
        />
        <Route
          path="/empleados"
          element={
            <PrivateRoute user={user}>
              <Emplaeados employees={employees} cargos={cargos} onAddEmployee={handleAddEmployee} />
            </PrivateRoute>
          }
        />
        <Route
          path="/nomina"
          element={
            <PrivateRoute user={user}>
              <Nomina employees={employees} nominas={nominas} onAddNomina={handleAddNomina} />
            </PrivateRoute>
          }
        />
        <Route
          path="/cargos"
          element={
            <PrivateRoute user={user}>
              <Cargos cargos={cargos} onAddCargo={handleAddCargo} />
            </PrivateRoute>
          }
        />
        <Route
          path="/pagos"
          element={
            <PrivateRoute user={user}>
              <Pagos nominas={nominas} pagos={pagos} onAddPago={handleAddPago} />
            </PrivateRoute>
          }
        />
        <Route
          path="/deducciones"
          element={
            <PrivateRoute user={user}>
              <Deduccion employees={employees} deducciones={deducciones} onAddDeduccion={handleAddDeduccion} />
            </PrivateRoute>
          }
        />
        <Route
          path="/bonificaciones"
          element={
            <PrivateRoute user={user}>
              <Bonificacion employees={employees} bonificaciones={bonificaciones} onAddBonificacion={handleAddBonificacion} />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}
