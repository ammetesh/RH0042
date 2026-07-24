import Card from "@/components/common/Card";
import PageHeader from "@/components/common/PageHeader";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Monitor datasets, audit history, and integrity scores."
      />

      <div className="grid lg:grid-cols-4 gap-6">

        <Card>
          <h3 className="text-muted">Datasets</h3>
          <p className="text-4xl font-bold mt-4">0</p>
        </Card>

        <Card>
          <h3 className="text-muted">Audits</h3>
          <p className="text-4xl font-bold mt-4">0</p>
        </Card>

        <Card>
          <h3 className="text-muted">Average Score</h3>
          <p className="text-4xl font-bold mt-4">--</p>
        </Card>

        <Card>
          <h3 className="text-muted">Reports</h3>
          <p className="text-4xl font-bold mt-4">0</p>
        </Card>

      </div>

      <div className="mt-10">
        <Card>
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to QSIE
          </h2>

          <p className="text-muted">
            Upload a dataset to begin statistical integrity
            analysis using your FastAPI backend.
          </p>
        </Card>
      </div>
    </>
  );
}