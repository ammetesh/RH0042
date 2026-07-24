from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.draw import DrawCreate, DrawResponse
from app.services.draw_service import DrawService


router = APIRouter(
    prefix="/draws",
    tags=["Draws"],
)


@router.post("/", response_model=DrawResponse)
def create_draw(
    draw: DrawCreate,
    db: Session = Depends(get_db)
):
    service = DrawService(db)
    return service.create_draw(draw)


@router.get("/", response_model=list[DrawResponse])
def get_all_draws(
    db: Session = Depends(get_db)
):
    service = DrawService(db)
    return service.get_all_draws()


@router.get("/{draw_id}", response_model=DrawResponse)
def get_draw(
    draw_id: int,
    db: Session = Depends(get_db)
):

    service = DrawService(db)

    draw = service.get_draw(draw_id)

    if draw is None:
        raise HTTPException(
            status_code=404,
            detail="Draw not found"
        )

    return draw


@router.delete("/{draw_id}")
def delete_draw(
    draw_id: int,
    db: Session = Depends(get_db)
):

    service = DrawService(db)

    draw = service.delete_draw(draw_id)

    if draw is None:
        raise HTTPException(
            status_code=404,
            detail="Draw not found"
        )

    return {
        "message": "Draw deleted successfully"
    }
