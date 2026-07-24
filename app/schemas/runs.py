from pydantic import BaseModel


class RunsResponse(BaseModel):
    runs: int
    expected_runs: float
    z_score: float
    p_value: float
    passed: bool
