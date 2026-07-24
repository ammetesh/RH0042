import { useRef } from "react";
import { FileSpreadsheet, UploadCloud } from "lucide-react";
import { useInput } from "../../hooks/useInput";

export default function DropZone() {

    const inputRef = useRef<HTMLInputElement>(null);

    const {

        csvFile,

        setCsvFile,

    } = useInput();

    const handleFile = (selected: File | null) => {

        if (!selected) return;

        if (!selected.name.toLowerCase().endsWith(".csv")) {

            alert("Please select a CSV file.");

            return;

        }

        setCsvFile(selected);

    };

    return (

        <>

            <input
                ref={inputRef}
                type="file"
                accept=".csv"
                className="hidden"
                onChange={(e) =>
                    handleFile(
                        e.target.files?.[0] ?? null
                    )
                }
            />

            <div

                onClick={() => inputRef.current?.click()}

                onDragOver={(e) => e.preventDefault()}

                onDrop={(e) => {

                    e.preventDefault();

                    handleFile(

                        e.dataTransfer.files[0]

                    );

                }}

                className="
                    flex
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border-2
                    border-dashed
                    border-violet-500/40
                    bg-black/20
                    p-12
                    text-center
                    transition
                    duration-300
                    hover:border-violet-400
                    hover:bg-violet-500/10
                "

            >

                {

                    csvFile ? (

                        <>

                            <FileSpreadsheet

                                size={54}

                                className="text-green-400"

                            />

                            <h4
                                className="
                                    mt-5
                                    text-lg
                                    font-semibold
                                    text-white
                                "
                            >

                                {csvFile.name}

                            </h4>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-slate-400
                                "
                            >

                                {(csvFile.size / 1024).toFixed(2)} KB

                            </p>

                        </>

                    ) : (

                        <>

                            <UploadCloud

                                size={60}

                                className="text-violet-300"

                            />

                            <h4
                                className="
                                    mt-5
                                    text-xl
                                    font-semibold
                                    text-white
                                "
                            >

                                Drag & Drop CSV

                            </h4>

                            <p
                                className="
                                    mt-2
                                    text-slate-400
                                "
                            >

                                or click to browse

                            </p>

                        </>

                    )

                }

            </div>

        </>

    );

}
