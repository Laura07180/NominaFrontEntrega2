const GASTOS_KEY = 'nomina_gastos'

const parseStorage = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback
  } catch {
    return fallback
  }
}

const saveStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getGastos = () => parseStorage(GASTOS_KEY, [])

export const saveGastos = (gastos) => {
  saveStorage(GASTOS_KEY, gastos)
}

export const getGastosByDocumento = (documento) => {
  if (!documento) return []
  return getGastos().filter((gasto) => gasto.documentoUsuario === documento)
}

export const addGasto = ({ valor, descripcion, fecha, categoria, documentoUsuario }) => {
  if (!valor || !descripcion || !fecha || !categoria || !documentoUsuario) {
    throw new Error('Todos los campos del gasto son obligatorios')
  }

  const gastos = getGastos()
  const nextId = gastos.length ? Math.max(...gastos.map((g) => g.id)) + 1 : 1
  const newGasto = {
    id: nextId,
    valor,
    descripcion,
    fecha,
    categoria,
    documentoUsuario,
  }

  gastos.push(newGasto)
  saveGastos(gastos)
  return newGasto
}
