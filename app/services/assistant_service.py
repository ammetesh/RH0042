from sqlalchemy.orm import Session

from app.analytics.assistant import answer_question
from app.services.anomaly_service import get_anomalies
from app.services.audit_engine_service import get_intelligent_audit
from app.services.entropy_service import get_entropy_analysis
from app.services.health_service import get_health_analysis
from app.services.runs_service import get_runs_analysis
from app.services.serial_service import get_serial_correlation
from app.services.trends_service import get_trends
from app.services.uniformity_service import get_uniformity_analysis


def ask_assistant(question: str, db: Session):

    context = {
        "entropy": get_entropy_analysis(db),
        "runs": get_runs_analysis(db),
        "serial": get_serial_correlation(db),
        "uniformity": get_uniformity_analysis(db),
        "health": get_health_analysis(db),
        "audit": get_intelligent_audit(db),
        "anomalies": get_anomalies(db),
        "trends": get_trends(db),
    }

    return answer_question(question, context)
