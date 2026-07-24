import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

import { useAudit } from "../../hooks/useAudit";
import { useInput } from "../../hooks/useInput";

export default function RunAuditButton() {

    const navigate = useNavigate();

    const {

        csvFile,

        manualDraws,

    } = useInput();

    const {

        loading,

        setLoading,

        setResult,

        setError,

    } = useAudit();

    const runAudit = async () => {

        if (!csvFile && manualDraws.length === 0) {

            alert("Please upload a CSV or enter manual draws.");

            return;

        }

        try {

            setLoading(true);

            setError(null);

            if (csvFile) {

                const formData = new FormData();

                formData.append(

                    "file",

                    csvFile

                );

                const uploadResponse = await fetch(

                    "http://127.0.0.1:8000/draws/upload",

                    {

                        method: "POST",

                        body: formData,

                    }

                );

                if (!uploadResponse.ok) {

                    throw new Error("CSV upload failed.");

                }

            }

            const dashboardResponse = await fetch(

                "http://127.0.0.1:8000/analytics/executive-dashboard"

            );

            if (!dashboardResponse.ok) {

                throw new Error("Unable to load dashboard.");

            }

            const dashboard = await dashboardResponse.json();

            setResult(dashboard);

            navigate("/results");

        }

        catch (error) {

            console.error(error);

            setError(

                error instanceof Error

                    ? error.message

                    : "Unknown error"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <button

            onClick={runAudit}

            disabled={loading}

            className="
                mt-10
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-violet-600
                px-6
                py-4
                text-lg
                font-semibold
                text-white
                transition
                hover:bg-violet-500
                disabled:cursor-not-allowed
                disabled:opacity-50
            "

        >

            <Play size={22} />

            {

                loading

                    ? "Running Audit..."

                    : "Run Quantum Audit"

            }

        </button>

    );

}
