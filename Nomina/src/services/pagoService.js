import { BASE } from './apiConfig.js'

export async function getPagos() {
  const res = await fetch(`${BASE}/pagos`)
  return res.json()
}
 
export async function addPago(pagoData) {
  const res = await fetch(`${BASE}/pagos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pagoData)
  })
  return res.json()
}
 
 