#!/bin/bash
# ═══════════════════════════════════════════════
# NOVA — Script de Deploy
# ═══════════════════════════════════════════════

set -e

echo "🚀 Desplegando NOVA en producción..."

# ── Variables ────────────────────────────────
COMPOSE_FILE="docker-compose.yml"
ENVIRONMENT="${1:-production}"

echo "📦 Ambiente: $ENVIRONMENT"

# ── Pull de la última imagen ─────────────────
echo ""
echo "📥 Pulling latest images..."
docker-compose -f $COMPOSE_FILE pull

# ── Build ────────────────────────────────────
echo ""
echo "🔨 Building services..."
docker-compose -f $COMPOSE_FILE build --no-cache

# ── Deploy ───────────────────────────────────
echo ""
echo "🐳 Starting services..."
docker-compose -f $COMPOSE_FILE --profile production up -d

# ── Migraciones ──────────────────────────────
echo ""
echo "📦 Running migrations..."
docker-compose -f $COMPOSE_FILE exec -T backend alembic upgrade head

# ── Health check ─────────────────────────────
echo ""
echo "🏥 Checking health..."
sleep 5
curl -sf http://localhost:8000/api/v1/health > /dev/null && echo "   ✅ Backend is healthy" || echo "   ❌ Backend health check failed"

echo ""
echo "════════════════════════════════════════"
echo "✅ NOVA deployed successfully!"
echo "════════════════════════════════════════"
