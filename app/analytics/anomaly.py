from typing import Any


def detect_anomalies(draws) -> dict[str, Any]:
    anomalies = []

    for draw in draws:
        numbers = [
            draw.ball_1,
            draw.ball_2,
            draw.ball_3,
            draw.ball_4,
            draw.ball_5,
            draw.ball_6,
        ]

        total = sum(numbers)

        odd = sum(1 for n in numbers if n % 2)
        even = 6 - odd

        reasons = []

        if total < 60 or total > 240:
            reasons.append("Sum outside expected range")

        if odd == 6 or even == 6:
            reasons.append("Extreme odd/even imbalance")

        consecutive = 1
        longest = 1

        nums = sorted(numbers)

        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1] + 1:
                consecutive += 1
                longest = max(longest, consecutive)
            else:
                consecutive = 1

        if longest >= 4:
            reasons.append("Long consecutive sequence")

        if reasons:
            anomalies.append(
                {
                    "draw_id": draw.id,
                    "draw_date": draw.draw_date,
                    "reason": ", ".join(reasons),
                }
            )

    return {
        "total_draws": len(draws),
        "anomalies_found": len(anomalies),
        "anomalies": anomalies,
    }
