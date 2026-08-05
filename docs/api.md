# 📚 NOVA — Documentación de la API

## Base URL

```
http://localhost:8000/api/v1
```

## Autenticación

La API utiliza JWT Bearer tokens para autenticación.

```
Authorization: Bearer <token>
```

## Endpoints

### Health Check

| Método | Ruta      | Descripción                  |
|--------|-----------|------------------------------|
| GET    | `/health` | Verificar estado del servicio |

**Respuesta exitosa (200):**
```json
{
  "status": "healthy",
  "service": "NOVA API",
  "version": "0.1.0"
}
```

---

## Documentación Interactiva

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Códigos de Estado

| Código | Descripción           |
|--------|-----------------------|
| 200    | Éxito                 |
| 201    | Recurso creado        |
| 400    | Solicitud inválida    |
| 401    | No autorizado         |
| 403    | Prohibido             |
| 404    | No encontrado         |
| 409    | Conflicto             |
| 500    | Error interno         |
