import { parseStorage, saveStorage } from './storageService.js'

const CARGOS_KEY = 'nomina_cargos'

export const getCargos = () => parseStorage(CARGOS_KEY, [])

export const saveCargos = (cargos) => {
  saveStorage(CARGOS_KEY, cargos)
}

export const addCargo = ({ nombre, salarioBase }) => {
  if (!nombre || !salarioBase) {
    throw new Error('Nombre y salario base son obligatorios')
  }

  const cargos = getCargos()
  const exists = cargos.some((item) => item.nombre === nombre)
  if (exists) {
    throw new Error('El cargo ya está registrado')
  }

  const nextId = cargos.length ? Math.max(...cargos.map((item) => item.id)) + 1 : 1
  const newCargo = {
    id: nextId,
    nombre,
    salarioBase,
  }

  const updated = [...cargos, newCargo]
  saveCargos(updated)
  return newCargo
}
