import Card from "@/components/common/Card";

interface Props {
  score: number;
}

export default function IntegrityGauge({
  score,
}: Props) {

  const color =
    score >= 90
      ? "text-green-400"
      : score >= 75
      ? "text-cyan-400"
      : score >= 50
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <Card>

      <h3 className="mb-6">
        Integrity Score
      </h3>

      <div className="text-center">

        <p
          className={`text-7xl font-bold ${color}`}
        >
          {score}
        </p>

        <p className="text-muted mt-3">
          out of 100
        </p>

      </div>

    </Card>
  );
}