import { apiRequest } from '@/services/http/httpClient'
import { ENDPOINTS } from '@/services/http/endpoints'
import type { Pool, PoolsResponse } from '@/services/pools/pools.types'

type GetPoolsParams = {
  subsidiaryId: number
  page?: number
  pageSize?: number
}

export async function getPools({ subsidiaryId, page = 0, pageSize = 500 }: GetPoolsParams): Promise<Pool[]> {
  const params = new URLSearchParams({
    subsidiaryIds: String(subsidiaryId),
    status: 'ACTIVO',
    pageSize: String(pageSize),
    page: String(page),
  })

  const json = await apiRequest<PoolsResponse>(`${ENDPOINTS.pools}?${params.toString()}`)
  const raw = json.data
  return Array.isArray(raw) ? raw : (raw?.data ?? [])
}
