from typing import Any

from pydantic import BaseModel


class ExecutiveDashboardResponse(BaseModel):
    dataset: dict[str, Any]
    health: dict[str, Any]
    entropy: dict[str, Any]
    runs: dict[str, Any]
    serial: dict[str, Any]
    uniformity: dict[str, Any]
    audit: dict[str, Any]
