export interface UploadResponse {
  dataset_id: string;
  filename: string;
  rows: number;
  columns: number;
  numeric_columns: number;
  dataset_type: string;
  preview: Record<string, unknown>[];
}