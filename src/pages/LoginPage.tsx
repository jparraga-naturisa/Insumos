import { useState } from 'react'
import type { FormEvent } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { BarChart3 } from 'lucide-react'
import { useAuth } from '@/auth/useAuth'

type LocationState = { from?: { pathname: string } }

export function LoginPage() {
  const { isAuthenticated, isLoading, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setError('')

    const result = await login(userName, password)
    if (!result.ok) {
      setError(result.message)
      return
    }

    const state = location.state as LocationState | null
    navigate(state?.from?.pathname ?? '/', { replace: true })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-white">
            <BarChart3 className="h-5 w-5" />
          </span>
          <div className="text-center">
            <h1 className="text-lg font-medium text-ink">Insumos</h1>
            <p className="text-sm text-ink-soft">Ingresa tus credenciales para continuar</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-lg border border-line bg-surface p-6">
          <div className="space-y-1.5">
            <label htmlFor="userName" className="text-sm font-medium text-ink">
              Usuario
            </label>
            <input
              id="userName"
              type="text"
              autoComplete="username"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              disabled={isLoading}
              className="w-full rounded-md border border-line px-3 py-2 text-sm text-ink placeholder:text-ink-soft focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
              placeholder="usuario"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium text-ink">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={isLoading}
              className="w-full rounded-md border border-line px-3 py-2 text-sm text-ink placeholder:text-ink-soft focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/15 disabled:opacity-60"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center rounded-md bg-accent px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 disabled:opacity-60"
          >
            {isLoading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  )
}
