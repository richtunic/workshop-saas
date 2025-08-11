// Base types without Prisma client dependency for now
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'ADMIN' | 'MANAGER' | 'OPERATOR' | 'VIEWER'
  workspaceId?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Customer {
  id: string
  firstName: string
  lastName: string
  email?: string
  phone?: string
  address?: string
  customerType: 'INDIVIDUAL' | 'CORPORATE'
  creditLimit?: number
  creditDays?: number
  isActive: boolean
  workspaceId: string
  createdAt: Date
  updatedAt: Date
}

export interface Vehicle {
  id: string
  customerId: string
  make: string
  model: string
  year: number
  licensePlate?: string
  vin?: string
  color?: string
  mileage?: number
  workspaceId: string
  createdAt: Date
  updatedAt: Date
}

export interface Appointment {
  id: string
  customerId: string
  vehicleId: string
  scheduledAt: Date
  durationMinutes: number
  serviceType: string
  description?: string
  status: 'SCHEDULED' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELED'
  assignedToId?: string
  workspaceId: string
  createdAt: Date
  updatedAt: Date
}

export interface RepairOrder {
  id: string
  orderNumber: string
  customerId: string
  vehicleId: string
  appointmentId?: string
  description: string
  diagnosis?: string
  status: 'RECEIVED' | 'DIAGNOSED' | 'APPROVED' | 'IN_PROGRESS' | 'COMPLETED' | 'DELIVERED'
  estimatedCompletion?: Date
  totalAmount: number
  createdById: string
  assignedToId?: string
  workspaceId: string
  createdAt: Date
  updatedAt: Date
}

export interface RepairOrderItem {
  id: string
  repairOrderId: string
  type: string
  description: string
  quantity: number
  unitPrice: number
  totalPrice: number
  createdAt: Date
  updatedAt: Date
}

export interface Workspace {
  id: string
  name: string
  slug: string
  logoUrl?: string
  address?: string
  phone?: string
  email?: string
  settings?: any
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// Extended types with relations
export type CustomerWithVehicles = Customer & {
  vehicles: Vehicle[]
}

export type VehicleWithCustomer = Vehicle & {
  customer: Customer
}

export type AppointmentWithDetails = Appointment & {
  customer: Customer
  vehicle: Vehicle
  assignedTo?: User
}

export type RepairOrderWithDetails = RepairOrder & {
  customer: Customer
  vehicle: Vehicle
  appointment?: Appointment
  items: RepairOrderItem[]
  createdBy: User
  assignedTo?: User
}

export type UserWithWorkspace = User & {
  workspace?: Workspace
}

// Form data types
export interface CreateCustomerData {
  firstName: string
  lastName: string
  email?: string
  phone?: string
  address?: string
  customerType: 'INDIVIDUAL' | 'CORPORATE'
  creditLimit?: number
  creditDays?: number
}

export interface CreateVehicleData {
  customerId: string
  make: string
  model: string
  year: number
  licensePlate?: string
  vin?: string
  color?: string
  mileage?: number
}

export interface CreateAppointmentData {
  customerId: string
  vehicleId: string
  scheduledAt: Date
  durationMinutes: number
  serviceType: string
  description?: string
  assignedToId?: string
}

export interface CreateRepairOrderData {
  customerId: string
  vehicleId: string
  appointmentId?: string
  description: string
  diagnosis?: string
  estimatedCompletion?: Date
  assignedToId?: string
  items: {
    type: string
    description: string
    quantity: number
    unitPrice: number
  }[]
}

// Dashboard data types
export interface DashboardMetrics {
  todayAppointments: number
  weekAppointments: number
  inProgressOrders: number
  completedOrdersThisMonth: number
  monthlyRevenue: number
  activeCustomers: number
}

// Filter types
export interface CustomerFilters {
  search?: string
  customerType?: 'INDIVIDUAL' | 'CORPORATE'
  isActive?: boolean
}

export interface AppointmentFilters {
  date?: Date
  status?: string
  assignedToId?: string
}

export interface RepairOrderFilters {
  status?: string
  customerId?: string
  assignedToId?: string
  dateFrom?: Date
  dateTo?: Date
}

// Auth types
export interface AuthUser {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
  workspaceId?: string
}

// Error types
export interface ApiError {
  message: string
  code: string
  details?: any
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: ApiError
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}