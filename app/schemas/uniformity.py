from pydantic import BaseModel


class UniformityResponse(BaseModel):
    uniformity_score: float
    variance: float
    classification: str
