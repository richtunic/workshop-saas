import { z } from 'zod'

// Customer validation schemas
export const createCustomerSchema = z.object({
  firstName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido').optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  customerType: z.enum(['INDIVIDUAL', 'CORPORATE']),
  creditLimit: z.number().positive('El límite debe ser positivo').optional(),
  creditDays: z.number().positive('Los días deben ser positivos').optional()
})

export const updateCustomerSchema = createCustomerSchema.partial()

// Vehicle validation schemas
export const createVehicleSchema = z.object({
  customerId: z.string().min(1, 'Cliente requerido'),
  make: z.string().min(1, 'Marca requerida'),
  model: z.string().min(1, 'Modelo requerido'),
  year: z.number()
    .min(1900, 'Año inválido')
    .max(new Date().getFullYear() + 1, 'Año inválido'),
  licensePlate: z.string().optional(),
  vin: z.string().optional(),
  color: z.string().optional(),
  mileage: z.number().min(0, 'El kilometraje no puede ser negativo').optional()
})

export const updateVehicleSchema = createVehicleSchema.partial().omit({ customerId: true })

// Appointment validation schemas
export const createAppointmentSchema = z.object({
  customerId: z.string().min(1, 'Cliente requerido'),
  vehicleId: z.string().min(1, 'Vehículo requerido'),
  scheduledAt: z.date().min(new Date(), 'La fecha debe ser futura'),
  durationMinutes: z.number()
    .min(30, 'Duración mínima 30 minutos')
    .max(480, 'Duración máxima 8 horas'),
  serviceType: z.string().min(1, 'Tipo de servicio requerido'),
  description: z.string().optional(),
  assignedToId: z.string().optional()
})

export const updateAppointmentSchema = createAppointmentSchema.partial()

// Repair Order validation schemas
export const createRepairOrderItemSchema = z.object({
  type: z.string().min(1, 'Tipo requerido'),
  description: z.string().min(1, 'Descripción requerida'),
  quantity: z.number().min(1, 'Cantidad mínima 1'),
  unitPrice: z.number().min(0, 'Precio debe ser positivo')
})

export const createRepairOrderSchema = z.object({
  customerId: z.string().min(1, 'Cliente requerido'),
  vehicleId: z.string().min(1, 'Vehículo requerido'),
  appointmentId: z.string().optional(),
  description: z.string().min(1, 'Descripción requerida'),
  diagnosis: z.string().optional(),
  estimatedCompletion: z.date().optional(),
  assignedToId: z.string().optional(),
  items: z.array(createRepairOrderItemSchema).min(1, 'Al menos un item requerido')
})

export const updateRepairOrderSchema = createRepairOrderSchema.partial()

// User validation schemas
export const createUserSchema = z.object({
  firstName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  role: z.enum(['ADMIN', 'MANAGER', 'OPERATOR', 'VIEWER']),
  workspaceId: z.string().optional()
})

export const updateUserSchema = createUserSchema.partial().omit({ email: true })

// Login validation schema
export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres')
})

// Workspace validation schema
export const createWorkspaceSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('Email inválido').optional()
})

export const updateWorkspaceSchema = createWorkspaceSchema.partial()

// Filter schemas
export const customerFiltersSchema = z.object({
  search: z.string().optional(),
  customerType: z.enum(['INDIVIDUAL', 'CORPORATE']).optional(),
  isActive: z.boolean().optional()
})

export const appointmentFiltersSchema = z.object({
  date: z.date().optional(),
  status: z.string().optional(),
  assignedToId: z.string().optional()
})

export const repairOrderFiltersSchema = z.object({
  status: z.string().optional(),
  customerId: z.string().optional(),
  assignedToId: z.string().optional(),
  dateFrom: z.date().optional(),
  dateTo: z.date().optional()
})

// Type exports for form data
export type CreateCustomerData = z.infer<typeof createCustomerSchema>
export type UpdateCustomerData = z.infer<typeof updateCustomerSchema>
export type CreateVehicleData = z.infer<typeof createVehicleSchema>
export type UpdateVehicleData = z.infer<typeof updateVehicleSchema>
export type CreateAppointmentData = z.infer<typeof createAppointmentSchema>
export type UpdateAppointmentData = z.infer<typeof updateAppointmentSchema>
export type CreateRepairOrderData = z.infer<typeof createRepairOrderSchema>
export type UpdateRepairOrderData = z.infer<typeof updateRepairOrderSchema>
export type CreateUserData = z.infer<typeof createUserSchema>
export type UpdateUserData = z.infer<typeof updateUserSchema>
export type LoginData = z.infer<typeof loginSchema>
export type CreateWorkspaceData = z.infer<typeof createWorkspaceSchema>
export type UpdateWorkspaceData = z.infer<typeof updateWorkspaceSchema>