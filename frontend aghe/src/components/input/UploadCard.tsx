import { UploadCloud } from "lucide-react";
import DropZone from "./DropZone";
import CSVPreview from "./CSVPreview";

export default function UploadCard() {

    return (

        <div
            className="
                rounded-3xl
                border
                border-violet-500/20
                bg-violet-500/10
                p-8
                backdrop-blur-xl
                shadow-lg
            "
        >

            <div className="mb-6 flex items-center gap-3">

                <UploadCloud
                    size={34}
                    className="text-violet-300"
                />

                <div>

                    <h3
                        className="
                            text-2xl
                            font-bold
                            text-white
                        "
                    >

                        Upload CSV

                    </h3>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-400
                        "
                    >

                        Import historical lottery draw data.

                    </p>

                </div>

            </div>

            <DropZone />

            <CSVPreview />

            <div
                className="
                    mt-6
                    rounded-xl
                    bg-black/20
                    p-4
                "
            >

                <p
                    className="
                        text-sm
                        text-slate-400
                    "
                >

                    Expected CSV Format

                </p>

                <pre
                    className="
                        mt-3
                        overflow-x-auto
                        text-xs
                        text-slate-300
                    "
                >
draw,date,n1,n2,n3,n4,n5
1,2025-01-01,4,12,18,29,41
2,2025-01-08,7,15,26,35,44
                </pre>

            </div>

        </div>

    );

}
