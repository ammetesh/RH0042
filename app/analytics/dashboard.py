from app.analytics.randomness_score import randomness_score
from app.analytics.hot_cold import hot_cold_numbers
from app.analytics.odd_even import odd_even_analysis

def dashboard_summary(draws):
    random = randomness_score(draws)
    hotcold = hot_cold_numbers(draws)
    oddeven = odd_even_analysis(draws)

    return {
        "randomness_score": random["randomness_score"],
        "status": random["status"],
        "hot_numbers": hotcold["hot_numbers"][:5],
        "cold_numbers": hotcold["cold_numbers"][:5],
        "odd_even": {
            "odd": oddeven["odd"],
            "even": oddeven["even"]
        },
        "total_draws": len(draws)
<<<<<<< HEAD
    }
=======
    }
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
