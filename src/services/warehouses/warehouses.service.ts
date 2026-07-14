import { apiRequest } from '@/services/http/httpClient'
import { ENDPOINTS } from '@/services/http/endpoints'
import type { Warehouse, WarehousesResponse } from '@/services/warehouses/warehouses.types'

const ACTIVE_WAREHOUSE_TYPE_CODES = [21, 22, 23]

export async function getWarehouses(): Promise<Warehouse[]> {
  const params = new URLSearchParams({ status: 'ACTIVO', pageSize: '1000', orderBy: 'name' })
  ACTIVE_WAREHOUSE_TYPE_CODES.forEach((code) => params.append('warehouseTypeCodes', String(code)))

  const json = await apiRequest<WarehousesResponse>(`${ENDPOINTS.warehouses}?${params.toString()}`)
  const raw = json.data
  return Array.isArray(raw) ? raw : (raw?.data ?? [])
}
