from typing import Any

from pydantic import BaseModel


class ExplainabilityResponse(BaseModel):
    metric: str
    title: str
    value: Any
    meaning: str
    why_it_matters: str
    risk_if_low: str
    recommendation: str
