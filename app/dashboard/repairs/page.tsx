import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search, Filter, FileText, DollarSign } from 'lucide-react'

// Mock repair order data
const mockRepairOrders = [
  {
    id: '1',
    orderNumber: 'WS240801001',
    customer: 'Pedro Morales',
    vehicle: 'Ford Focus 2017',
    description: 'Cambio de pastillas de freno y discos',
    status: 'IN_PROGRESS',
    totalAmount: 450000,
    estimatedCompletion: '2024-08-12',
    assignedTo: 'Carlos Técnico',
    createdAt: '2024-08-10',
    items: [
      { description: 'Pastillas de freno delanteras', quantity: 1, unitPrice: 180000 },
      { description: 'Discos de freno delanteros', quantity: 2, unitPrice: 120000 },
      { description: 'Mano de obra - Cambio de frenos', quantity: 1, unitPrice: 150000 }
    ]
  },
  {
    id: '2',
    orderNumber: 'WS240801002',
    customer: 'Laura Jiménez',
    vehicle: 'Mazda 3 2020',
    description: 'Mantenimiento preventivo 20,000 km',
    status: 'COMPLETED',
    totalAmount: 320000,
    estimatedCompletion: '2024-08-10',
    assignedTo: 'Ana Técnico',
    createdAt: '2024-08-09',
    items: [
      { description: 'Cambio de aceite sintético', quantity: 1, unitPrice: 85000 },
      { description: 'Filtro de aceite', quantity: 1, unitPrice: 25000 },
      { description: 'Filtro de aire', quantity: 1, unitPrice: 35000 },
      { description: 'Mano de obra - Mantenimiento', quantity: 1, unitPrice: 175000 }
    ]
  },
  {
    id: '3',
    orderNumber: 'WS240801003',
    customer: 'Roberto Silva',
    vehicle: 'Kia Rio 2019',
    description: 'Reparación sistema de transmisión',
    status: 'APPROVED',
    totalAmount: 680000,
    estimatedCompletion: '2024-08-15',
    assignedTo: 'Luis Técnico',
    createdAt: '2024-08-11',
    items: [
      { description: 'Kit de embrague completo', quantity: 1, unitPrice: 450000 },
      { description: 'Aceite de transmisión', quantity: 2, unitPrice: 65000 },
      { description: 'Mano de obra - Transmisión', quantity: 1, unitPrice: 300000 }
    ]
  },
  {
    id: '4',
    orderNumber: 'WS240801004',
    customer: 'Carmen Vega',
    vehicle: 'Hyundai i10 2021',
    description: 'Diagnóstico sistema eléctrico',
    status: 'DIAGNOSED',
    totalAmount: 280000,
    estimatedCompletion: '2024-08-13',
    assignedTo: 'Carlos Técnico',
    createdAt: '2024-08-11',
    items: [
      { description: 'Diagnóstico computarizado', quantity: 1, unitPrice: 80000 },
      { description: 'Alternador', quantity: 1, unitPrice: 200000 }
    ]
  }
]

function getStatusColor(status: string) {
  switch (status) {
    case 'RECEIVED':
      return 'bg-gray-600'
    case 'DIAGNOSED':
      return 'bg-blue-600'
    case 'APPROVED':
      return 'bg-green-600'
    case 'IN_PROGRESS':
      return 'bg-yellow-600'
    case 'COMPLETED':
      return 'bg-green-700'
    case 'DELIVERED':
      return 'bg-purple-600'
    default:
      return 'bg-gray-600'
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'RECEIVED':
      return 'Recibida'
    case 'DIAGNOSED':
      return 'Diagnosticada'
    case 'APPROVED':
      return 'Aprobada'
    case 'IN_PROGRESS':
      return 'En Progreso'
    case 'COMPLETED':
      return 'Completada'
    case 'DELIVERED':
      return 'Entregada'
    default:
      return status
  }
}

export default function RepairOrdersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Órdenes de Reparación</h1>
          <p className="text-gray-400">
            Gestión completa de órdenes de trabajo
          </p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Nueva Orden
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-purple-500" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {mockRepairOrders.length}
                </div>
                <div className="text-sm text-gray-400">Total Órdenes</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockRepairOrders.filter(order => order.status === 'IN_PROGRESS').length}
            </div>
            <div className="text-sm text-gray-400">En Progreso</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockRepairOrders.filter(order => order.status === 'APPROVED').length}
            </div>
            <div className="text-sm text-gray-400">Aprobadas</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockRepairOrders.filter(order => order.status === 'COMPLETED').length}
            </div>
            <div className="text-sm text-gray-400">Completadas</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  }).format(mockRepairOrders.reduce((acc, order) => acc + order.totalAmount, 0))}
                </div>
                <div className="text-sm text-gray-400">Valor Total</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar por número, cliente o vehículo..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Estado
              </Button>
              <Button variant="outline" size="sm">
                Técnico
              </Button>
              <Button variant="outline" size="sm">
                Fecha
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Orders List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Órdenes ({mockRepairOrders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRepairOrders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-600 rounded-lg p-6 bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-medium text-white">
                        {order.orderNumber}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs text-white ${getStatusColor(order.status)}`}>
                        {getStatusLabel(order.status)}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                      <div>
                        <strong className="text-white">Cliente:</strong> {order.customer}
                      </div>
                      <div>
                        <strong className="text-white">Vehículo:</strong> {order.vehicle}
                      </div>
                      <div>
                        <strong className="text-white">Técnico:</strong> {order.assignedTo}
                      </div>
                      <div>
                        <strong className="text-white">Fecha estimada:</strong> {new Date(order.estimatedCompletion).toLocaleDateString('es-CO')}
                      </div>
                    </div>
                    <div className="mt-2">
                      <strong className="text-white">Descripción:</strong>
                      <p className="text-gray-400">{order.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white mb-2">
                      {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP'
                      }).format(order.totalAmount)}
                    </div>
                    <div className="text-sm text-gray-400">
                      Creada: {new Date(order.createdAt).toLocaleDateString('es-CO')}
                    </div>
                  </div>
                </div>

                {/* Items breakdown */}
                <div className="border-t border-gray-600 pt-4 mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Items:</h4>
                  <div className="space-y-1">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-400">
                          {item.description} (x{item.quantity})
                        </span>
                        <span className="text-white">
                          {new Intl.NumberFormat('es-CO', {
                            style: 'currency',
                            currency: 'COP'
                          }).format(item.unitPrice * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Ver Detalles
                    </Button>
                    <Button variant="outline" size="sm">
                      Generar PDF
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    {order.status === 'DIAGNOSED' && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Aprobar
                      </Button>
                    )}
                    {order.status === 'APPROVED' && (
                      <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                        Iniciar
                      </Button>
                    )}
                    {order.status === 'IN_PROGRESS' && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Completar
                      </Button>
                    )}
                    {order.status === 'COMPLETED' && (
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Entregar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}