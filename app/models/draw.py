from datetime import date

from sqlalchemy import Date, Integer
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Draw(Base):
    __tablename__ = "draws"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)

    draw_date: Mapped[date] = mapped_column(Date, nullable=False, unique=True)

    ball_1: Mapped[int] = mapped_column(Integer, nullable=False)
    ball_2: Mapped[int] = mapped_column(Integer, nullable=False)
    ball_3: Mapped[int] = mapped_column(Integer, nullable=False)
    ball_4: Mapped[int] = mapped_column(Integer, nullable=False)
    ball_5: Mapped[int] = mapped_column(Integer, nullable=False)
    ball_6: Mapped[int] = mapped_column(Integer, nullable=False)

    bonus_ball: Mapped[int] = mapped_column(Integer, nullable=True)
