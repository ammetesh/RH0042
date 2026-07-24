import { useEffect, useState } from "react";

import Loader from "@/components/common/Loader";

import PageHeader from "@/components/common/PageHeader";

import IntegrityGauge from "@/components/audit/IntegrityGauge";

import StatisticalTestsTable from "@/components/audit/StatisticalTestsTable";

import QuantumPanel from "@/components/audit/QuantumPanel";

import DriftPanel from "@/components/audit/DriftPanel";

import ExplanationPanel from "@/components/audit/ExplanationPanel";

import { runAudit } from "@/services/auditService";

import { AuditResponse } from "@/types/audit";

export default function AuditPage() {

  const [loading, setLoading] = useState(true);

  const [audit, setAudit] =
    useState<AuditResponse>();

  useEffect(() => {

    async function load() {

      try {

        const datasetId =
          sessionStorage.getItem(
            "datasetId"
          );

        if (!datasetId) return;

        const result =
          await runAudit(datasetId);

        setAudit(result);

      } finally {

        setLoading(false);

      }

    }

    load();

  }, []);

  if (loading)
    return <Loader />;

  if (!audit)
    return (
      <p>
        No audit available.
      </p>
    );

  return (

    <>

      <PageHeader
        title="Audit Results"
        subtitle="Statistical integrity analysis."
      />

      <IntegrityGauge
        score={audit.integrity_score}
      />

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

        <QuantumPanel
          quantum={audit.quantum}
        />

        <DriftPanel
          drift={audit.drift}
        />

      </div>

      <div className="mt-8">

        <StatisticalTestsTable
          tests={audit.statistical_tests}
        />

      </div>

      <div className="mt-8">

        <ExplanationPanel
          text={audit.explanation}
        />

      </div>

    </>

  );

}