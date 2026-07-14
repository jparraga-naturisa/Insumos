import { useEffect, useRef, useState } from 'react'
import { ChevronDown, LogOut, Settings, User } from 'lucide-react'

export function UserMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-md py-1 pl-1 pr-2 transition-colors hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
      >
        <span className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-accent text-xs font-medium text-white">
          U
        </span>
        <span className="hidden text-sm text-ink sm:block">Usuario</span>
        <ChevronDown className="h-3.5 w-3.5 text-ink-soft" />
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-56 rounded-md border border-line bg-surface py-1 shadow-sm">
          <div className="border-b border-line px-4 py-3">
            <p className="text-sm font-medium text-ink">Usuario</p>
            <p className="truncate text-xs text-ink-soft">usuario@naturisa.com.ec</p>
          </div>

          <button
            type="button"
            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-ink-soft transition-colors hover:bg-canvas hover:text-ink"
          >
            <User className="h-4 w-4" />
            Mi perfil
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-ink-soft transition-colors hover:bg-canvas hover:text-ink"
          >
            <Settings className="h-4 w-4" />
            Configuración
          </button>

          <div className="my-1 border-t border-line" />

          <button
            type="button"
            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  )
}
