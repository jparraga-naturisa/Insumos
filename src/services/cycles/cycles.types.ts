export type Cycle = {
  idCycle: string | number
  cycleCode: string
  startDate?: string
  daysCycle?: number
  daysDry?: number
  daysProduction?: number
  poolSize?: number
}

export type CyclesNavigationEntry = {
  subsidiaryCode: string
  subsidiaryId: number
}

export type PoolProductionItem = {
  idCycle: string | number
  cycleCode: string
  poolSize?: number
  daysCycle?: number
  daysDry?: number
  daysProduction?: number
}

type ListEnvelope<T> = {
  data?: T[] | { data: T[] }
}

export type CyclesResponse = ListEnvelope<Cycle>
export type CyclesNavigationResponse = ListEnvelope<CyclesNavigationEntry>
export type PoolProductionResponse = ListEnvelope<PoolProductionItem>
