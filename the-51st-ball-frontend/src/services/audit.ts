export interface AuditResponse {

    audit_timestamp: string;

    draws_analyzed: number;

    numbers_analyzed: number;

    health_score: number;

    confidence_score: number;

    overall_grade: string;

    risk_level: string;

    summary: string;

    tests: {

        entropy: string;

        runs: string;

        serial: string;

        uniformity: string;

        randomness: string;

    };

    trends: {

        entropy: string;

        runs: string;

        serial: string;

        uniformity: string;

        randomness: string;

    };

    strengths: string[];

    warnings: string[];

    recommendation: string;

}

export async function runAudit(): Promise<AuditResponse> {

    const response = await fetch(
        "http://127.0.0.1:8000/analytics/intelligent-audit",
        {
            method: "GET",
        }
    );

    if (!response.ok) {

        throw new Error("Audit request failed.");

    }

    return response.json();

}
