from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db

from app.services.entropy_service import get_entropy_analysis
from app.services.runs_service import get_runs_analysis
from app.services.serial_service import get_serial_correlation
from app.services.uniformity_service import get_uniformity_analysis
from app.services.health_service import get_health_analysis
from app.services.audit_engine_service import get_intelligent_audit
from app.services.executive_dashboard_service import get_executive_dashboard
from app.services.trends_service import get_trends

from app.schemas.entropy import EntropyResponse
from app.schemas.runs import RunsResponse
from app.schemas.serial import SerialCorrelationResponse
from app.schemas.uniformity import UniformityResponse
from app.schemas.health import HealthResponse
from app.schemas.audit_engine import AuditEngineResponse
from app.schemas.trends import TrendsResponse

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


@router.get(
    "/entropy",
    response_model=EntropyResponse,
    summary="Entropy Analysis",
)
def entropy_analysis(db: Session = Depends(get_db)):
    return get_entropy_analysis(db)


@router.get(
    "/runs-test",
    response_model=RunsResponse,
    summary="Runs Test",
)
def runs_test(db: Session = Depends(get_db)):
    return get_runs_analysis(db)


@router.get(
    "/serial-correlation",
    response_model=SerialCorrelationResponse,
    summary="Serial Correlation",
)
def serial_correlation(db: Session = Depends(get_db)):
    return get_serial_correlation(db)


@router.get(
    "/uniformity",
    response_model=UniformityResponse,
    summary="Uniformity Analysis",
)
def uniformity(db: Session = Depends(get_db)):
    return get_uniformity_analysis(db)


@router.get(
    "/health-index",
    response_model=HealthResponse,
    summary="Health Index",
)
def health_index(db: Session = Depends(get_db)):
    return get_health_analysis(db)


@router.get(
    "/intelligent-audit",
    response_model=AuditEngineResponse,
    summary="Intelligent Audit",
)
def intelligent_audit(db: Session = Depends(get_db)):
    return get_intelligent_audit(db)


@router.get(
    "/trends",
    response_model=TrendsResponse,
    summary="Historical Trends",
)
def trends(db: Session = Depends(get_db)):
    return get_trends(db)


# Temporarily no response_model until serialization issue is fixed.
@router.get(
    "/executive-dashboard",
    summary="Executive Dashboard",
)
def executive_dashboard(db: Session = Depends(get_db)):
    return get_executive_dashboard(db)