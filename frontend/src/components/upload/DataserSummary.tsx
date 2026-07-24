import Card from "@/components/common/Card";
import { UploadResponse } from "@/types/upload";

interface Props {
  data: UploadResponse;
}

export default function DatasetSummary({
  data,
}: Props) {
  return (
    <div className="grid md:grid-cols-5 gap-5">

      <Card>
        <h3>Rows</h3>
        <p className="text-3xl font-bold">{data.rows}</p>
      </Card>

      <Card>
        <h3>Columns</h3>
        <p className="text-3xl font-bold">{data.columns}</p>
      </Card>

      <Card>
        <h3>Numeric</h3>
        <p className="text-3xl font-bold">
          {data.numeric_columns}
        </p>
      </Card>

      <Card>
        <h3>Type</h3>
        <p className="text-xl">{data.dataset_type}</p>
      </Card>

      <Card>
        <h3>ID</h3>
        <p className="text-sm break-all">
          {data.dataset_id}
        </p>
      </Card>

    </div>
  );
}