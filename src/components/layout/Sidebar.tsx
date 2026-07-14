import { useState } from 'react'
import { BarChart3, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navItems } from '@/config/navigation'

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`hidden shrink-0 flex-col border-r border-line bg-surface transition-all duration-200 md:flex ${
        collapsed ? 'w-14' : 'w-52'
      }`}
    >
      <div className={`flex h-12 items-center gap-2 ${collapsed ? 'justify-center px-2' : 'px-3.5'}`}>
        <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-md bg-accent text-white">
          <BarChart3 className="h-3.5 w-3.5" />
        </span>
        {!collapsed && <span className="text-sm font-medium tracking-tight text-ink">Insumos</span>}
      </div>

      <nav className="flex-1 space-y-0.5 px-2 py-3">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              [
                'group relative flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30',
                collapsed ? 'justify-center' : '',
                isActive
                  ? 'bg-accent/8 font-medium text-accent'
                  : 'text-ink-soft hover:bg-canvas hover:text-ink',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute inset-y-1 left-0 w-0.5 rounded-full bg-accent" />
                )}
                <Icon className="h-4 w-4 shrink-0" />
                {!collapsed && label}
                {collapsed && (
                  <span className="pointer-events-none absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
                    {label}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className={`border-t border-line p-2 ${collapsed ? 'flex justify-center' : ''}`}>
        <button
          type="button"
          onClick={() => setCollapsed((prev) => !prev)}
          className="group relative flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] text-ink-soft transition-colors hover:bg-canvas hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        >
          {collapsed ? (
            <PanelLeftOpen className="h-4 w-4 shrink-0" />
          ) : (
            <PanelLeftClose className="h-4 w-4 shrink-0" />
          )}
          {!collapsed && 'Contraer'}
          {collapsed && (
            <span className="pointer-events-none absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
              Expandir
            </span>
          )}
        </button>
      </div>
    </aside>
  )
}
