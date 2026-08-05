"""
NOVA — Application Configuration
Usa Pydantic Settings para cargar variables de entorno.
"""

from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    """Configuración global de la aplicación."""

    # ── General ──────────────────────────────
    APP_NAME: str = "NOVA"
    DEBUG: bool = False
    LOG_LEVEL: str = "info"

    # ── Base de Datos ────────────────────────
    DATABASE_URL: str = "postgresql://nova_user:nova_secret_password@db:5432/nova_db"

    # ── Seguridad ────────────────────────────
    SECRET_KEY: str = "change-me-to-a-random-secret-key"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # ── CORS ─────────────────────────────────
    CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:8000",
    ]

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True


# Instancia global de configuración
settings = Settings()
