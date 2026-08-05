<div align="center">
  <img src="./frontend/public/logo_NOVA-nuevo.png" alt="NOVA Logo" width="200" />
  <h1>NOVA - Navegador de Orientación Vocacional Académica</h1>
  <p>
    <img src="https://img.shields.io/badge/NOVA-Vocational_System-003461?style=for-the-badge" alt="NOVA Banner" />
    <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/FastAPI-0.109-009688?style=for-the-badge&logo=fastapi" alt="FastAPI" />
    <img src="https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker" alt="Docker" />
  </p>
</div>

**NOVA** es una plataforma web fullstack diseñada para revolucionar la orientación vocacional. Utilizando principios del **Modelo Holland** y **Lógica Difusa**, NOVA analiza los patrones de pensamiento, aptitudes y personalidad de los usuarios para conectarlos con las carreras universitarias que mejor se adaptan a su perfil real.

---

## ✨ Características Principales

- 🧠 **Motor Psicométrico:** Evaluación inteligente que va más allá de encuestas básicas.
- 🎨 **Interfaz Moderna e Inmersiva:** Diseño responsivo (Mobile-First) con animaciones fluidas, paleta de colores cuidada y accesibilidad superior gracias a Tailwind CSS y Next.js.
- 🐳 **Contenedorización (Docker):** Entornos de desarrollo y producción estandarizados.
- ⚡ **Backend Robusto:** API REST ultra rápida construida en Python con FastAPI.
- 🗄️ **Persistencia de Datos Segura:** PostgreSQL manejado con SQLAlchemy y Alembic para migraciones.

---

## 🏗️ Estructura del Proyecto

El repositorio está organizado como un monorepo que contiene tanto el frontend como el backend, junto a las configuraciones de despliegue.

```text
NOVA/
├── backend/                # API REST (Python / FastAPI)
│   ├── app/                # Código fuente principal de la API
│   │   ├── api/            # Endpoints y rutas (Controllers)
│   │   ├── core/           # Configuraciones, seguridad y JWT
│   │   ├── models/         # Modelos de base de datos (SQLAlchemy)
│   │   ├── schemas/        # Esquemas de validación (Pydantic)
│   │   └── services/       # Lógica de negocio
│   ├── tests/              # Pruebas unitarias
│   ├── alembic/            # Migraciones de base de datos
│   └── requirements.txt    # Dependencias de Python
│
├── frontend/               # Aplicación Web (Next.js / React)
│   ├── src/
│   │   ├── app/            # Rutas de Next.js (App Router), Layouts y CSS global
│   │   ├── components/     # Componentes UI reutilizables (Modales, Navbar, Cards)
│   │   ├── context/        # Manejo de estado global (React Context API)
│   │   ├── lib/            # Utilidades, datos crudos (Holland) y cálculos lógicos
│   │   └── public/         # Assets estáticos (Imágenes, íconos, logos)
│   ├── tailwind.config.ts  # Configuración del sistema de diseño
│   └── package.json        # Dependencias de Node.js
│
├── database/               # Scripts de inicialización SQL
├── nginx/                  # Configuración de Reverse Proxy (Para producción)
├── docker-compose.yml      # Orquestación de servicios en Docker
└── .env.example            # Plantilla de variables de entorno globales
```

---

## 🚀 Guía de Instalación y Ejecución (Quick Start)

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio> NOVA
cd NOVA
```

### 2. Configurar Variables de Entorno
El sistema requiere de archivos `.env` en la raíz y en los subdirectorios para orquestar la comunicación entre contenedores.

```bash
# 1. Copiar el archivo global
cp .env.example .env

# 2. Copiar variables del backend
cp backend/.env.example backend/.env

# 3. Copiar variables del frontend
cp frontend/.env.example frontend/.env
```
*(Nota: Asegúrate de configurar contraseñas seguras y secretos JWT dentro de estos archivos si vas a desplegar en producción).*

### 3. Levantar los servicios con Docker (Recomendado)

Asegúrate de tener instalado [Docker](https://www.docker.com/) y `docker-compose`.

**Para entorno de Desarrollo:**
Levantará la Base de Datos, el Backend y el Frontend con *Hot-Reload* activado.
```bash
docker-compose up --build
```
*(Si deseas ejecutarlo en segundo plano, añade la bandera `-d` al final del comando).*

**Para entorno de Producción:**
Levantará los servicios incluyendo **Nginx** como Reverse Proxy para manejar la estática y ruteo.
```bash
docker-compose --profile production up --build -d
```

---

## 🌐 Puertos y Accesos Locales

Una vez levantados los contenedores en modo desarrollo, puedes acceder a:

| Servicio | URL Local | Descripción |
| :--- | :--- | :--- |
| **Frontend (App)** | [http://localhost:3000](http://localhost:3000) | La aplicación web de NOVA. |
| **Backend (API)** | [http://localhost:8000](http://localhost:8000) | Punto de acceso a la API REST. |
| **API Docs (Swagger)**| [http://localhost:8000/docs](http://localhost:8000/docs) | Documentación interactiva de los Endpoints. |
| **PostgreSQL** | `localhost:5432` | Base de datos relacional. |

---

## 🛠️ Comandos de Mantenimiento y Utilidad

### 📦 Docker
```bash
# Ver logs de todos los servicios en tiempo real
docker-compose logs -f

# Ver logs de un servicio específico (ej: frontend)
docker-compose logs -f frontend

# Bajar todos los servicios
docker-compose down

# Bajar servicios y ELIMINAR la base de datos (Reset total)
docker-compose down -v
```

### 🗄️ Base de Datos (Backend)
Las migraciones son gestionadas por **Alembic**. Estos comandos deben ejecutarse dentro del contenedor del backend.

```bash
# Generar una nueva migración (tras cambiar un modelo SQLAlchemy)
docker-compose exec backend alembic revision --autogenerate -m "nombre_de_la_migracion"

# Aplicar las migraciones (Actualizar la BD a la última versión)
docker-compose exec backend alembic upgrade head

# Acceder a la consola de PostgreSQL directamente
docker-compose exec db psql -U nova_user -d nova_db
```

---

## 🎨 Sistema de Diseño (Frontend)

El frontend de NOVA utiliza un acercamiento modular y estético basado en variables CSS puras y la configuración de Tailwind:
- **Colores:** Se definen variables en `globals.css` (ej. `--color-primary`, `--color-secondary`) que luego Tailwind consume para generar utilidades dinámicas (`bg-primary`, `text-secondary`).
- **Responsividad:** Diseñado *Mobile-First*. Asegura que todos los modales, el navbar (que incluye un menú hamburguesa/drawer lateral) y las tarjetas del test se vean perfectas en dispositivos móviles y de escritorio.
- **Micro-animaciones:** Efectos *Glow*, difuminados de fondo en modales (via `createPortal` y `backdrop-blur-md`), y barras de progreso fluidas implementadas para mejorar significativamente la experiencia de usuario (UX).

---

## 🤝 Contribuir
1. Crea tu rama para la nueva característica (`git checkout -b feature/nueva-idea`).
2. Haz commit de tus cambios (`git commit -m 'Añade nueva idea'`).
3. Sube la rama (`git push origin feature/nueva-idea`).
4. Abre un Pull Request para revisión.

## 📝 Licencia
Este proyecto está bajo la Licencia **MIT**.
