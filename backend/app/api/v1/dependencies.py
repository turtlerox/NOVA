"""
NOVA — API v1 Dependencies
Dependencias inyectables compartidas (DB session, auth, etc.)
"""

from typing import Generator

from sqlalchemy.orm import Session

from app.models.base import SessionLocal


def get_db() -> Generator[Session, None, None]:
    """Provee una sesión de base de datos por request."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
