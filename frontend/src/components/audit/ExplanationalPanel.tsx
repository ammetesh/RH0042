import Card from "@/components/common/Card";

interface Props {
  text: string;
}

export default function ExplanationPanel({
  text,
}: Props) {

  return (

    <Card>

      <h3 className="mb-5">
        AI Explanation
      </h3>

      <p className="leading-8 text-muted">
        {text}
      </p>

    </Card>

  );
}