import { parseStorage, saveStorage } from './storageService.js'

const EMPLOYEES_KEY = 'nomina_empleados'

export const getEmployees = () => parseStorage(EMPLOYEES_KEY, [])

export const saveEmployees = (employees) => {
  saveStorage(EMPLOYEES_KEY, employees)
}

export const addEmployee = ({ nombre, documento, salario, cargo }) => {
  if (!nombre || !documento || !salario || !cargo) {
    throw new Error('Todos los campos de empleado son obligatorios')
  }

  const employees = getEmployees()
  const exists = employees.some((item) => item.documento === documento)
  if (exists) {
    throw new Error('El documento del empleado ya existe')
  }

  const nextId = employees.length ? Math.max(...employees.map((item) => item.id)) + 1 : 1
  const newEmployee = {
    id: nextId,
    nombre,
    documento,
    salario,
    cargo,
  }

  const updated = [...employees, newEmployee]
  saveEmployees(updated)
  return newEmployee
}
