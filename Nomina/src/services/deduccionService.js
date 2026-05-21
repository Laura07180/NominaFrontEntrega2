 
import { BASE } from './apiConfig.js'

export async function getDeducciones() {
  const res = await fetch(`${BASE}/deducciones`)
  return res.json()
}
 
export async function getDeduccionesByDocumento(documento) {
  const res = await fetch(`${BASE}/deducciones/empleado/${documento}`)
  return res.json()
}
 
export async function addDeduccion(deduccionData) {
  const res = await fetch(`${BASE}/deducciones`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(deduccionData)
  })
  return res.json()
}
 