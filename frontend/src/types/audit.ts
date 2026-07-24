export interface StatisticalTest {
  name: string;
  statistic: number;
  p_value: number;
  passed: boolean;
}

export interface QuantumResult {
  similarity: number;
  fidelity: number;
  entropy: number;
  qubits: number;
  source: string;
}

export interface DriftResult {
  level: string;
  change_points: number[];
  cusum_peak: number;
}

export interface AuditResponse {
  audit_id: string;
  dataset_id: string;
  integrity_score: number;
  confidence: number;

  statistical_tests: StatisticalTest[];

  quantum: QuantumResult;

  drift: DriftResult;

  explanation: string;
}