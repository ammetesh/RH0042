import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useInput } from "../../hooks/useInput";

export default function ManualEntry() {

    const { setManualDraws } = useInput();

    const [draws, setDraws] = useState<number[][]>([
        [0, 0, 0, 0, 0],
    ]);

    const updateValue = (

        row: number,

        col: number,

        value: string

    ) => {

        const updated = [...draws];

        updated[row][col] = Number(value);

        setDraws(updated);

        setManualDraws(updated);

    };

    const addDraw = () => {

        const updated = [

            ...draws,

            [0, 0, 0, 0, 0],

        ];

        setDraws(updated);

        setManualDraws(updated);

    };

    const removeDraw = (index: number) => {

        if (draws.length === 1) return;

        const updated = draws.filter((_, i) => i !== index);

        setDraws(updated);

        setManualDraws(updated);

    };

    return (

        <div
            className="
                rounded-3xl
                border
                border-violet-500/20
                bg-violet-500/10
                p-8
                backdrop-blur-xl
            "
        >

            <div className="flex items-center justify-between">

                <h3
                    className="
                        text-2xl
                        font-bold
                        text-white
                    "
                >

                    Manual Entry

                </h3>

                <button

                    onClick={addDraw}

                    className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        bg-violet-600
                        px-4
                        py-2
                        text-white
                        hover:bg-violet-500
                    "

                >

                    <Plus size={18} />

                    Add Draw

                </button>

            </div>

            <div className="mt-8 space-y-5">

                {

                    draws.map((draw, rowIndex) => (

                        <div

                            key={rowIndex}

                            className="
                                rounded-xl
                                bg-black/20
                                p-4
                            "

                        >

                            <div className="mb-3 flex items-center justify-between">

                                <span className="text-slate-300">

                                    Draw {rowIndex + 1}

                                </span>

                                <button

                                    onClick={() => removeDraw(rowIndex)}

                                    className="text-red-400 hover:text-red-300"

                                >

                                    <Trash2 size={18} />

                                </button>

                            </div>

                            <div className="grid grid-cols-5 gap-3">

                                {

                                    draw.map((value, colIndex) => (

                                        <input

                                            key={colIndex}

                                            type="number"

                                            min={1}

                                            max={99}

                                            value={value || ""}

                                            onChange={(e) =>

                                                updateValue(

                                                    rowIndex,

                                                    colIndex,

                                                    e.target.value

                                                )

                                            }

                                            className="
                                                rounded-lg
                                                bg-slate-900
                                                p-3
                                                text-center
                                                text-white
                                                outline-none
                                                ring-1
                                                ring-slate-700
                                                focus:ring-violet-500
                                            "

                                        />

                                    ))

                                }

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}
