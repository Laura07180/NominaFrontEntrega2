import { BASE } from './apiConfig.js'

export async function getEmployees() {
  const res = await fetch(`${BASE}/empleados`)
  return res.json()
}
 
export async function addEmployee(employeeData) {
  const res = await fetch(`${BASE}/empleados`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employeeData)
  })
  return res.json()
}