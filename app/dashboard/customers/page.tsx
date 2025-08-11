import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search, Filter } from 'lucide-react'

// Mock customer data
const mockCustomers = [
  {
    id: '1',
    firstName: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@email.com',
    phone: '+57 301 123 4567',
    customerType: 'INDIVIDUAL' as const,
    vehicleCount: 1,
    lastService: '2024-07-15',
    isActive: true
  },
  {
    id: '2',
    firstName: 'María',
    lastName: 'García',
    email: 'maria.garcia@email.com',
    phone: '+57 301 987 6543',
    customerType: 'INDIVIDUAL' as const,
    vehicleCount: 2,
    lastService: '2024-07-20',
    isActive: true
  },
  {
    id: '3',
    firstName: 'Carlos',
    lastName: 'López',
    email: 'carlos.lopez@empresa.com',
    phone: '+57 301 555 0123',
    customerType: 'CORPORATE' as const,
    vehicleCount: 5,
    lastService: '2024-07-25',
    isActive: true
  },
  {
    id: '4',
    firstName: 'Ana',
    lastName: 'Rodríguez',
    email: 'ana.rodriguez@email.com',
    phone: '+57 301 444 8888',
    customerType: 'INDIVIDUAL' as const,
    vehicleCount: 1,
    lastService: '2024-06-10',
    isActive: true
  }
]

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Clientes</h1>
          <p className="text-gray-400">
            Gestión completa de clientes del taller
          </p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Cliente
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
                  placeholder="Buscar por nombre, email o teléfono..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Tipo
              </Button>
              <Button variant="outline" size="sm">
                Estado
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customers List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes ({mockCustomers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockCustomers.map((customer) => (
              <div
                key={customer.id}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {customer.firstName[0]}{customer.lastName[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">
                      {customer.firstName} {customer.lastName}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{customer.email}</span>
                      <span>{customer.phone}</span>
                      <span className={`px-2 py-1 rounded-md text-xs ${
                        customer.customerType === 'CORPORATE' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-green-600 text-white'
                      }`}>
                        {customer.customerType === 'CORPORATE' ? 'Corporativo' : 'Individual'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">
                    {customer.vehicleCount} vehículo{customer.vehicleCount !== 1 ? 's' : ''}
                  </div>
                  <div className="text-sm text-gray-400">
                    Último servicio: {new Date(customer.lastService).toLocaleDateString('es-CO')}
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Button variant="outline" size="sm">
                      Ver
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
              {mockCustomers.length}
            </div>
            <div className="text-sm text-gray-400">Total Clientes</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockCustomers.filter(c => c.customerType === 'INDIVIDUAL').length}
            </div>
            <div className="text-sm text-gray-400">Individuales</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockCustomers.filter(c => c.customerType === 'CORPORATE').length}
            </div>
            <div className="text-sm text-gray-400">Corporativos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockCustomers.reduce((acc, c) => acc + c.vehicleCount, 0)}
            </div>
            <div className="text-sm text-gray-400">Total Vehículos</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}