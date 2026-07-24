import { create } from "zustand";

interface AuditState {

    loading: boolean;

    result: any | null;

    error: string | null;

    setLoading: (loading: boolean) => void;

    setResult: (result: any) => void;

    setError: (error: string | null) => void;

    clearAudit: () => void;

}

export const useAudit = create<AuditState>((set) => ({

    loading: false,

    result: null,

    error: null,

    setLoading: (loading) =>
        set({
            loading,
        }),

    setResult: (result) =>
        set({
            result,
            error: null,
        }),

    setError: (error) =>
        set({
            error,
        }),

    clearAudit: () =>
        set({

            loading: false,

            result: null,

            error: null,

        }),

}));
