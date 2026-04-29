import { parseStorage, saveStorage } from './storageService.js'

const BONIFICACIONES_KEY = 'nomina_bonificaciones'

export const getBonificaciones = () => parseStorage(BONIFICACIONES_KEY, [])

export const saveBonificaciones = (bonificaciones) => {
  saveStorage(BONIFICACIONES_KEY, bonificaciones)
}

export const addBonificacion = ({ empleadoDocumento, tipo, valor, empleadoNombre }) => {
  if (!empleadoDocumento || !tipo || !valor || !empleadoNombre) {
    throw new Error('Todos los campos de bonificación son obligatorios')
  }

  const bonificaciones = getBonificaciones()
  const nextId = bonificaciones.length ? Math.max(...bonificaciones.map((item) => item.id)) + 1 : 1
  const newBonificacion = {
    id: nextId,
    empleadoDocumento,
    tipo,
    valor,
    empleadoNombre,
  }

  const updated = [...bonificaciones, newBonificacion]
  saveBonificaciones(updated)
  return newBonificacion
}
