from sqlalchemy.orm import Session

from app.services.draw_service import DrawService
from app.services.entropy_service import get_entropy_analysis
from app.services.runs_service import get_runs_analysis
from app.services.serial_service import get_serial_correlation
from app.services.uniformity_service import get_uniformity_analysis
from app.services.health_service import get_health_analysis
from app.services.audit_engine_service import get_intelligent_audit


def get_executive_dashboard(db: Session):

    draw_service = DrawService(db)

    draws = draw_service.get_all_draws()

    return {
        "dataset": {
            "draws": len(draws),
            "numbers": len(draw_service.get_all_numbers()),
        },
        "health": get_health_analysis(db),
        "entropy": get_entropy_analysis(db),
        "runs": get_runs_analysis(db),
        "serial": get_serial_correlation(db),
        "uniformity": get_uniformity_analysis(db),
        "audit": get_intelligent_audit(db),
    }
