export const CODE_APP = '55ab9cb4-c887-4f42-98ec-b90470be6613'

export const ENDPOINTS = {
  auth: '/bff/web/ap1/security/api/auth',
  warehouses: '/bff/web/ap1/backoffice/api/warehouses',
  poolProduction: '/bff/web/ap1/backoffice/api/report_production/pool_production',
  cyclesNavigation: '/bff/web/ap1/backoffice/api/cycles_navigation',
  pools: '/bff/web/ap1/backoffice/api/pools',
  cycles: '/bff/web/ap1/backoffice/api/cycles',
  subsidiaryUsers: (codeApp: string) => `/bff/web/ap1/backoffice/api/subsidiary_users/${codeApp}`,
} as const
