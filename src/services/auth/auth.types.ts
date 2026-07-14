export type LoginCredentials = {
  userName: string
  password: string
}

export type LoginUser = {
  firstNames: string
  lastNames: string
}

export type LoginResponse = {
  code: number
  data?: {
    token: string
    usuario?: LoginUser
  }
}
