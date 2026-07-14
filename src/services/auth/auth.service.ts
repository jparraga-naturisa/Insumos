import { apiRequest } from '@/services/http/httpClient'
import { CODE_APP, ENDPOINTS } from '@/services/http/endpoints'
import type { LoginCredentials, LoginResponse } from '@/services/auth/auth.types'

export function login({ userName, password }: LoginCredentials) {
  return apiRequest<LoginResponse>(ENDPOINTS.auth, {
    method: 'POST',
    auth: false,
    body: { userName, password, codeApplication: CODE_APP, includeUserInfo: true },
  })
}
