"""
NOVA — Alembic Environment Configuration
Configura Alembic para usar los modelos de SQLAlchemy del proyecto.
"""

import os
import sys
from logging.config import fileConfig

from alembic import context
from sqlalchemy import engine_from_config, pool

# Agregar el directorio del backend al path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "..", "backend"))

from app.config import settings  # noqa: E402
from app.models.base import Base  # noqa: E402

# Configuración de Alembic
config = context.config

# Sobreescribir la URL de la BD con la de settings
config.set_main_option("sqlalchemy.url", settings.DATABASE_URL)

# Configuración de logging
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Metadata de los modelos para autogenerate
target_metadata = Base.metadata


def run_migrations_offline() -> None:
    """Ejecutar migraciones en modo 'offline'."""
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Ejecutar migraciones en modo 'online'."""
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
