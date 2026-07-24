import api from "./api";
import { UploadResponse } from "@/types/upload";

export async function uploadDataset(
  file: File
): Promise<UploadResponse> {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post<UploadResponse>(
    "/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}