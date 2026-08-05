"""
NOVA — Main Application Entry Point
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.api.v1.routes import health


def create_app() -> FastAPI:
    """Crea y configura la instancia de FastAPI."""
    app = FastAPI(
        title=settings.APP_NAME,
        description="NOVA API — Backend service",
        version="0.1.0",
        docs_url="/docs",
        redoc_url="/redoc",
        debug=settings.DEBUG,
    )

    # ── CORS ─────────────────────────────────
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # ── Routers ──────────────────────────────
    app.include_router(
        health.router,
        prefix="/api/v1",
        tags=["Health"],
    )

    return app


app = create_app()
