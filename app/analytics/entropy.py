from collections import Counter
from math import log2
from typing import Any


def calculate_entropy(numbers: list[int]) -> dict[str, Any]:
    """
    Calculate Shannon Entropy for a list of numbers.
    """

    if not numbers:
        raise ValueError("No numbers available for entropy calculation.")

    total = len(numbers)
    frequency = Counter(numbers)

    probabilities = [count / total for count in frequency.values()]

    entropy = -sum(p * log2(p) for p in probabilities)

    max_entropy = log2(len(frequency)) if len(frequency) > 1 else 0

    entropy_percentage = (
        (entropy / max_entropy) * 100 if max_entropy > 0 else 0
    )

    if entropy_percentage >= 95:
        classification = "Excellent"
        interpretation = "Dataset exhibits a very high level of unpredictability."

    elif entropy_percentage >= 85:
        classification = "Good"
        interpretation = "Dataset appears statistically random with minor variations."

    elif entropy_percentage >= 70:
        classification = "Moderate"
        interpretation = "Dataset shows some detectable patterns."

    elif entropy_percentage >= 50:
        classification = "Weak"
        interpretation = "Dataset has noticeable statistical bias."

    else:
        classification = "Poor"
        interpretation = "Dataset lacks sufficient randomness."

    return {
        "entropy": round(entropy, 4),
        "maximum_entropy": round(max_entropy, 4),
        "entropy_percentage": round(entropy_percentage, 2),
        "classification": classification,
        "interpretation": interpretation,
    }
