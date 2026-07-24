from sqlalchemy.orm import Session

from app.models.draw import Draw
from app.schemas.draw import DrawCreate


class DrawRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, draw: DrawCreate) -> Draw:
        db_draw = Draw(**draw.model_dump())

        self.db.add(db_draw)
        self.db.commit()
        self.db.refresh(db_draw)

        return db_draw

    def create_many(self, draws: list[DrawCreate]):
        # Replace existing dataset
        self.db.query(Draw).delete()

        db_draws = [Draw(**draw.model_dump()) for draw in draws]

        self.db.add_all(db_draws)
        self.db.commit()

        return db_draws

    def get_all(self):
        return self.db.query(Draw).order_by(Draw.draw_date).all()

    def get_by_id(self, draw_id: int):
        return self.db.query(Draw).filter(Draw.id == draw_id).first()

    def delete(self, draw_id: int):
        draw = self.get_by_id(draw_id)

        if draw:
            self.db.delete(draw)
            self.db.commit()

        return draw
