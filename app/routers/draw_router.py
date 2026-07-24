<<<<<<< HEAD
﻿from fastapi import APIRouter, Depends, HTTPException
=======
import io

import pandas as pd
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.draw import DrawCreate, DrawResponse
from app.services.draw_service import DrawService

<<<<<<< HEAD

=======
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
router = APIRouter(
    prefix="/draws",
    tags=["Draws"],
)


@router.post("/", response_model=DrawResponse)
<<<<<<< HEAD
def create_draw(
    draw: DrawCreate,
    db: Session = Depends(get_db)
):
=======
def create_draw(draw: DrawCreate, db: Session = Depends(get_db)):
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
    service = DrawService(db)
    return service.create_draw(draw)


<<<<<<< HEAD
@router.get("/", response_model=list[DrawResponse])
def get_all_draws(
    db: Session = Depends(get_db)
):
=======
@router.post("/upload")
async def upload_draws(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    if not file.filename.endswith(".csv"):
        raise HTTPException(
            status_code=400,
            detail="Only CSV files are allowed."
        )

    contents = await file.read()

    dataframe = pd.read_csv(io.BytesIO(contents))

    draws = []

    for _, row in dataframe.iterrows():
        draws.append(
            DrawCreate(
                draw_date=row["draw_date"],
                ball_1=row["ball_1"],
                ball_2=row["ball_2"],
                ball_3=row["ball_3"],
                ball_4=row["ball_4"],
                ball_5=row["ball_5"],
                ball_6=row["ball_6"],
                bonus_ball=row.get("bonus_ball"),
            )
        )

    service = DrawService(db)
    service.upload_draws(draws)

    return {
        "message": "CSV imported successfully",
        "records": len(draws),
    }


@router.get("/", response_model=list[DrawResponse])
def get_all_draws(db: Session = Depends(get_db)):
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
    service = DrawService(db)
    return service.get_all_draws()


@router.get("/{draw_id}", response_model=DrawResponse)
<<<<<<< HEAD
def get_draw(
    draw_id: int,
    db: Session = Depends(get_db)
):

=======
def get_draw(draw_id: int, db: Session = Depends(get_db)):
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
    service = DrawService(db)

    draw = service.get_draw(draw_id)

    if draw is None:
<<<<<<< HEAD
        raise HTTPException(
            status_code=404,
            detail="Draw not found"
        )
=======
        raise HTTPException(status_code=404, detail="Draw not found")
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0

    return draw


@router.delete("/{draw_id}")
<<<<<<< HEAD
def delete_draw(
    draw_id: int,
    db: Session = Depends(get_db)
):

=======
def delete_draw(draw_id: int, db: Session = Depends(get_db)):
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
    service = DrawService(db)

    draw = service.delete_draw(draw_id)

    if draw is None:
<<<<<<< HEAD
        raise HTTPException(
            status_code=404,
            detail="Draw not found"
        )

    return {
        "message": "Draw deleted successfully"
    }
=======
        raise HTTPException(status_code=404, detail="Draw not found")

    return {"message": "Draw deleted successfully"}
>>>>>>> 4222929421436f73d6267f7ff43ec8728a6ffbd0
