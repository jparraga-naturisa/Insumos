import { Card } from '@/components/ui/Card'
import { PlaceholderBlock } from '@/components/ui/PlaceholderBlock'

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card>
              <PlaceholderBlock label="Clientes" className="h-28" />
            </Card>
            <Card>
              <PlaceholderBlock label="Pedidos" className="h-28" />
            </Card>
          </div>
          <Card>
            <PlaceholderBlock label="Ventas mensuales" className="h-72" />
          </Card>
        </div>

        <Card>
          <PlaceholderBlock label="Meta mensual" className="h-full min-h-[380px]" />
        </Card>
      </div>

      <Card>
        <PlaceholderBlock label="Estadísticas" className="h-64" />
      </Card>
    </div>
  )
}
