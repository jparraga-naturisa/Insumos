export type Pool = {
  id: number
  subsidiaryId: number
  name: string
  status: string
}

export type PoolsResponse = {
  data?: Pool[] | { data: Pool[] }
}
