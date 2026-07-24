from dataclasses import dataclass


@dataclass(frozen=True)
class LotteryConfig:
    min_number: int = 1
    max_number: int = 49
    balls_per_draw: int = 6
    has_bonus_ball: bool = True


LOTTERY = LotteryConfig()
