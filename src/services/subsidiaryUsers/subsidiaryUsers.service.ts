import { apiRequest } from '@/services/http/httpClient'
import { CODE_APP, ENDPOINTS } from '@/services/http/endpoints'
import type { SubsidiaryUser, SubsidiaryUsersResponse } from '@/services/subsidiaryUsers/subsidiaryUsers.types'

export async function getSubsidiaryUsers(): Promise<SubsidiaryUser[]> {
  const json = await apiRequest<SubsidiaryUsersResponse>(ENDPOINTS.subsidiaryUsers(CODE_APP))
  const raw = json.data
  return Array.isArray(raw) ? raw : (raw?.data ?? [])
}
