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
