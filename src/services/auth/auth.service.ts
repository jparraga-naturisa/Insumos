import { CODE_APP, ENDPOINTS } from '@/services/http/endpoints'
import { PROXY_BASE } from '@/services/http/env'
import type { LoginCredentials, LoginResponse } from '@/services/auth/auth.types'

/**
 * The auth endpoint reports failures (bad credentials) via `code` in the JSON
 * body, not necessarily via HTTP status — so this always parses the body
 * instead of throwing on a non-2xx response, mirroring the BFF contract.
 */
export async function login({ userName, password }: LoginCredentials): Promise<LoginResponse> {
  const response = await fetch(`${PROXY_BASE}${ENDPOINTS.auth}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/plain, */*' },
    body: JSON.stringify({ userName, password, codeApplication: CODE_APP, includeUserInfo: true }),
  })

  return response.json() as Promise<LoginResponse>
}
