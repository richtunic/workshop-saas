import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Calendar, 
  Users, 
  ClipboardList, 
  DollarSign
} from 'lucide-react'

// Mock data for the dashboard
const dashboardData = {
  todayAppointments: 8,
  weekAppointments: 32,
  inProgressOrders: 15,
  completedOrdersThisMonth: 127,
  monthlyRevenue: 45650000,
  activeCustomers: 234
}

function MetricCard({ 
  title, 
  value, 
  icon, 
  trend 
}: { 
  title: string
  value: string | number
  icon: React.ReactNode
  trend?: string 
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className="text-xs text-gray-400">{trend}</p>
        )}
      </CardContent>
    </Card>
  )
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400">
          Resumen general de tu taller automotriz
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Citas Hoy"
          value={dashboardData.todayAppointments}
          icon={<Calendar className="h-4 w-4 text-purple-500" />}
          trend="+2 desde ayer"
        />
        <MetricCard
          title="Citas Esta Semana"
          value={dashboardData.weekAppointments}
          icon={<Calendar className="h-4 w-4 text-purple-500" />}
          trend="+12% vs semana anterior"
        />
        <MetricCard
          title="Órdenes en Progreso"
          value={dashboardData.inProgressOrders}
          icon={<ClipboardList className="h-4 w-4 text-purple-500" />}
          trend="3 próximas a completar"
        />
        <MetricCard
          title="Órdenes Completadas"
          value={dashboardData.completedOrdersThisMonth}
          icon={<ClipboardList className="h-4 w-4 text-purple-500" />}
          trend="Este mes"
        />
        <MetricCard
          title="Ingresos del Mes"
          value={new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP'
          }).format(dashboardData.monthlyRevenue)}
          icon={<DollarSign className="h-4 w-4 text-purple-500" />}
          trend="+18% vs mes anterior"
        />
        <MetricCard
          title="Clientes Activos"
          value={dashboardData.activeCustomers}
          icon={<Users className="h-4 w-4 text-purple-500" />}
          trend="+5 nuevos este mes"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Citas de Hoy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: '09:00', customer: 'Juan Pérez', vehicle: 'Toyota Corolla 2020', service: 'Mantenimiento preventivo' },
                { time: '10:30', customer: 'María García', vehicle: 'Honda Civic 2019', service: 'Cambio de aceite' },
                { time: '14:00', customer: 'Carlos López', vehicle: 'Chevrolet Spark 2021', service: 'Revisión de frenos' },
                { time: '16:00', customer: 'Ana Rodríguez', vehicle: 'Nissan Sentra 2018', service: 'Diagnóstico motor' }
              ].map((appointment, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-700">
                  <div className="text-sm font-medium text-purple-400">{appointment.time}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{appointment.customer}</p>
                    <p className="text-xs text-gray-400">{appointment.vehicle}</p>
                    <p className="text-xs text-gray-400">{appointment.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Órdenes Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 'WS240801001', customer: 'Pedro Morales', vehicle: 'Ford Focus 2017', status: 'En Progreso', amount: 450000 },
                { id: 'WS240801002', customer: 'Laura Jiménez', vehicle: 'Mazda 3 2020', status: 'Completada', amount: 320000 },
                { id: 'WS240801003', customer: 'Roberto Silva', vehicle: 'Kia Rio 2019', status: 'Aprobada', amount: 680000 },
                { id: 'WS240801004', customer: 'Carmen Vega', vehicle: 'Hyundai i10 2021', status: 'Diagnosticada', amount: 280000 }
              ].map((order, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-700">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{order.id}</p>
                    <p className="text-xs text-gray-400">{order.customer} - {order.vehicle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP'
                      }).format(order.amount)}
                    </div>
                    <div className="text-xs text-gray-400">{order.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}