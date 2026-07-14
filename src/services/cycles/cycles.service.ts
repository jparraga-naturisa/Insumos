import { apiRequest } from '@/services/http/httpClient'
import { ENDPOINTS } from '@/services/http/endpoints'
import type {
  Cycle,
  CyclesNavigationEntry,
  CyclesNavigationResponse,
  CyclesResponse,
  PoolProductionItem,
  PoolProductionResponse,
} from '@/services/cycles/cycles.types'

function unwrapList<T>(raw: T[] | { data: T[] } | undefined): T[] {
  if (!raw) return []
  return Array.isArray(raw) ? raw : raw.data
}

export async function getCyclesNavigation(): Promise<CyclesNavigationEntry[]> {
  const json = await apiRequest<CyclesNavigationResponse>(ENDPOINTS.cyclesNavigation)
  return unwrapList(json.data)
}

type GetPoolProductionParams = {
  subsidiaryId: number
  cutOffYear: number
  cutOffWeek: number
}

export async function getPoolProduction({
  subsidiaryId,
  cutOffYear,
  cutOffWeek,
}: GetPoolProductionParams): Promise<PoolProductionItem[]> {
  const params = new URLSearchParams({
    subsidiaryIds: String(subsidiaryId),
    cutOffYear: String(cutOffYear),
    cutOffWeek: String(cutOffWeek),
  })
  const json = await apiRequest<PoolProductionResponse>(`${ENDPOINTS.poolProduction}?${params.toString()}`)
  return unwrapList(json.data)
}

type GetCyclesParams = {
  page?: number
  pageSize?: number
}

export async function getCycles({ page = 0, pageSize = 1000 }: GetCyclesParams = {}): Promise<Cycle[]> {
  const params = new URLSearchParams({ page: String(page), pageSize: String(pageSize) })
  const json = await apiRequest<CyclesResponse>(`${ENDPOINTS.cycles}?${params.toString()}`)
  return unwrapList(json.data)
}
