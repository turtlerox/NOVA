# 🏗️ NOVA — Arquitectura del Proyecto

## Visión General

NOVA sigue una arquitectura de microservicios contenerizados con Docker, separando backend, frontend y base de datos en servicios independientes.

## Diagrama de Arquitectura

```
┌─────────────┐     ┌─────────────┐
│   Browser   │────▶│    Nginx    │ (Puerto 80)
└─────────────┘     │  (Proxy)    │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              ▼                         ▼
     ┌────────────────┐       ┌────────────────┐
     │    Frontend    │       │    Backend     │
     │  (Puerto 3000) │       │  (Puerto 8000) │
     └────────────────┘       └───────┬────────┘
                                      │
                              ┌───────▼────────┐
                              │   PostgreSQL   │
                              │  (Puerto 5432) │
                              └────────────────┘
```

## Capas del Backend

```
Routes (API)  →  Services (Lógica)  →  Repositories (Datos)  →  Models (ORM)
     ↕                  ↕                      ↕
  Schemas          Exceptions              Database
 (Pydantic)         (Core)              (SQLAlchemy)
```

| Capa | Responsabilidad |
|------|-----------------|
| **Routes** | Recibir requests, validar input, retornar responses |
| **Services** | Lógica de negocio, orquestación |
| **Repositories** | Acceso a datos, queries SQL |
| **Models** | Definición de tablas ORM |
| **Schemas** | Validación de datos con Pydantic |
| **Core** | Seguridad, excepciones, utilidades |
| **Middleware** | CORS, logging, auth |

## Estructura de Base de Datos

- **Migraciones**: Alembic (versionado incremental)
- **Seeds**: Datos iniciales para desarrollo
- **Backups**: Directorio para respaldos (ignorado por git)

## Entornos

| Entorno | Composición |
|---------|-------------|
| **Desarrollo** | `docker-compose.yml` + `docker-compose.override.yml` (sin Nginx) |
| **Producción** | `docker-compose.yml` con profile `production` (con Nginx) |
