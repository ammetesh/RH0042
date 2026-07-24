from typing import Any

from pydantic import BaseModel


class TrendsResponse(BaseModel):
    total_draws: int
    average_sum: float
    odd_even_balance: dict[str, int]
    top_numbers: list[dict[str, Any]]
    least_numbers: list[dict[str, Any]]
