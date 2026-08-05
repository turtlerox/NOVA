"""
NOVA — Base Repository
Capa de acceso a datos. Abstrae las queries de SQLAlchemy.
"""

from typing import TypeVar, Generic, Type, List, Optional

from sqlalchemy.orm import Session

from app.models.base import BaseModel

ModelType = TypeVar("ModelType", bound=BaseModel)


class BaseRepository(Generic[ModelType]):
    """
    Repositorio base con operaciones de acceso a datos.
    Hereda de esta clase para cada entidad.
    """

    def __init__(self, model: Type[ModelType], db: Session):
        self.model = model
        self.db = db

    def find_by_id(self, id: int) -> Optional[ModelType]:
        """Buscar un registro por ID."""
        return self.db.query(self.model).filter(self.model.id == id).first()

    def find_all(self, skip: int = 0, limit: int = 100) -> List[ModelType]:
        """Obtener todos los registros con paginación."""
        return self.db.query(self.model).offset(skip).limit(limit).all()

    def save(self, obj: ModelType) -> ModelType:
        """Guardar (crear o actualizar) un objeto en la BD."""
        self.db.add(obj)
        self.db.commit()
        self.db.refresh(obj)
        return obj

    def remove(self, obj: ModelType) -> None:
        """Eliminar un objeto de la BD."""
        self.db.delete(obj)
        self.db.commit()

    def count(self) -> int:
        """Contar el total de registros."""
        return self.db.query(self.model).count()
