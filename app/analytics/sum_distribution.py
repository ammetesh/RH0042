from app.models.draw import Draw

def sum_distribution(draws: list[Draw]):
    sums = []

    for draw in draws:
        total = (
            draw.ball_1 +
            draw.ball_2 +
            draw.ball_3 +
            draw.ball_4 +
            draw.ball_5 +
            draw.ball_6
        )
        sums.append(total)

    if not sums:
        return {
            "minimum_sum": 0,
            "maximum_sum": 0,
            "average_sum": 0,
            "draw_sums": []
        }

    return {
        "minimum_sum": min(sums),
        "maximum_sum": max(sums),
        "average_sum": round(sum(sums) / len(sums), 2),
        "draw_sums": sums
    }
