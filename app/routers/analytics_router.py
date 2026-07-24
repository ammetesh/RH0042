from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.analytics import calculate_frequency, chi_square_test
from app.analytics.hot_cold import hot_cold_numbers
from app.analytics.odd_even import odd_even_analysis
from app.analytics.sum_distribution import sum_distribution
from app.analytics.randomness_score import randomness_score
from app.analytics.audit import generate_audit
from app.analytics.dashboard import dashboard_summary
from app.analytics.quantum_explore import quantum_explore
from app.db.session import get_db
from app.services.draw_service import DrawService

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


@router.get("/frequency")
def frequency_analysis(db: Session = Depends(get_db)):
    service = DrawService(db)

    draws = service.get_all_draws()

    return {
        "total_draws": len(draws),
        "frequency": calculate_frequency(draws),
    }


@router.get("/chi-square")
def chi_square_analysis(db: Session = Depends(get_db)):
    service = DrawService(db)

    draws = service.get_all_draws()

    return chi_square_test(draws)

@router.get("/hot-cold")
def hot_cold_analysis(db: Session = Depends(get_db)):
    service = DrawService(db)

    draws = service.get_all_draws()

    return hot_cold_numbers(draws)


@router.get("/odd-even")
def odd_even(db: Session = Depends(get_db)):
    service = DrawService(db)

    draws = service.get_all_draws()

    return odd_even_analysis(draws)


@router.get("/sum-distribution")
def sum_distribution_analysis(db: Session = Depends(get_db)):
    service = DrawService(db)

    draws = service.get_all_draws()

    return sum_distribution(draws)


@router.get("/randomness-score")
def randomness_score_analysis(db: Session = Depends(get_db)):
    service = DrawService(db)

    draws = service.get_all_draws()

    return randomness_score(draws)


@router.get("/audit")
def audit_report(db: Session = Depends(get_db)):
    service = DrawService(db)

    draws = service.get_all_draws()

    return generate_audit(draws)


@router.get("/dashboard/summary")
def dashboard(db: Session = Depends(get_db)):
    service = DrawService(db)

    draws = service.get_all_draws()

    return dashboard_summary(draws)


@router.post("/quantum/explore")
def explore_quantum(db: Session = Depends(get_db)):
    service = DrawService(db)

    draws = service.get_all_draws()

    return quantum_explore(draws)

