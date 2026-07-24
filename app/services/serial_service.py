from sqlalchemy.orm import Session

from app.analytics.serial_correlation import calculate_serial_correlation
from app.services.draw_service import DrawService


def get_serial_correlation(db: Session):
    draw_service = DrawService(db)

    numbers = draw_service.get_all_numbers()

    if not numbers:
        raise ValueError("No draw data found.")

    return calculate_serial_correlation(numbers)
