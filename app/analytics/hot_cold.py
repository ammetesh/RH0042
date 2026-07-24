from collections import Counter

from app.models.draw import Draw


def hot_cold_numbers(draws: list[Draw], top: int = 10):
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

    hot = counter.most_common(top)

    cold = sorted(
        counter.items(),
        key=lambda x: (x[1], x[0])
    )[:top]

    return {
        "hot_numbers": [
            {"number": n, "frequency": f}
            for n, f in hot
        ],
        "cold_numbers": [
            {"number": n, "frequency": f}
            for n, f in cold
        ]
    }
