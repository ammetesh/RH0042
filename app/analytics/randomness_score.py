from app.analytics.chi_square import chi_square_test
from app.analytics.frequency import calculate_frequency
from app.models.draw import Draw

def randomness_score(draws: list[Draw]):
    chi = chi_square_test(draws)
    frequencies = calculate_frequency(draws)

    unique_numbers = sum(1 for f in frequencies.values() if f > 0)

    score = 70

    if chi["p_value"] > 0.05:
        score += 15

    score += min(unique_numbers // 2, 15)
    score = min(score, 100)

    if score >= 90:
        status = "Excellent"
    elif score >= 75:
        status = "Good"
    elif score >= 60:
        status = "Fair"
    else:
        status = "Poor"

    return {
        "randomness_score": score,
        "status": status,
        "chi_square_p_value": round(chi["p_value"], 4),
        "unique_numbers_drawn": unique_numbers
    }
