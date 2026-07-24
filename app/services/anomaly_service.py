from sqlalchemy.orm import Session

from app.analytics.anomaly import detect_anomalies
from app.services.draw_service import DrawService


def get_anomalies(db: Session):
    draw_service = DrawService(db)

    draws = draw_service.get_all_draws()

    if not draws:
        raise ValueError("No draw data found.")

    return detect_anomalies(draws)
