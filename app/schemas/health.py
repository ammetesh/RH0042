from pydantic import BaseModel


class HealthResponse(BaseModel):
    health_score: float
    grade: str
