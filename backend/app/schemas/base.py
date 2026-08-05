"""
NOVA — Schemas Base
Schemas Pydantic base para herencia en todos los schemas del proyecto.
"""

from datetime import datetime
from pydantic import BaseModel, ConfigDict


class BaseSchema(BaseModel):
    """Schema base con configuración común."""
    model_config = ConfigDict(from_attributes=True)


class BaseResponseSchema(BaseSchema):
    """Schema base para respuestas que incluyen campos de auditoría."""
    id: int
    created_at: datetime
    updated_at: datetime


class MessageSchema(BaseSchema):
    """Schema genérico para respuestas de mensaje."""
    message: str
    detail: str | None = None
