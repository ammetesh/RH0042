from typing import Any


def compare_periods(
    entropy_a: float,
    entropy_b: float,
    randomness_a: float,
    randomness_b: float,
    draws_a: int,
    draws_b: int,
) -> dict[str, Any]:

    entropy_diff = round(entropy_b - entropy_a, 2)
    randomness_diff = round(randomness_b - randomness_a, 2)

    if abs(entropy_diff) < 5 and abs(randomness_diff) < 5:
        conclusion = (
            "No statistically significant degradation detected."
        )
    else:
        conclusion = (
            "Noticeable statistical differences detected between the two periods."
        )

    return {
        "period_a": {
            "draws": draws_a,
            "entropy": entropy_a,
            "randomness_score": randomness_a,
        },
        "period_b": {
            "draws": draws_b,
            "entropy": entropy_b,
            "randomness_score": randomness_b,
        },
        "difference": {
            "entropy": entropy_diff,
            "randomness_score": randomness_diff,
        },
        "conclusion": conclusion,
    }
