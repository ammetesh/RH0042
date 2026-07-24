from sqlalchemy.orm import Session

from app.analytics.explainability import explain_metric
from app.services.entropy_service import get_entropy_analysis
from app.services.health_service import get_health_analysis
from app.services.runs_service import get_runs_analysis
from app.services.serial_service import get_serial_correlation
from app.services.uniformity_service import get_uniformity_analysis
from app.analytics.randomness_score import randomness_score
from app.services.draw_service import DrawService


def get_metric_explanation(metric: str, db: Session):

    if metric == "entropy":
        value = get_entropy_analysis(db)["entropy_percentage"]

    elif metric == "runs":
        value = 100 if get_runs_analysis(db)["passed"] else 60

    elif metric == "serial":
        serial = get_serial_correlation(db)["serial_correlation"]
        value = max(0, 100 - abs(serial) * 100)

    elif metric == "uniformity":
        value = get_uniformity_analysis(db)["uniformity_score"]

    elif metric == "health":
        value = get_health_analysis(db)["health_score"]

    elif metric == "randomness":
        draw_service = DrawService(db)
        draws = draw_service.get_all_draws()
        value = randomness_score(draws)["randomness_score"]

    else:
        raise ValueError("Unknown metric.")

    return explain_metric(metric, value)
