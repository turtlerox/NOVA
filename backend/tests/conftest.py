"""
NOVA — Test Configuration
Fixtures compartidos para todos los tests.
"""

import pytest
from fastapi.testclient import TestClient

from app.main import app


@pytest.fixture(scope="module")
def client():
    """Cliente de test para la API."""
    with TestClient(app) as c:
        yield c


@pytest.fixture(scope="module")
def api_prefix():
    """Prefijo base de la API v1."""
    return "/api/v1"
