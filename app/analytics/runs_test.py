from typing import Any

from scipy.stats import norm


def calculate_runs_test(numbers: list[int]) -> dict[str, Any]:
    """
    Perform Wald-Wolfowitz Runs Test.
    """

    if len(numbers) < 2:
        raise ValueError("Not enough data for Runs Test.")

    median = sorted(numbers)[len(numbers) // 2]

    sequence = [1 if n >= median else 0 for n in numbers]

    runs = 1

    for i in range(1, len(sequence)):
        if sequence[i] != sequence[i - 1]:
            runs += 1

    n1 = sequence.count(1)
    n2 = sequence.count(0)

    if n1 == 0 or n2 == 0:
        raise ValueError("Runs Test cannot be performed.")

    expected_runs = ((2 * n1 * n2) / (n1 + n2)) + 1

    variance = (
        (2 * n1 * n2 * (2 * n1 * n2 - n1 - n2))
        / (((n1 + n2) ** 2) * (n1 + n2 - 1))
    )

    z = (runs - expected_runs) / (variance ** 0.5)

    p = 2 * (1 - norm.cdf(abs(z)))

    return {
    "runs": int(runs),
    "expected_runs": float(round(expected_runs, 2)),
    "z_score": float(round(z, 4)),
    "p_value": float(round(p, 4)),
    "passed": bool(p > 0.05),
            }
