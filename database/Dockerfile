# ═══════════════════════════════════════════════
# NOVA Database — Dockerfile (Custom PostgreSQL)
# Usa esta imagen si necesitas extensiones adicionales.
# Si no, puedes usar la imagen oficial en docker-compose.
# ═══════════════════════════════════════════════
FROM postgres:16-alpine

# Copiar scripts de inicialización
COPY init/ /docker-entrypoint-initdb.d/

# Variables por defecto
ENV POSTGRES_DB=nova_db
ENV POSTGRES_USER=nova_user

EXPOSE 5432
