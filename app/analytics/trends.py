from collections import Counter


def calculate_trends(draws):

    frequency = Counter()

    odd = 0
    even = 0

    sums = []

    for draw in draws:

        nums = [
            draw.ball_1,
            draw.ball_2,
            draw.ball_3,
            draw.ball_4,
            draw.ball_5,
            draw.ball_6,
        ]

        if draw.bonus_ball is not None:
            nums.append(draw.bonus_ball)

        frequency.update(nums)

        sums.append(sum(nums))

        for n in nums:
            if n % 2:
                odd += 1
            else:
                even += 1

    top = [
        {"number": n, "count": c}
        for n, c in frequency.most_common(5)
    ]

    least = [
        {"number": n, "count": c}
        for n, c in sorted(
            frequency.items(),
            key=lambda x: x[1]
        )[:5]
    ]

    return {
        "total_draws": len(draws),
        "average_sum": round(sum(sums) / len(sums), 2),
        "odd_even_balance": {
            "odd": odd,
            "even": even,
        },
        "top_numbers": top,
        "least_numbers": least,
    }
