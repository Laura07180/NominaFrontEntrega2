import { parseStorage, saveStorage } from './storageService.js'

const DEDUCCIONES_KEY = 'nomina_deducciones'

export const getDeducciones = () => parseStorage(DEDUCCIONES_KEY, [])

export const saveDeducciones = (deducciones) => {
  saveStorage(DEDUCCIONES_KEY, deducciones)
}

export const addDeduccion = ({ empleadoDocumento, tipo, valor, empleadoNombre }) => {
  if (!empleadoDocumento || !tipo || !valor || !empleadoNombre) {
    throw new Error('Todos los campos de deducción son obligatorios')
  }

  const deducciones = getDeducciones()
  const nextId = deducciones.length ? Math.max(...deducciones.map((item) => item.id)) + 1 : 1
  const newDeduccion = {
    id: nextId,
    empleadoDocumento,
    tipo,
    valor,
    empleadoNombre,
  }

  const updated = [...deducciones, newDeduccion]
  saveDeducciones(updated)
  return newDeduccion
}
