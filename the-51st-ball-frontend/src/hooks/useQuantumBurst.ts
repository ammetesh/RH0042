import { create } from "zustand";

interface BurstState {

    burst: number;

    triggerBurst: () => void;

}

export const useQuantumBurst = create<BurstState>((set) => ({

    burst: 0,

    triggerBurst: () => {

        set({ burst: 1 });

    },

}));
