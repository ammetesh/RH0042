from sqlalchemy.orm import Session

from app.repositories.draw_repository import DrawRepository
from app.schemas.draw import DrawCreate


class DrawService:
    def __init__(self, db: Session):
        self.repository = DrawRepository(db)

    def create_draw(self, draw: DrawCreate):
        return self.repository.create(draw)

    def upload_draws(self, draws: list[DrawCreate]):
        return self.repository.create_many(draws)

    def get_all_draws(self):
        return self.repository.get_all()

    def get_draw(self, draw_id: int):
        return self.repository.get_by_id(draw_id)

    def delete_draw(self, draw_id: int):
        return self.repository.delete(draw_id)

    def get_all_numbers(self) -> list[int]:
        """
        Return every lottery number from all draws,
        including bonus balls where available.
        """
        draws = self.get_all_draws()

        numbers = []

        for draw in draws:
            numbers.extend([
                draw.ball_1,
                draw.ball_2,
                draw.ball_3,
                draw.ball_4,
                draw.ball_5,
                draw.ball_6,
            ])

            if draw.bonus_ball is not None:
                numbers.append(draw.bonus_ball)

        return numbers
