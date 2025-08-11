import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Calendar, Clock, User, Car } from 'lucide-react'

// Mock appointment data
const mockAppointments = [
  {
    id: '1',
    time: '09:00',
    duration: 120,
    customer: 'Juan Pérez',
    vehicle: 'Toyota Corolla 2020',
    service: 'Mantenimiento preventivo',
    status: 'CONFIRMED',
    assignedTo: 'Carlos Técnico',
    date: '2024-08-11'
  },
  {
    id: '2',
    time: '10:30',
    duration: 60,
    customer: 'María García',
    vehicle: 'Honda Civic 2019',
    service: 'Cambio de aceite',
    status: 'SCHEDULED',
    assignedTo: 'Ana Técnico',
    date: '2024-08-11'
  },
  {
    id: '3',
    time: '14:00',
    duration: 90,
    customer: 'Carlos López',
    vehicle: 'Chevrolet Spark 2021',
    service: 'Revisión de frenos',
    status: 'IN_PROGRESS',
    assignedTo: 'Luis Técnico',
    date: '2024-08-11'
  },
  {
    id: '4',
    time: '16:00',
    duration: 180,
    customer: 'Ana Rodríguez',
    vehicle: 'Nissan Sentra 2018',
    service: 'Diagnóstico motor',
    status: 'SCHEDULED',
    assignedTo: 'Carlos Técnico',
    date: '2024-08-11'
  },
  {
    id: '5',
    time: '10:00',
    duration: 90,
    customer: 'Pedro Morales',
    vehicle: 'Ford Focus 2017',
    service: 'Cambio de pastillas',
    status: 'CONFIRMED',
    assignedTo: 'Ana Técnico',
    date: '2024-08-12'
  },
  {
    id: '6',
    time: '15:00',
    duration: 120,
    customer: 'Laura Jiménez',
    vehicle: 'Mazda 3 2020',
    service: 'Alineación y balanceo',
    status: 'SCHEDULED',
    assignedTo: 'Luis Técnico',
    date: '2024-08-12'
  }
]

function getStatusColor(status: string) {
  switch (status) {
    case 'SCHEDULED':
      return 'bg-blue-600'
    case 'CONFIRMED':
      return 'bg-green-600'
    case 'IN_PROGRESS':
      return 'bg-yellow-600'
    case 'COMPLETED':
      return 'bg-green-700'
    case 'CANCELED':
      return 'bg-red-600'
    default:
      return 'bg-gray-600'
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'SCHEDULED':
      return 'Programada'
    case 'CONFIRMED':
      return 'Confirmada'
    case 'IN_PROGRESS':
      return 'En Progreso'
    case 'COMPLETED':
      return 'Completada'
    case 'CANCELED':
      return 'Cancelada'
    default:
      return status
  }
}

const today = new Date().toISOString().split('T')[0]
const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]

const todayAppointments = mockAppointments.filter(apt => apt.date === today)
const tomorrowAppointments = mockAppointments.filter(apt => apt.date === tomorrow)

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Citas</h1>
          <p className="text-gray-400">
            Gestión y programación de citas del taller
          </p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Nueva Cita
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-purple-500" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {todayAppointments.length}
                </div>
                <div className="text-sm text-gray-400">Citas Hoy</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {mockAppointments.filter(apt => apt.status === 'CONFIRMED').length}
                </div>
                <div className="text-sm text-gray-400">Confirmadas</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {mockAppointments.filter(apt => apt.status === 'IN_PROGRESS').length}
                </div>
                <div className="text-sm text-gray-400">En Progreso</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Car className="h-5 w-5 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-white">
                  {tomorrowAppointments.length}
                </div>
                <div className="text-sm text-gray-400">Mañana</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Appointments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Citas de Hoy ({new Date().toLocaleDateString('es-CO', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })})</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {todayAppointments.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                No hay citas programadas para hoy
              </div>
            ) : (
              todayAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">
                        {appointment.time}
                      </div>
                      <div className="text-xs text-gray-400">
                        {appointment.duration}min
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white">
                        {appointment.customer}
                      </h3>
                      <div className="text-sm text-gray-400">
                        {appointment.vehicle}
                      </div>
                      <div className="text-sm text-gray-400">
                        {appointment.service}
                      </div>
                      <div className="text-sm text-gray-400">
                        Técnico: {appointment.assignedTo}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs text-white ${getStatusColor(appointment.status)}`}>
                        {getStatusLabel(appointment.status)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Ver
                    </Button>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    {appointment.status === 'SCHEDULED' && (
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Confirmar
                      </Button>
                    )}
                    {appointment.status === 'CONFIRMED' && (
                      <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                        Iniciar
                      </Button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Tomorrow's Appointments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Citas de Mañana</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tomorrowAppointments.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                No hay citas programadas para mañana
              </div>
            ) : (
              tomorrowAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">
                        {appointment.time}
                      </div>
                      <div className="text-xs text-gray-400">
                        {appointment.duration}min
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white">
                        {appointment.customer}
                      </h3>
                      <div className="text-sm text-gray-400">
                        {appointment.vehicle}
                      </div>
                      <div className="text-sm text-gray-400">
                        {appointment.service}
                      </div>
                      <div className="text-sm text-gray-400">
                        Técnico: {appointment.assignedTo}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs text-white ${getStatusColor(appointment.status)}`}>
                        {getStatusLabel(appointment.status)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Ver
                    </Button>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}