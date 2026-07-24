from app.models.draw import Draw

def odd_even_analysis(draws: list[Draw]):
    odd = 0
    even = 0

    for draw in draws:
        numbers = [
            draw.ball_1,
            draw.ball_2,
            draw.ball_3,
            draw.ball_4,
            draw.ball_5,
            draw.ball_6,
        ]

        for number in numbers:
            if number % 2 == 0:
                even += 1
            else:
                odd += 1

    total = odd + even

    return {
        "odd": odd,
        "even": even,
        "odd_percentage": round((odd / total) * 100, 2) if total else 0,
        "even_percentage": round((even / total) * 100, 2) if total else 0,
    }
