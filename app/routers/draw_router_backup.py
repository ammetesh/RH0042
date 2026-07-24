import io

import pandas as pd
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.draw import DrawCreate, DrawResponse
from app.services.draw_service import DrawService


router = APIRouter(
    prefix="/draws",
    tags=["Draws"],
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

    dataframe = pd.read_csv(
        io.BytesIO(contents)
    )


    if dataframe.empty:
        raise HTTPException(
            status_code=400,
            detail="CSV contains no data."
        )


    numeric_columns = dataframe.select_dtypes(
        include="number"
    ).columns


    if len(numeric_columns) == 0:
        raise HTTPException(
            status_code=400,
            detail="No numeric columns found."
        )


    numbers = []

    for column in numeric_columns:

        numbers.extend(
            dataframe[column]
            .dropna()
            .astype(int)
            .tolist()
        )


    return {
        "message": "CSV analysed successfully",
        "rows": len(dataframe),
        "numeric_columns": list(numeric_columns),
        "numbers_extracted": len(numbers),
    }
