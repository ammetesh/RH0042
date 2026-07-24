from sqlalchemy.orm import Session

from app.analytics.health import calculate_health_index
from app.analytics.randomness_score import randomness_score
from app.services.draw_service import DrawService
from app.services.entropy_service import get_entropy_analysis
from app.services.runs_service import get_runs_analysis
from app.services.serial_service import get_serial_correlation
from app.services.uniformity_service import get_uniformity_analysis


def get_health_analysis(db: Session):
    draw_service = DrawService(db)

    draws = draw_service.get_all_draws()

    if not draws:
        raise ValueError("No draw data found.")

    entropy = get_entropy_analysis(db)
    runs = get_runs_analysis(db)
    serial = get_serial_correlation(db)
    uniformity = get_uniformity_analysis(db)
    randomness = randomness_score(draws)

    return calculate_health_index(
        entropy["entropy_percentage"],
        runs["passed"],
        serial["serial_correlation"],
        uniformity["uniformity_score"],
        randomness["randomness_score"],
    )
