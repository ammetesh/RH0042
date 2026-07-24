from datetime import datetime

from pydantic import BaseModel


class TestResults(BaseModel):
    entropy: str
    runs: str
    serial: str
    uniformity: str
    randomness: str


class TrendResults(BaseModel):
    entropy: str
    runs: str
    serial: str
    uniformity: str
    randomness: str


class AuditEngineResponse(BaseModel):
    audit_timestamp: datetime
    draws_analyzed: int
    numbers_analyzed: int
    health_score: float
    confidence_score: float
    overall_grade: str
    risk_level: str
    summary: str
    tests: TestResults
    trends: TrendResults
    strengths: list[str]
    warnings: list[str]
    recommendation: str
