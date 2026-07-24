from app.analytics.chi_square import chi_square_test
from app.analytics.frequency import calculate_frequency
from app.analytics.hot_cold import hot_cold_numbers
from app.analytics.odd_even import odd_even_analysis
from app.analytics.randomness_score import randomness_score
from app.analytics.sum_distribution import sum_distribution

def generate_audit(draws):
    return {
        "randomness": randomness_score(draws),
        "chi_square": chi_square_test(draws),
        "odd_even": odd_even_analysis(draws),
        "hot_cold": hot_cold_numbers(draws),
        "sum_distribution": sum_distribution(draws),
        "frequency": calculate_frequency(draws)
<<<<<<< HEAD
    }
=======
    }
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
