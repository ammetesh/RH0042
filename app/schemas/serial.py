from pydantic import BaseModel


class SerialCorrelationResponse(BaseModel):
    serial_correlation: float
    classification: str
    interpretation: str
