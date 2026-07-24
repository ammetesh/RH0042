import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

interface Props {
  onFileSelected: (file: File) => void;
}

export default function UploadZone({
  onFileSelected,
}: Props) {
  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      multiple: false,

      accept: {
        "text/csv": [".csv"],
        "application/json": [".json"],
        "application/vnd.ms-excel": [".xls"],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
          ".xlsx",
        ],
      },

      onDrop(files) {
        if (files.length > 0) {
          onFileSelected(files[0]);
        }
      },
    });

  return (
    <div
      {...getRootProps()}
      className={`glass rounded-3xl p-12 border-2 border-dashed transition cursor-pointer ${
        isDragActive
          ? "border-primary"
          : "border-border"
      }`}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center gap-5">

        <UploadCloud size={64} />

        <h2 className="text-2xl font-bold">
          Drag & Drop Dataset
        </h2>

        <p className="text-muted">
          CSV • XLS • XLSX • JSON
        </p>

      </div>
    </div>
  );
}