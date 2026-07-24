import { UploadResponse } from "@/types/upload";

interface Props {
  data: UploadResponse;
}

export default function DatasetPreview({
  data,
}: Props) {
  if (data.preview.length === 0)
    return null;

  const columns = Object.keys(data.preview[0]);

  return (
    <div className="glass rounded-2xl overflow-auto mt-8">

      <table className="w-full">

        <thead>

          <tr>

            {columns.map((column) => (
              <th
                key={column}
                className="text-left p-4 border-b"
              >
                {column}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {data.preview.map((row, index) => (
            <tr key={index}>

              {columns.map((column) => (
                <td
                  key={column}
                  className="p-4 border-b"
                >
                  {String(row[column])}
                </td>
              ))}

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}