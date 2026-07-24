from sqlalchemy.orm import Session

from app.analytics.trends import calculate_trends
from app.services.draw_service import DrawService


def get_trends(db: Session):

    draw_service = DrawService(db)

    draws = draw_service.get_all_draws()

    if not draws:
        raise ValueError("No draw data found.")

    return calculate_trends(draws)
