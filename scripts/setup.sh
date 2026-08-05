#!/bin/bash
# ═══════════════════════════════════════════════
# NOVA — Script de Setup Inicial
# ═══════════════════════════════════════════════

set -e

echo "🚀 Configurando proyecto NOVA..."

# ── Copiar archivos de entorno ───────────────
echo "📋 Creando archivos .env..."

if [ ! -f .env ]; then
    cp .env.example .env
    echo "   ✅ .env creado"
else
    echo "   ⏭️  .env ya existe, omitiendo"
fi

if [ ! -f backend/.env ]; then
    cp backend/.env.example backend/.env
    echo "   ✅ backend/.env creado"
else
    echo "   ⏭️  backend/.env ya existe, omitiendo"
fi

if [ ! -f frontend/.env ]; then
    cp frontend/.env.example frontend/.env
    echo "   ✅ frontend/.env creado"
else
    echo "   ⏭️  frontend/.env ya existe, omitiendo"
fi

# ── Levantar servicios ──────────────────────
echo ""
echo "🐳 Levantando servicios con Docker..."
docker-compose up --build -d

# ── Esperar a que la BD esté lista ──────────
echo ""
echo "⏳ Esperando a que la base de datos esté lista..."
sleep 5

# ── Ejecutar migraciones ────────────────────
echo ""
echo "📦 Ejecutando migraciones..."
docker-compose exec -T backend alembic upgrade head 2>/dev/null || echo "   ⚠️  No hay migraciones pendientes"

echo ""
echo "════════════════════════════════════════"
echo "✅ NOVA está listo!"
echo ""
echo "   🌐 Frontend:  http://localhost:3000"
echo "   🔧 Backend:   http://localhost:8000"
echo "   📚 API Docs:  http://localhost:8000/docs"
echo "   🐘 Database:  localhost:5432"
echo "════════════════════════════════════════"
