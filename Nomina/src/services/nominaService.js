 
import { BASE } from './apiConfig.js'

export async function getNominas() {
  const res = await fetch(`${BASE}/nominas`)
  return res.json()
}
 
export async function addNomina(nominaData) {
  const res = await fetch(`${BASE}/nominas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nominaData)
  })
  return res.json()
}
 
 
