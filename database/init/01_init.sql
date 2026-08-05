-- ═══════════════════════════════════════════════
-- NOVA — Script de Inicialización de Base de Datos
-- Se ejecuta automáticamente la primera vez que el
-- contenedor de PostgreSQL se inicia.
-- ═══════════════════════════════════════════════

-- Habilitar extensiones útiles
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ── Esquema principal ───────────────────────
-- (Las tablas se crean via Alembic migrations,
--  pero aquí puedes definir el esquema base)

-- Ejemplo: tabla de usuarios
-- CREATE TABLE IF NOT EXISTS users (
--     id SERIAL PRIMARY KEY,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     hashed_password VARCHAR(255) NOT NULL,
--     is_active BOOLEAN DEFAULT TRUE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- Log de inicialización
DO $$
BEGIN
    RAISE NOTICE '✅ NOVA Database initialized successfully';
END
$$;
