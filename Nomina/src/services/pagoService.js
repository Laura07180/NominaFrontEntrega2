import { parseStorage, saveStorage } from './storageService.js'

const PAGOS_KEY = 'nomina_pagos'

export const getPagos = () => parseStorage(PAGOS_KEY, [])

export const savePagos = (pagos) => {
  saveStorage(PAGOS_KEY, pagos)
}

export const addPago = ({ nominaId, monto, fecha, empleadoNombre, periodo }) => {
  if (!nominaId || !monto || !fecha || !empleadoNombre || !periodo) {
    throw new Error('Todos los campos de pago son obligatorios')
  }

  const pagos = getPagos()
  const nextId = pagos.length ? Math.max(...pagos.map((item) => item.id)) + 1 : 1
  const newPago = {
    id: nextId,
    nominaId,
    monto,
    fecha,
    empleadoNombre,
    periodo,
  }

  const updated = [...pagos, newPago]
  savePagos(updated)
  return newPago
}
