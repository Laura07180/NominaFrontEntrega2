export const parseStorage = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback
  } catch {
    return fallback
  }
}

export const saveStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
