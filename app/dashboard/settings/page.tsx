import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Settings, 
  Building2, 
  Palette, 
  Bell, 
  Database, 
  Shield,
  Save
} from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Configuración</h1>
        <p className="text-gray-400">
          Configuración general del sistema y taller
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Workshop Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building2 className="h-5 w-5" />
              <span>Información del Taller</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Nombre del Taller
              </label>
              <Input 
                defaultValue="Taller Workshop SaaS"
                placeholder="Nombre del taller"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Dirección
              </label>
              <Input 
                defaultValue="Calle 123 #45-67, Bogotá, Colombia"
                placeholder="Dirección completa"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Teléfono
                </label>
                <Input 
                  defaultValue="+57 301 123 4567"
                  placeholder="Teléfono"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <Input 
                  defaultValue="info@workshop.com"
                  placeholder="Email de contacto"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Descripción
              </label>
              <textarea 
                className="flex w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                rows={3}
                defaultValue="Taller especializado en mantenimiento y reparación de vehículos automotrices."
                placeholder="Descripción del taller"
              />
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Configuración del Sistema</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Zona Horaria
              </label>
              <select className="flex h-10 w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                <option value="America/Bogota">América/Bogotá (UTC-5)</option>
                <option value="America/Mexico_City">América/Ciudad de México (UTC-6)</option>
                <option value="America/New_York">América/Nueva York (UTC-4)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Moneda
              </label>
              <select className="flex h-10 w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                <option value="COP">Peso Colombiano (COP)</option>
                <option value="USD">Dólar Estadounidense (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="MXN">Peso Mexicano (MXN)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Idioma
              </label>
              <select className="flex h-10 w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Duración Cita por Defecto
              </label>
              <select className="flex h-10 w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                <option value="60">1 hora</option>
                <option value="90">1.5 horas</option>
                <option value="120">2 horas</option>
                <option value="180">3 horas</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Theme Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="h-5 w-5" />
              <span>Tema y Apariencia</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Tema
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border-2 border-purple-500 bg-gray-700">
                  <div className="text-sm font-medium text-white mb-2">Negro/Morado</div>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-black rounded"></div>
                    <div className="w-4 h-4 bg-purple-600 rounded"></div>
                    <div className="w-4 h-4 bg-gray-700 rounded"></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">Actual</div>
                </div>
                <div className="p-4 rounded-lg border border-gray-600 bg-gray-700 opacity-50">
                  <div className="text-sm font-medium text-white mb-2">Próximamente</div>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <div className="w-4 h-4 bg-gray-800 rounded"></div>
                    <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">Azul/Gris</div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Logo del Taller
              </label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                <div className="text-gray-400 mb-2">
                  Arrastra tu logo aquí o haz clic para seleccionar
                </div>
                <Button variant="outline" size="sm">
                  Seleccionar Archivo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notificaciones</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white">Citas Próximas</div>
                  <div className="text-xs text-gray-400">Notificar 30 min antes de la cita</div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white">Órdenes Completadas</div>
                  <div className="text-xs text-gray-400">Notificar cuando se complete una orden</div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white">Nuevos Clientes</div>
                  <div className="text-xs text-gray-400">Notificar cuando se registre un nuevo cliente</div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white">Reportes Semanales</div>
                  <div className="text-xs text-gray-400">Enviar reporte semanal por email</div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Seguridad</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Tiempo de Sesión (minutos)
              </label>
              <select className="flex h-10 w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2">
                <option value="30">30 minutos</option>
                <option value="60">1 hora</option>
                <option value="120">2 horas</option>
                <option value="480">8 horas</option>
              </select>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white">Autenticación de Dos Factores</div>
                  <div className="text-xs text-gray-400">Seguridad adicional para el login</div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white">Log de Actividades</div>
                  <div className="text-xs text-gray-400">Guardar registro de acciones del usuario</div>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Database */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>Base de Datos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-white mb-1">Total Registros</div>
                <div className="text-2xl font-bold text-purple-400">1,247</div>
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-1">Último Backup</div>
                <div className="text-sm text-gray-400">Hace 2 horas</div>
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Crear Backup Manual
              </Button>
              <Button variant="outline" className="w-full">
                Exportar Datos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Save className="h-4 w-4 mr-2" />
          Guardar Configuración
        </Button>
      </div>
    </div>
  )
}