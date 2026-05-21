import { BASE } from './apiConfig.js'

export async function getCargos() {
  const res = await fetch(`${BASE}/cargos`)
  return res.json()
}
 
export async function addCargo(cargoData) {
  const res = await fetch(`${BASE}/cargos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cargoData)
  })
  return res.json()
}
 