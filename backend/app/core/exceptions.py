"""
NOVA — Custom Exceptions
Excepciones personalizadas para el manejo de errores de la API.
"""

from fastapi import HTTPException, status


class NotFoundException(HTTPException):
    """Recurso no encontrado (404)."""
    def __init__(self, detail: str = "Recurso no encontrado"):
        super().__init__(status_code=status.HTTP_404_NOT_FOUND, detail=detail)


class BadRequestException(HTTPException):
    """Solicitud inválida (400)."""
    def __init__(self, detail: str = "Solicitud inválida"):
        super().__init__(status_code=status.HTTP_400_BAD_REQUEST, detail=detail)


class UnauthorizedException(HTTPException):
    """No autorizado (401)."""
    def __init__(self, detail: str = "Credenciales inválidas"):
        super().__init__(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=detail,
            headers={"WWW-Authenticate": "Bearer"},
        )


class ForbiddenException(HTTPException):
    """Acceso prohibido (403)."""
    def __init__(self, detail: str = "No tiene permisos para esta acción"):
        super().__init__(status_code=status.HTTP_403_FORBIDDEN, detail=detail)


class ConflictException(HTTPException):
    """Conflicto de datos (409)."""
    def __init__(self, detail: str = "El recurso ya existe"):
        super().__init__(status_code=status.HTTP_409_CONFLICT, detail=detail)
