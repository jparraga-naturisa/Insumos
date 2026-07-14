import { LayoutGrid, ShoppingCart, Users } from 'lucide-react'
import type { NavItem } from '@/types/nav'

export const navItems: NavItem[] = [
  { label: 'Dashboard', path: '/', icon: LayoutGrid },
  { label: 'Clientes', path: '/clientes', icon: Users },
  { label: 'Pedidos', path: '/pedidos', icon: ShoppingCart },
]
