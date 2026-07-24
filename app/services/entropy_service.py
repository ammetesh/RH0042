from sqlalchemy.orm import Session

from app.analytics.entropy import calculate_entropy
from app.services.draw_service import DrawService


def get_entropy_analysis(db: Session):
    draw_service = DrawService(db)

    numbers = draw_service.get_all_numbers()

    if not numbers:
        raise ValueError("No draw data found.")

    return calculate_entropy(numbers)
