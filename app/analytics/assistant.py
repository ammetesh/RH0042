from typing import Any


def answer_question(question: str, context: dict[str, Any]) -> dict[str, Any]:

    q = question.lower()

    entropy = context["entropy"]
    runs = context["runs"]
    serial = context["serial"]
    uniformity = context["uniformity"]
    health = context["health"]
    audit = context["audit"]
    anomalies = context["anomalies"]
    trends = context["trends"]

    if "entropy" in q:

        answer = (
            f"Shannon Entropy is {entropy['entropy_percentage']}%. "
            f"It is classified as {entropy['classification']}. "
            f"{entropy['interpretation']}"
        )

    elif "runs" in q:

        answer = (
            f"The Runs Test {'passed' if runs['passed'] else 'failed'}. "
            f"Z-score = {runs['z_score']}. "
            f"P-value = {runs['p_value']}."
        )

    elif "serial" in q:

        answer = (
            f"The serial correlation coefficient is "
            f"{serial['serial_correlation']}. "
            f"{serial['interpretation']}"
        )

    elif "uniformity" in q:

        answer = (
            f"The Uniformity Score is "
            f"{uniformity['uniformity_score']} "
            f"({uniformity['classification']})."
        )

    elif "health" in q:

        answer = (
            f"The Statistical Health Score is "
            f"{health['health_score']} "
            f"with grade {health['grade']}."
        )

    elif "audit" in q:

        answer = audit["summary"]

    elif "anomal" in q:

        answer = (
            f"The system detected "
            f"{anomalies['anomalies_found']} anomalous draws."
        )

    elif "trend" in q:

        answer = (
            f"The dataset contains "
            f"{trends['total_draws']} historical draws."
        )

    elif "random" in q:

        answer = (
            f"The audit grade is "
            f"{audit['overall_grade']} "
            f"with {audit['risk_level']} risk."
        )

    else:

        answer = (
            "I can explain entropy, runs test, serial correlation, "
            "uniformity, health score, audit report, anomalies, "
            "historical trends and overall randomness."
        )

    return {
        "question": question,
        "answer": answer,
    }
