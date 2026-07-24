import { useState } from "react";
import { toast } from "sonner";

import Loader from "@/components/common/Loader";
import PageHeader from "@/components/common/PageHeader";

import UploadZone from "@/components/upload/UploadZone";
import DatasetSummary from "@/components/upload/DatasetSummary";
import DatasetPreview from "@/components/upload/DatasetPreview";

import { uploadDataset } from "@/services/uploadService";
import { UploadResponse } from "@/types/upload";

export default function UploadPage() {
  const [loading, setLoading] =
    useState(false);

  const [dataset, setDataset] =
    useState<UploadResponse>();

  async function handleUpload(file: File) {
    try {
      setLoading(true);

      const response =
        await uploadDataset(file);

      setDataset(response);

      toast.success("Dataset uploaded successfully.");
    } catch {
      toast.error("Upload failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader
        title="Upload Dataset"
        subtitle="Upload a dataset for integrity auditing."
      />

      <UploadZone
        onFileSelected={handleUpload}
      />

      {loading && <Loader />}

      {dataset && (
        <>
          <div className="mt-10">
            <DatasetSummary data={dataset} />
          </div>

          <DatasetPreview data={dataset} />
        </>
      )}
    </>
  );
}