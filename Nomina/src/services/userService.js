import { BASE } from './apiConfig.js'
 
export async function registerUser(userData) {
  const res = await fetch(`${BASE}/usuarios/registro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  })
  return res.json()
}
 
export async function loginUser(documento) {
  const res = await fetch(`${BASE}/usuarios/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ documento })
  })
  return res.json()
}
 
export function getSessionUser() {
  const user = sessionStorage.getItem('user')
  return user ? JSON.parse(user) : null
}
 
export function saveSessionUser(user) {
  sessionStorage.setItem('user', JSON.stringify(user))
}
 
export function logoutUser() {
  sessionStorage.removeItem('user')
}
 
export async function getUsers() {
  const res = await fetch(`${BASE}/usuarios`)
  return res.json()
}
 
 