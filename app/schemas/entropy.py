from pydantic import BaseModel


class EntropyResponse(BaseModel):
    entropy: float
    maximum_entropy: float
    entropy_percentage: float
    classification: str
    interpretation: str
