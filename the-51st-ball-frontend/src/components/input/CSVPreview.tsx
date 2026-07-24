import { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";

export default function CSVPreview() {

    const { csvFile } = useInput();

    const [rows, setRows] = useState<string[][]>([]);

    useEffect(() => {

        if (!csvFile) {

            setRows([]);

            return;

        }

        const reader = new FileReader();

        reader.onload = (event) => {

            const text = event.target?.result as string;

            const parsed = text
                .trim()
                .split(/\r?\n/)
                .map((line) => line.split(","));

            setRows(parsed);

        };

        reader.readAsText(csvFile);

    }, [csvFile]);

    if (!csvFile) return null;

    return (

        <div
            className="
                mt-8
                rounded-2xl
                border
                border-violet-500/20
                bg-black/20
                p-6
            "
        >

            <div
                className="
                    mb-4
                    flex
                    items-center
                    justify-between
                "
            >

                <h3
                    className="
                        text-xl
                        font-semibold
                        text-white
                    "
                >

                    CSV Preview

                </h3>

                <span
                    className="
                        rounded-lg
                        bg-violet-600
                        px-3
                        py-1
                        text-sm
                        text-white
                    "
                >

                    {Math.max(rows.length - 1, 0)} Draws

                </span>

            </div>

            <div className="overflow-x-auto">

                <table
                    className="
                        w-full
                        border-collapse
                        text-sm
                    "
                >

                    <thead>

                        <tr>

                            {

                                rows[0]?.map((cell, index) => (

                                    <th

                                        key={index}

                                        className="
                                            border-b
                                            border-slate-700
                                            px-3
                                            py-2
                                            text-left
                                            text-slate-300
                                        "

                                    >

                                        {cell}

                                    </th>

                                ))

                            }

                        </tr>

                    </thead>

                    <tbody>

                        {

                            rows

                                .slice(1, 11)

                                .map((row, rowIndex) => (

                                    <tr key={rowIndex}>

                                        {

                                            row.map((cell, cellIndex) => (

                                                <td

                                                    key={cellIndex}

                                                    className="
                                                        border-b
                                                        border-slate-800
                                                        px-3
                                                        py-2
                                                        text-slate-400
                                                    "

                                                >

                                                    {cell}

                                                </td>

                                            ))

                                        }

                                    </tr>

                                ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}
