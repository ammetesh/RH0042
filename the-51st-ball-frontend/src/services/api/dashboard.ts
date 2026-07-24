const API_BASE = "http://127.0.0.1:8000";

export async function uploadCSV(file: File) {

    const formData = new FormData();

    formData.append("file", file);

    const response = await fetch(

        `${API_BASE}/draws/upload`,

        {

            method: "POST",

            body: formData,

        }

    );

    if (!response.ok) {

        throw new Error("Failed to upload CSV.");

    }

    return response.json();

}

export async function getExecutiveDashboard() {

    const response = await fetch(

        `${API_BASE}/analytics/executive-dashboard`

    );

    if (!response.ok) {

        throw new Error("Failed to load dashboard.");

    }

    return response.json();

}
