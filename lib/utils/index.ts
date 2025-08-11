import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(amount)
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function generateOrderNumber(): string {
  const date = new Date()
  const year = date.getFullYear().toString().slice(-2)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  
  return `WS${year}${month}${day}${random}`
}

export function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    SCHEDULED: 'bg-blue-500',
    CONFIRMED: 'bg-green-500', 
    IN_PROGRESS: 'bg-yellow-500',
    COMPLETED: 'bg-green-600',
    CANCELED: 'bg-red-500',
    RECEIVED: 'bg-gray-500',
    DIAGNOSED: 'bg-blue-500',
    APPROVED: 'bg-green-500',
    DELIVERED: 'bg-green-600'
  }
  
  return statusColors[status] || 'bg-gray-500'
}

export function getStatusLabel(status: string): string {
  const statusLabels: Record<string, string> = {
    SCHEDULED: 'Programada',
    CONFIRMED: 'Confirmada',
    IN_PROGRESS: 'En Progreso',
    COMPLETED: 'Completada',
    CANCELED: 'Cancelada',
    RECEIVED: 'Recibida',
    DIAGNOSED: 'Diagnosticada',
    APPROVED: 'Aprobada',
    DELIVERED: 'Entregada'
  }
  
  return statusLabels[status] || status
}