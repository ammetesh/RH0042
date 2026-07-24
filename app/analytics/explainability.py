from typing import Any


def explain_metric(metric: str, value: Any) -> dict[str, Any]:

    explanations = {
        "entropy": {
            "title": "Shannon Entropy",
            "meaning": "Measures the uncertainty and unpredictability of historical lottery numbers.",
            "why": "Higher entropy indicates a more evenly distributed and unpredictable dataset.",
            "risk": "Low entropy may indicate repetitive patterns or potential bias.",
        },

        "runs": {
            "title": "Runs Test",
            "meaning": "Checks whether the sequence of values behaves randomly.",
            "why": "Random sequences should naturally alternate above and below the median.",
            "risk": "Too many or too few runs can indicate sequential bias.",
        },

        "serial": {
            "title": "Serial Correlation",
            "meaning": "Measures dependence between consecutive lottery numbers.",
            "why": "Random datasets should have correlation close to zero.",
            "risk": "High correlation suggests predictable sequences.",
        },

        "uniformity": {
            "title": "Uniformity Index",
            "meaning": "Measures how evenly numbers are distributed.",
            "why": "Each lottery number should appear with similar frequency over time.",
            "risk": "Uneven distributions may indicate imbalance.",
        },

        "randomness": {
            "title": "Randomness Score",
            "meaning": "Overall statistical randomness score.",
            "why": "Combines multiple statistical characteristics into one score.",
            "risk": "Lower values indicate weaker randomness quality.",
        },

        "health": {
            "title": "Statistical Health Index",
            "meaning": "Overall health of the lottery dataset.",
            "why": "Combines entropy, runs, serial correlation, uniformity and randomness.",
            "risk": "Low health score suggests several statistical weaknesses.",
        },
    }

    if metric not in explanations:
        raise ValueError(f"Unknown metric: {metric}")

    info = explanations[metric]

    recommendation = (
        "Current value indicates excellent statistical quality."
        if isinstance(value, (int, float)) and value >= 85
        else "Further monitoring is recommended."
    )

    return {
        "metric": metric,
        "title": info["title"],
        "value": value,
        "meaning": info["meaning"],
        "why_it_matters": info["why"],
        "risk_if_low": info["risk"],
        "recommendation": recommendation,
    }
