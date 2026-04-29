import { parseStorage, saveStorage } from './storageService.js'

const NOMINAS_KEY = 'nomina_nominas'

export const getNominas = () => parseStorage(NOMINAS_KEY, [])

export const saveNominas = (nominas) => {
  saveStorage(NOMINAS_KEY, nominas)
}

export const addNomina = ({ empleadoDocumento, periodo, salarioBase, empleadoNombre, cargo }) => {
  if (!empleadoDocumento || !periodo || !salarioBase || !empleadoNombre || !cargo) {
    throw new Error('Todos los campos de nómina son obligatorios')
  }

  const nominas = getNominas()
  const nextId = nominas.length ? Math.max(...nominas.map((item) => item.id)) + 1 : 1
  const newNomina = {
    id: nextId,
    empleadoDocumento,
    periodo,
    salarioBase,
    empleadoNombre,
    cargo,
  }

  const updated = [...nominas, newNomina]
  saveNominas(updated)
  return newNomina
}
