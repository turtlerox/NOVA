"""
NOVA — Base de Datos & Modelo Base
Configuración de SQLAlchemy y clase base para todos los modelos ORM.
"""

from datetime import datetime

from sqlalchemy import create_engine, Column, Integer, DateTime
from sqlalchemy.orm import sessionmaker, declarative_base

from app.config import settings

# ── Engine & Session ─────────────────────────
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20,
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# ── Base declarativa ─────────────────────────
Base = declarative_base()


class BaseModel(Base):
    """
    Modelo base abstracto con campos comunes.
    Todos los modelos deben heredar de esta clase.
    """
    __abstract__ = True

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )
