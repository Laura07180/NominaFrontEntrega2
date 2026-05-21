import { BASE } from './apiConfig.js'

export async function getGastosByDocumento(documento) {
  const res = await fetch(`${BASE}/gastos/${documento}`)
  if (!res.ok) {
    throw new Error('Error al obtener los gastos')
  }
  return res.json()
}