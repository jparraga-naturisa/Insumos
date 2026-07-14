const TOKEN_KEY = 'nat_token'
const USER_KEY = 'nat_user'
const NAME_KEY = 'nat_name'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY) ?? ''
}

export function setSession(token: string, userName: string, fullName: string) {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, userName)
  localStorage.setItem(NAME_KEY, fullName)
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
  localStorage.removeItem(NAME_KEY)
}

export function getStoredUser() {
  return {
    userName: localStorage.getItem(USER_KEY) ?? '',
    fullName: localStorage.getItem(NAME_KEY) ?? '',
  }
}
