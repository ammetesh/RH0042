from typing import Any

import numpy as np


def calculate_serial_correlation(numbers: list[int]) -> dict[str, Any]:
    """
    Calculate serial correlation coefficient.
    """

    if len(numbers) < 2:
        raise ValueError("Not enough data for Serial Correlation.")

    x = np.array(numbers[:-1])
    y = np.array(numbers[1:])

    correlation = np.corrcoef(x, y)[0, 1]

    abs_corr = abs(correlation)

    if abs_corr < 0.10:
        classification = "Excellent"
        interpretation = "Very low serial dependence detected."

    elif abs_corr < 0.30:
        classification = "Good"
        interpretation = "Minor sequential dependence detected."

    elif abs_corr < 0.50:
        classification = "Moderate"
        interpretation = "Noticeable sequential dependence detected."

    else:
        classification = "Poor"
        interpretation = "Strong sequential dependence detected."

    return {
        "serial_correlation": round(float(correlation), 4),
        "classification": classification,
        "interpretation": interpretation,
    }
