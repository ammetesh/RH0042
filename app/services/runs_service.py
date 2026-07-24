from sqlalchemy.orm import Session

from app.analytics.runs_test import calculate_runs_test
from app.services.draw_service import DrawService


def get_runs_analysis(db: Session):
    draw_service = DrawService(db)

    numbers = draw_service.get_all_numbers()

    if not numbers:
        raise ValueError("No draw data found.")

    return calculate_runs_test(numbers)
