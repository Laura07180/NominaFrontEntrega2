
 
import { BASE } from './apiConfig.js'

export async function getBonificaciones() {
  const res = await fetch(`${BASE}/bonificaciones`)
  return res.json()
}
 
export async function getBonificacionesByDocumento(documento) {
  const res = await fetch(`${BASE}/bonificaciones/empleado/${documento}`)
  return res.json()
}
 
export async function addBonificacion(bonificacionData) {
  const res = await fetch(`${BASE}/bonificaciones`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bonificacionData)
  })
  return res.json()
}
 