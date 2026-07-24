import { create } from "zustand";

interface InputState {

    csvFile: File | null;

    manualDraws: number[][];

    setCsvFile: (file: File | null) => void;

    setManualDraws: (draws: number[][]) => void;

    clearInput: () => void;

}

export const useInput = create<InputState>((set) => ({

    csvFile: null,

    manualDraws: [],

    setCsvFile: (file) =>

        set({

            csvFile: file,

        }),

    setManualDraws: (draws) =>

        set({

            manualDraws: draws,

        }),

    clearInput: () =>

        set({

            csvFile: null,

            manualDraws: [],

        }),

}));
