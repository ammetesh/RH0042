from typing import Any


def calculate_health_index(
    entropy: float,
    runs_passed: bool,
    serial: float,
    uniformity: float,
    randomness: float,
) -> dict[str, Any]:

    entropy_score = entropy

    runs_score = 100 if runs_passed else 60

    serial_score = max(0, 100 - abs(serial) * 100)

    total = (
        entropy_score * 0.25
        + runs_score * 0.20
        + serial_score * 0.20
        + uniformity * 0.15
        + randomness * 0.20
    )

    if total >= 95:
        grade = "A+"

    elif total >= 90:
        grade = "A"

    elif total >= 80:
        grade = "B"

    elif total >= 70:
        grade = "C"

    else:
        grade = "D"

    return {
        "health_score": round(total, 2),
        "grade": grade,
    }
