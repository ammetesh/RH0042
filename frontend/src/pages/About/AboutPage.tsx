import PageHeader from "@/components/common/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About QSIE"
        subtitle="Quantum Statistical Integrity Engine"
      />

      <div className="glass rounded-2xl p-8">
        <p className="text-lg leading-8 text-muted">
          QSIE is a research-oriented platform that evaluates
          the statistical integrity of numerical datasets
          through classical statistical methods, entropy,
          drift detection, and quantum-inspired analysis.

          It is designed for auditing integrity—not predicting
          future outcomes.
        </p>
      </div>
    </>
  );
}