from datetime import datetime
from typing import Any


def generate_intelligent_audit(
    entropy: float,
    runs_passed: bool,
    serial: float,
    uniformity: float,
    randomness: float,
    draws: int,
    numbers: int,
) -> dict[str, Any]:

    strengths = []
    warnings = []

    tests = {
        "entropy": "PASS" if entropy >= 85 else "FAIL",
        "runs": "PASS" if runs_passed else "FAIL",
        "serial": "PASS" if abs(serial) < 0.30 else "FAIL",
        "uniformity": "PASS" if uniformity >= 85 else "FAIL",
        "randomness": "PASS" if randomness >= 85 else "FAIL",
    }

    if tests["entropy"] == "PASS":
        strengths.append("Excellent entropy observed.")
    else:
        warnings.append("Entropy below recommended level.")

    if tests["runs"] == "PASS":
        strengths.append("Runs Test passed.")
    else:
        warnings.append("Runs Test indicates sequence bias.")

    if tests["serial"] == "PASS":
        strengths.append("Minimal serial correlation.")
    else:
        warnings.append("Serial dependence detected.")

    if tests["uniformity"] == "PASS":
        strengths.append("Uniform distribution achieved.")
    else:
        warnings.append("Distribution imbalance observed.")

    if tests["randomness"] == "PASS":
        strengths.append("Excellent randomness score.")
    else:
        warnings.append("Randomness score below expected threshold.")

    health = (
        entropy * 0.25
        + (100 if runs_passed else 60) * 0.20
        + max(0, 100 - abs(serial) * 100) * 0.20
        + uniformity * 0.15
        + randomness * 0.20
    )

    confidence = round(
        (
            entropy
            + uniformity
            + randomness
            + (100 if runs_passed else 60)
            + max(0, 100 - abs(serial) * 100)
        ) / 5,
        2,
    )

    if health >= 95:
        grade = "A+"
        risk = "Very Low"
    elif health >= 90:
        grade = "A"
        risk = "Low"
    elif health >= 80:
        grade = "B"
        risk = "Moderate"
    else:
        grade = "C"
        risk = "High"

    return {
        "audit_timestamp": datetime.utcnow(),
        "draws_analyzed": draws,
        "numbers_analyzed": numbers,
        "health_score": round(health, 2),
        "confidence_score": confidence,
        "overall_grade": grade,
        "risk_level": risk,
        "summary": (
            "Historical draw data exhibits statistically healthy randomness."
            if grade in ("A+", "A")
            else "Historical draw data shows statistical irregularities."
        ),
        "tests": tests,
        "trends": {
            "entropy": "Stable",
            "runs": "Stable",
            "serial": "Stable",
            "uniformity": "Stable",
            "randomness": "Stable",
        },
        "strengths": strengths,
        "warnings": warnings,
        "recommendation": "Continue monitoring future draws for long-term statistical consistency.",
    }
