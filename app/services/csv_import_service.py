import csv
import io
from datetime import datetime

from sqlalchemy.orm import Session

from app.models.draw import Draw


def import_csv(file_bytes: bytes, db: Session):

    text = file_bytes.decode("utf-8")

    reader = csv.DictReader(io.StringIO(text))

    inserted = 0
    skipped = 0

    for row in reader:

        draw_date = datetime.strptime(
            row["draw_date"],
            "%Y-%m-%d"
        ).date()

        exists = db.query(Draw).filter(
            Draw.draw_date == draw_date
        ).first()

        if exists:

            skipped += 1
            continue

        draw = Draw(

            draw_date=draw_date,

            ball_1=int(row["ball_1"]),
            ball_2=int(row["ball_2"]),
            ball_3=int(row["ball_3"]),
            ball_4=int(row["ball_4"]),
            ball_5=int(row["ball_5"]),
            ball_6=int(row["ball_6"]),

            bonus_ball=(
                int(row["bonus_ball"])
                if row.get("bonus_ball")
                else None
            )

        )

        db.add(draw)

        inserted += 1

    db.commit()

    return {

        "inserted": inserted,

        "skipped": skipped,

        "message": "CSV imported successfully."

    }
