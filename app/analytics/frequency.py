from collections import Counter

from app.core.lottery import LOTTERY
from app.models.draw import Draw


def calculate_frequency(draws: list[Draw]):
    counter = Counter()

    for draw in draws:
        counter.update([
            draw.ball_1,
            draw.ball_2,
            draw.ball_3,
            draw.ball_4,
            draw.ball_5,
            draw.ball_6,
        ])

    frequency = {}

    for number in range(
        LOTTERY.min_number,
        LOTTERY.max_number + 1
    ):
        frequency[number] = counter.get(number, 0)

<<<<<<< HEAD
    return frequency
=======
    return frequency
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
