import random
from app.analytics.frequency import calculate_frequency

def quantum_explore(draws, count=5):
    frequencies = calculate_frequency(draws)

    numbers = list(frequencies.keys())
    weights = [max(frequencies[n], 1) for n in numbers]

    suggestions = []

    for _ in range(count):
        selected = random.choices(numbers, weights=weights, k=6)
        selected = sorted(set(selected))

        while len(selected) < 6:
            n = random.choices(numbers, weights=weights, k=1)[0]
            if n not in selected:
                selected.append(n)

        suggestions.append(sorted(selected))

    return {
        "message": "Quantum-inspired exploratory candidates (not predictions).",
        "candidates": suggestions
<<<<<<< HEAD
    }
=======
    }
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
