const USERS_KEY = 'nomina_users'
const SESSION_KEY = 'nomina_session'

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

export const getUsers = () => parseStorage(USERS_KEY, [])

export const saveUsers = (users) => {
  saveStorage(USERS_KEY, users)
}

export const getSessionUser = () => parseStorage(SESSION_KEY, null)

export const registerUser = ({ nombres, tipoDocumento, documento, edad }) => {
  if (!nombres || !tipoDocumento || !documento || !edad) {
    return { success: false, message: 'Todos los campos son obligatorios' }
  }

  const users = getUsers()
  const exists = users.some((user) => user.documento === documento)
  if (exists) {
    return { success: false, message: 'El documento ya está registrado' }
  }

  const newUser = { nombres, tipoDocumento, documento, edad }
  users.push(newUser)
  saveUsers(users)

  return { success: true, user: newUser, message: 'Registro exitoso. Ahora inicia sesión.' }
}

export const loginUser = (documento) => {
  if (!documento) {
    return { success: false, message: 'El documento es obligatorio' }
  }

  const users = getUsers()
  const found = users.find((user) => user.documento === documento)
  if (!found) {
    return { success: false, message: 'Documento no reconocido' }
  }

  saveStorage(SESSION_KEY, found)
  return { success: true, user: found }
}

export const logoutUser = () => {
  localStorage.removeItem(SESSION_KEY)
}
