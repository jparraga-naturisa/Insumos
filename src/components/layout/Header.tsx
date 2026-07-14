import { Bell, Moon, Search } from 'lucide-react'
import { UserMenu } from '@/components/layout/UserMenu'

export function Header() {
  return (
    <header className="flex h-12 items-center justify-between gap-3 border-b border-line bg-surface px-4">
      <label className="flex w-full max-w-xs items-center gap-2 rounded-md border border-line px-2.5 py-1.5 transition-colors focus-within:border-accent/40 focus-within:ring-2 focus-within:ring-accent/15">
        <Search className="h-3.5 w-3.5 text-ink-soft" />
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink-soft focus:outline-none"
        />
      </label>

      <div className="flex items-center gap-0.5">
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-md text-ink-soft transition-colors hover:bg-canvas hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        >
          <Moon className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="relative flex h-7 w-7 items-center justify-center rounded-md text-ink-soft transition-colors hover:bg-canvas hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
        </button>
        <UserMenu />
      </div>
    </header>
  )
}
