import Card from "@/components/common/Card";

import { DriftResult } from "@/types/audit";

interface Props {
  drift: DriftResult;
}

export default function DriftPanel({
  drift,
}: Props) {

  return (

    <Card>

      <h3 className="mb-5">
        Drift Detection
      </h3>

      <p>

        Drift Level:
        <strong>
          {" "}
          {drift.level}
        </strong>

      </p>

      <p className="mt-3">

        CUSUM Peak:
        <strong>
          {" "}
          {drift.cusum_peak}
        </strong>

      </p>

      <p className="mt-3">

        Change Points:
        <strong>
          {" "}
          {drift.change_points.join(", ") || "None"}
        </strong>

      </p>

    </Card>

  );
}