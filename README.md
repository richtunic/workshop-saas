# Workshop SaaS - MVP Core

Sistema SaaS moderno para gestión integral de talleres automotrices con Next.js 14, TypeScript, Prisma y diseño elegante negro/morado.

## 🚀 Características Principales

- **Gestión de Clientes**: CRUD completo con búsqueda inteligente y filtros
- **Gestión de Vehículos**: Historial de reparaciones y mantenimiento
- **Sistema de Citas**: Calendario interactivo con gestión de estados
- **Órdenes de Reparación**: Workflow completo desde recepción hasta entrega
- **Autenticación Segura**: Sistema de roles y permisos
- **Generación de PDFs**: Cotizaciones y facturas profesionales
- **Dashboard Administrativo**: Métricas en tiempo real

## 🛠 Stack Tecnológico

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS con tema personalizado negro/morado
- **Base de datos**: PostgreSQL + Prisma ORM
- **Autenticación**: NextAuth.js
- **Validaciones**: React Hook Form + Zod
- **PDFs**: PDFKit
- **UI Components**: Radix UI + Custom components

## 🎨 Tema de Colores

- **Fondo principal**: Negro (#000000)
- **Acentos**: Morado (#8B5CF6)
- **Grises**: #1F2937, #374151, #6B7280
- **Cards**: #111827 con bordes #374151

## 📦 Instalación

```bash
# Clonar repositorio
git clone <repository-url>
cd workshop-saas

# Instalar dependencias
npm install

# Configurar base de datos
cp .env.example .env.local
# Editar .env.local con tu DATABASE_URL

# Ejecutar migraciones
npx prisma migrate dev

# Ejecutar seed (opcional)
npx prisma db seed

# Iniciar servidor de desarrollo
npm run dev
```

## 🌐 Variables de Entorno

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/workshop_saas"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── (auth)/           # Rutas de autenticación
│   ├── dashboard/        # Panel principal
│   ├── api/             # Endpoints API
│   └── globals.css      # Estilos globales
├── components/
│   ├── ui/              # Componentes base
│   ├── forms/           # Formularios
│   ├── layouts/         # Layouts
│   └── features/        # Componentes específicos
├── lib/
│   ├── auth/            # Configuración NextAuth
│   ├── database/        # Cliente Prisma
│   ├── pdf/             # Generación PDFs
│   ├── validations/     # Schemas Zod
│   └── utils/           # Utilidades
├── prisma/
│   ├── schema.prisma    # Schema de base de datos
│   └── migrations/      # Migraciones
└── types/
    └── index.ts         # Tipos TypeScript
```

## 🔐 Roles de Usuario

- **Admin**: Acceso completo al sistema
- **Manager**: Gestión de operaciones y reportes
- **Operator**: Creación y edición de órdenes
- **Viewer**: Solo lectura de información

## 📝 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
npm run type-check   # Verificación de tipos
```

## 🚦 Estado del Proyecto

- ✅ Configuración base Next.js 14
- ✅ Tema personalizado Tailwind
- ⏳ Schema Prisma
- ⏳ Sistema de autenticación
- ⏳ Componentes UI base
- ⏳ CRUD Entidades
- ⏳ Dashboard y métricas
- ⏳ Generación PDFs

## 📄 Licencia

MIT License
