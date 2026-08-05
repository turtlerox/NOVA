-- ═══════════════════════════════════════════════
-- NOVA — Seed Data
-- Datos semilla para desarrollo y testing.
-- Ejecutar manualmente: psql -U nova_user -d nova_db -f seed_data.sql
-- ═══════════════════════════════════════════════

-- Ejemplo: insertar datos de prueba
-- INSERT INTO users (email, hashed_password, is_active)
-- VALUES
--     ('admin@nova.dev', '$2b$12$hashexample', TRUE),
--     ('user@nova.dev', '$2b$12$hashexample', TRUE);

DO $$
BEGIN
    RAISE NOTICE '🌱 NOVA Seed data loaded successfully';
END
$$;
