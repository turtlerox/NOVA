"""
NOVA — Health Check Endpoint
"""

from fastapi import APIRouter

router = APIRouter()


@router.get("/health", summary="Health Check")
async def health_check():
    """Verifica que el servicio esté funcionando correctamente."""
    return {
        "status": "healthy",
        "service": "NOVA API",
        "version": "0.1.0",
    }
