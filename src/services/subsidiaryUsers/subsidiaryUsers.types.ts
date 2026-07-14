export type SubsidiaryUser = {
  id: number
  subsidiaryId: number
  userName: string
}

export type SubsidiaryUsersResponse = {
  data?: SubsidiaryUser[] | { data: SubsidiaryUser[] }
}
