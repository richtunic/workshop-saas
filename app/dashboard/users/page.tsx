import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search, Filter, Shield, Users as UsersIcon } from 'lucide-react'

// Mock user data
const mockUsers = [
  {
    id: '1',
    firstName: 'Carlos',
    lastName: 'Técnico',
    email: 'carlos@workshop.com',
    role: 'OPERATOR',
    isActive: true,
    lastLogin: '2024-08-11T08:30:00Z',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    firstName: 'Ana',
    lastName: 'Técnico',
    email: 'ana@workshop.com',
    role: 'OPERATOR',
    isActive: true,
    lastLogin: '2024-08-11T09:15:00Z',
    createdAt: '2024-02-20'
  },
  {
    id: '3',
    firstName: 'Luis',
    lastName: 'Técnico',
    email: 'luis@workshop.com',
    role: 'OPERATOR',
    isActive: true,
    lastLogin: '2024-08-10T17:45:00Z',
    createdAt: '2024-03-10'
  },
  {
    id: '4',
    firstName: 'María',
    lastName: 'Supervisor',
    email: 'maria@workshop.com',
    role: 'MANAGER',
    isActive: true,
    lastLogin: '2024-08-11T07:00:00Z',
    createdAt: '2024-01-05'
  },
  {
    id: '5',
    firstName: 'Juan',
    lastName: 'Admin',
    email: 'admin@workshop.com',
    role: 'ADMIN',
    isActive: true,
    lastLogin: '2024-08-11T06:30:00Z',
    createdAt: '2024-01-01'
  }
]

function getRoleColor(role: string) {
  switch (role) {
    case 'ADMIN':
      return 'bg-red-600'
    case 'MANAGER':
      return 'bg-blue-600'
    case 'OPERATOR':
      return 'bg-green-600'
    case 'VIEWER':
      return 'bg-gray-600'
    default:
      return 'bg-gray-600'
  }
}

function getRoleLabel(role: string) {
  switch (role) {
    case 'ADMIN':
      return 'Administrador'
    case 'MANAGER':
      return 'Gerente'
    case 'OPERATOR':
      return 'Operador'
    case 'VIEWER':
      return 'Visor'
    default:
      return role
  }
}

export default function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Usuarios</h1>
          <p className="text-gray-400">
            Gestión de usuarios y permisos del sistema
          </p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Usuario
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <UsersIcon className="h-5 w-5 text-purple-500" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {mockUsers.length}
                </div>
                <div className="text-sm text-gray-400">Total Usuarios</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockUsers.filter(user => user.isActive).length}
            </div>
            <div className="text-sm text-gray-400">Activos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockUsers.filter(user => user.role === 'OPERATOR').length}
            </div>
            <div className="text-sm text-gray-400">Operadores</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {mockUsers.filter(user => {
                const lastLogin = new Date(user.lastLogin)
                const today = new Date()
                return lastLogin.toDateString() === today.toDateString()
              }).length}
            </div>
            <div className="text-sm text-gray-400">Conectados Hoy</div>
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
                  placeholder="Buscar por nombre o email..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Rol
              </Button>
              <Button variant="outline" size="sm">
                Estado
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Usuarios ({mockUsers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {user.firstName[0]}{user.lastName[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">
                      {user.firstName} {user.lastName}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{user.email}</span>
                      <span className={`px-2 py-1 rounded-md text-xs text-white ${getRoleColor(user.role)}`}>
                        <Shield className="h-3 w-3 inline mr-1" />
                        {getRoleLabel(user.role)}
                      </span>
                      <span className={`px-2 py-1 rounded-md text-xs ${
                        user.isActive 
                          ? 'bg-green-600 text-white' 
                          : 'bg-red-600 text-white'
                      }`}>
                        {user.isActive ? 'Activo' : 'Inactivo'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">
                    Último acceso: {new Date(user.lastLogin).toLocaleDateString('es-CO')}
                  </div>
                  <div className="text-sm text-gray-400">
                    {new Date(user.lastLogin).toLocaleTimeString('es-CO', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Button variant="outline" size="sm">
                      Ver
                    </Button>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    {user.isActive ? (
                      <Button variant="outline" size="sm" className="text-red-400 border-red-400 hover:bg-red-600">
                        Desactivar
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="text-green-400 border-green-400 hover:bg-green-600">
                        Activar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Role Permissions Info */}
      <Card>
        <CardHeader>
          <CardTitle>Roles y Permisos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-gray-700">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 bg-red-600 rounded"></div>
                <h4 className="font-medium text-white">Administrador</h4>
              </div>
              <p className="text-sm text-gray-400">
                Acceso completo al sistema, gestión de usuarios y configuración.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-700">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                <h4 className="font-medium text-white">Gerente</h4>
              </div>
              <p className="text-sm text-gray-400">
                Gestión de operaciones, reportes y supervisión general.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-700">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <h4 className="font-medium text-white">Operador</h4>
              </div>
              <p className="text-sm text-gray-400">
                Creación y edición de citas, clientes y órdenes de trabajo.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-700">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 bg-gray-600 rounded"></div>
                <h4 className="font-medium text-white">Visor</h4>
              </div>
              <p className="text-sm text-gray-400">
                Solo lectura de información, sin permisos de edición.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}