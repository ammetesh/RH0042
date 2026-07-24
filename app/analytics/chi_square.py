from scipy.stats import chisquare

from app.analytics.frequency import calculate_frequency
from app.core.lottery import LOTTERY
from app.models.draw import Draw


def chi_square_test(draws: list[Draw]):
    frequency = calculate_frequency(draws)

    observed = [
        frequency[number]
        for number in range(
            LOTTERY.min_number,
            LOTTERY.max_number + 1
        )
    ]

    total_observations = sum(observed)

    if total_observations == 0:
        return {
            "chi_square": 0.0,
            "p_value": 1.0,
            "degrees_of_freedom": 0,
        }

    expected = [
        total_observations / len(observed)
    ] * len(observed)

    statistic, p_value = chisquare(
        f_obs=observed,
        f_exp=expected,
    )

    return {
        "chi_square": round(float(statistic), 6),
        "p_value": round(float(p_value), 6),
        "degrees_of_freedom": len(observed) - 1,
        "expected_frequency": round(expected[0], 4),
        "total_observations": total_observations,
    }
