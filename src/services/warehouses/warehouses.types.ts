export type Warehouse = {
  subsidiaryId: number
  name: string
}

export type WarehousesResponse = {
  data?: Warehouse[] | { data: Warehouse[] }
}
