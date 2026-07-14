import { useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { login as loginRequest } from '@/services/auth/auth.service'
import { clearSession, getStoredUser, getToken, setSession } from '@/services/http/session'
import { AuthContext } from '@/auth/AuthContext'
import type { AuthUser, LoginResult } from '@/auth/AuthContext'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState(() => getToken())
  const [user, setUser] = useState<AuthUser | null>(() => {
    const stored = getStoredUser()
    return stored.userName ? stored : null
  })
  const [isLoading, setIsLoading] = useState(false)

  const login = useCallback(async (userNameInput: string, passwordInput: string): Promise<LoginResult> => {
    const userName = userNameInput.trim()
    const password = passwordInput.trim()

    if (!userName || !password) {
      return { ok: false, message: 'Ingresa usuario y contraseña' }
    }

    setIsLoading(true)
    try {
      const response = await loginRequest({ userName, password })

      if (response.code !== 200 || !response.data?.token) {
        return { ok: false, message: 'Usuario o contraseña incorrectos' }
      }

      const usuario = response.data.usuario
      const fullName = usuario ? `${usuario.firstNames} ${usuario.lastNames}`.trim() : userName

      setSession(response.data.token, userName, fullName)
      setToken(response.data.token)
      setUser({ userName, fullName })

      return { ok: true }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido'
      return { ok: false, message: `Error de conexión: ${message}` }
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    clearSession()
    setToken('')
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({ isAuthenticated: Boolean(token), user, isLoading, login, logout }),
    [token, user, isLoading, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
