"""
NOVA — Base Service
Clase base para la capa de lógica de negocio.
"""

from typing import TypeVar, Generic, Type, List, Optional

from sqlalchemy.orm import Session

from app.models.base import BaseModel

ModelType = TypeVar("ModelType", bound=BaseModel)


class BaseService(Generic[ModelType]):
    """
    Servicio base con operaciones CRUD genéricas.
    Hereda de esta clase para cada entidad del dominio.
    """

    def __init__(self, model: Type[ModelType], db: Session):
        self.model = model
        self.db = db

    def get_by_id(self, id: int) -> Optional[ModelType]:
        """Obtener un registro por su ID."""
        return self.db.query(self.model).filter(self.model.id == id).first()

    def get_all(self, skip: int = 0, limit: int = 100) -> List[ModelType]:
        """Obtener todos los registros con paginación."""
        return self.db.query(self.model).offset(skip).limit(limit).all()

    def create(self, obj_data: dict) -> ModelType:
        """Crear un nuevo registro."""
        db_obj = self.model(**obj_data)
        self.db.add(db_obj)
        self.db.commit()
        self.db.refresh(db_obj)
        return db_obj

    def update(self, id: int, obj_data: dict) -> Optional[ModelType]:
        """Actualizar un registro existente."""
        db_obj = self.get_by_id(id)
        if not db_obj:
            return None
        for key, value in obj_data.items():
            setattr(db_obj, key, value)
        self.db.commit()
        self.db.refresh(db_obj)
        return db_obj

    def delete(self, id: int) -> bool:
        """Eliminar un registro por su ID."""
        db_obj = self.get_by_id(id)
        if not db_obj:
            return False
        self.db.delete(db_obj)
        self.db.commit()
        return True
