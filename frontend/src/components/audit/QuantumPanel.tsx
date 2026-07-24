import Card from "@/components/common/Card";

import { QuantumResult } from "@/types/audit";

interface Props {
  quantum: QuantumResult;
}

export default function QuantumPanel({
  quantum,
}: Props) {

  return (

    <Card>

      <h3 className="mb-6">
        Quantum Analysis
      </h3>

      <div className="space-y-4">

        <p>
          Similarity:
          <strong>
            {" "}
            {quantum.similarity}
          </strong>
        </p>

        <p>
          Fidelity:
          <strong>
            {" "}
            {quantum.fidelity}
          </strong>
        </p>

        <p>
          Entropy:
          <strong>
            {" "}
            {quantum.entropy}
          </strong>
        </p>

        <p>
          Source:
          <strong>
            {" "}
            {quantum.source}
          </strong>
        </p>

      </div>

    </Card>

  );
}