import { createContext } from 'react'

export type AuthUser = {
  userName: string
  fullName: string
}

export type LoginResult = { ok: true } | { ok: false; message: string }

export type AuthContextValue = {
  isAuthenticated: boolean
  user: AuthUser | null
  isLoading: boolean
  login: (userName: string, password: string) => Promise<LoginResult>
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)
