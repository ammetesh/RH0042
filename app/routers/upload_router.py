from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.services.csv_import_service import import_csv

router = APIRouter(

    prefix="/draws",

    tags=["Draw Upload"]

)


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

    return import_csv(contents, db)
