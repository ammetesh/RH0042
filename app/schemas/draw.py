from datetime import date

from pydantic import BaseModel, Field


class DrawBase(BaseModel):
    draw_date: date

    ball_1: int = Field(..., ge=1)
    ball_2: int = Field(..., ge=1)
    ball_3: int = Field(..., ge=1)
    ball_4: int = Field(..., ge=1)
    ball_5: int = Field(..., ge=1)
    ball_6: int = Field(..., ge=1)

    bonus_ball: int | None = None


class DrawCreate(DrawBase):
    pass


class DrawResponse(DrawBase):
    id: int

    model_config = {
        "from_attributes": True
    }
