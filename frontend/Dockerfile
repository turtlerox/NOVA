# ═══════════════════════════════════════════════
# NOVA Frontend — Dockerfile (Next.js)
# ═══════════════════════════════════════════════
FROM node:20-alpine

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando de inicio (desarrollo)
CMD ["npm", "run", "dev"]
