// Seed script for workshop data
const seedData = {
  customers: [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      email: 'juan.perez@email.com',
      phone: '+57 301 123 4567',
      customerType: 'INDIVIDUAL'
    },
    {
      firstName: 'María',
      lastName: 'García',
      email: 'maria.garcia@email.com',
      phone: '+57 301 987 6543',
      customerType: 'INDIVIDUAL'
    },
    {
      firstName: 'Carlos',
      lastName: 'López',
      email: 'carlos.lopez@empresa.com',
      phone: '+57 301 555 0123',
      customerType: 'CORPORATE',
      creditLimit: 5000000,
      creditDays: 30
    }
  ],
  vehicles: [
    {
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      licensePlate: 'ABC-123',
      color: 'Blanco',
      mileage: 45000
    },
    {
      make: 'Honda',
      model: 'Civic',
      year: 2019,
      licensePlate: 'DEF-456',
      color: 'Negro',
      mileage: 52000
    },
    {
      make: 'Chevrolet',
      model: 'Spark',
      year: 2021,
      licensePlate: 'GHI-789',
      color: 'Rojo',
      mileage: 28000
    }
  ],
  users: [
    {
      firstName: 'Admin',
      lastName: 'Sistema',
      email: 'admin@workshop.com',
      role: 'ADMIN'
    },
    {
      firstName: 'Carlos',
      lastName: 'Técnico',
      email: 'carlos@workshop.com',
      role: 'OPERATOR'
    },
    {
      firstName: 'Ana',
      lastName: 'Técnico',
      email: 'ana@workshop.com',
      role: 'OPERATOR'
    }
  ]
}

export default seedData