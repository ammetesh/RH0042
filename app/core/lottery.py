from dataclasses import dataclass


@dataclass(frozen=True)
class LotteryConfig:
    min_number: int = 1
    max_number: int = 49
    balls_per_draw: int = 6
    has_bonus_ball: bool = True


<<<<<<< HEAD
LOTTERY = LotteryConfig()
=======
LOTTERY = LotteryConfig()
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
