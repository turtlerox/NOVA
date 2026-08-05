# ═══════════════════════════════════════════════
# NOVA Nginx — Dockerfile
# ═══════════════════════════════════════════════
FROM nginx:alpine

# Eliminar configuración por defecto
RUN rm /etc/nginx/conf.d/default.conf

# Copiar configuración personalizada
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 80
