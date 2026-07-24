from typing import Any

from pydantic import BaseModel


class AnomalyResponse(BaseModel):
    total_draws: int
    anomalies_found: int
    anomalies: list[dict[str, Any]]
