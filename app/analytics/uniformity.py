from collections import Counter
from typing import Any


def calculate_uniformity(numbers: list[int]) -> dict[str, Any]:
    """
    Calculate a Uniformity Index based on frequency distribution.
    """

    if not numbers:
        raise ValueError("No numbers available.")

    frequency = Counter(numbers)

    counts = list(frequency.values())

    mean = sum(counts) / len(counts)

    variance = sum((c - mean) ** 2 for c in counts) / len(counts)

    score = max(0, 100 - variance)

    if score >= 95:
        classification = "Excellent"
    elif score >= 85:
        classification = "Good"
    elif score >= 70:
        classification = "Moderate"
    else:
        classification = "Poor"

    return {
        "uniformity_score": round(score, 2),
        "variance": round(variance, 4),
        "classification": classification,
    }
