import { createBrowserRouter } from 'react-router-dom'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { CustomersPage } from '@/pages/CustomersPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { OrdersPage } from '@/pages/OrdersPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'clientes', element: <CustomersPage /> },
      { path: 'pedidos', element: <OrdersPage /> },
    ],
  },
])
