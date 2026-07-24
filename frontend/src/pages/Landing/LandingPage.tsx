import { Link } from "react-router-dom";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-6xl font-extrabold gradient-text mb-8">
          Quantum Statistical Integrity Engine
        </h1>

        <p className="text-xl text-muted max-w-3xl mx-auto mb-12">
          Audit statistical integrity using classical statistics,
          quantum feature embedding, entropy analysis,
          and drift detection.
        </p>

        <div className="flex justify-center gap-5">
          <Link to="/dashboard">
            <Button>
              Launch Dashboard
            </Button>
          </Link>

          <Link to="/about">
            <Button variant="outline">
              Learn More
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">

          <Card>
            <h2 className="text-xl font-semibold mb-3">
              Statistical Tests
            </h2>

            <p className="text-muted">
              Chi-Square, Runs Test, KS Test,
              entropy analysis and more.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-3">
              Quantum Analysis
            </h2>

            <p className="text-muted">
              Qiskit simulation with quantum similarity
              and fidelity scoring.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-3">
              Drift Detection
            </h2>

            <p className="text-muted">
              Detect statistical distribution changes
              using CUSUM and PELT algorithms.
            </p>
          </Card>

        </div>

      </div>

    </div>
  );
}