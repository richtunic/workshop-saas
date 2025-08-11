import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search, Filter, Car } from 'lucide-react'

// Mock vehicle data
const mockVehicles = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    licensePlate: 'ABC-123',
    color: 'Blanco',
    mileage: 45000,
    customer: {
      name: 'Juan Pérez',
      phone: '+57 301 123 4567'
    },
    lastService: '2024-07-15',
    nextService: '2024-10-15',
    status: 'active'
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    licensePlate: 'DEF-456',
    color: 'Negro',
    mileage: 52000,
    customer: {
      name: 'María García',
      phone: '+57 301 987 6543'
    },
    lastService: '2024-07-20',
    nextService: '2024-10-20',
    status: 'active'
  },
  {
    id: '3',
    make: 'Chevrolet',
    model: 'Spark',
    year: 2021,
    licensePlate: 'GHI-789',
    color: 'Rojo',
    mileage: 28000,
    customer: {
      name: 'Carlos López',
      phone: '+57 301 555 0123'
    },
    lastService: '2024-07-25',
    nextService: '2024-10-25',
    status: 'maintenance'
  },
  {
    id: '4',
    make: 'Nissan',
    model: 'Sentra',
    year: 2018,
    licensePlate: 'JKL-012',
    color: 'Gris',
    mileage: 68000,
    customer: {
      name: 'Ana Rodríguez',
      phone: '+57 301 444 8888'
    },
    lastService: '2024-06-10',
    nextService: '2024-09-10',
    status: 'overdue'
  }
]

function getStatusColor(status: string) {
  switch (status) {
    case 'active':
      return 'bg-green-600'
    case 'maintenance':
      return 'bg-yellow-600'
    case 'overdue':
      return 'bg-red-600'
    default:
      return 'bg-gray-600'
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'active':
      return 'Activo'
    case 'maintenance':
      return 'En Mantenimiento'
    case 'overdue':
      return 'Vencido'
    default:
      return 'Desconocido'
  }
}

export default function VehiclesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Vehículos</h1>
          <p className="text-gray-400">
            Gestión y seguimiento de vehículos de clientes
          </p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Vehículo
        </Button>
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
                  placeholder="Buscar por placa, marca, modelo o cliente..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Marca
              </Button>
              <Button variant="outline" size="sm">
                Estado
              </Button>
              <Button variant="outline" size="sm">
                Año
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vehicles List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Vehículos ({mockVehicles.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">
                      {vehicle.make} {vehicle.model} {vehicle.year}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="font-mono bg-gray-800 px-2 py-1 rounded">
                        {vehicle.licensePlate}
                      </span>
                      <span>{vehicle.color}</span>
                      <span>{vehicle.mileage.toLocaleString()} km</span>
                      <span className={`px-2 py-1 rounded-md text-xs text-white ${getStatusColor(vehicle.status)}`}>
                        {getStatusLabel(vehicle.status)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      Cliente: {vehicle.customer.name} - {vehicle.customer.phone}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">
                    Último servicio: {new Date(vehicle.lastService).toLocaleDateString('es-CO')}
                  </div>
                  <div className="text-sm text-gray-400">
                    Próximo servicio: {new Date(vehicle.nextService).toLocaleDateString('es-CO')}
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Button variant="outline" size="sm">
                      Ver
                    </Button>
                    <Button variant="outline" size="sm">
                      Historial
                    </Button>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockVehicles.length}
            </div>
            <div className="text-sm text-gray-400">Total Vehículos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockVehicles.filter(v => v.status === 'active').length}
            </div>
            <div className="text-sm text-gray-400">Activos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockVehicles.filter(v => v.status === 'maintenance').length}
            </div>
            <div className="text-sm text-gray-400">En Mantenimiento</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockVehicles.filter(v => v.status === 'overdue').length}
            </div>
            <div className="text-sm text-gray-400">Vencidos</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}