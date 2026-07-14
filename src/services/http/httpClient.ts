import { getToken } from '@/services/http/session'

const PROXY_BASE = import.meta.env.DEV ? '' : 'https://naturisa-proxy.parragajonathan965.workers.dev'

type ApiRequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: unknown
  auth?: boolean
}

export async function apiRequest<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
  const { method = 'GET', body, auth = true } = options
  const headers: Record<string, string> = { Accept: 'application/json, text/plain, */*' }

  if (body !== undefined) {
    headers['Content-Type'] = 'application/json'
  }

  if (auth) {
    const token = getToken()
    if (token) headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${PROXY_BASE}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    throw new Error(`API ${method} ${path} → ${response.status}`)
  }

  return response.json() as Promise<T>
}
