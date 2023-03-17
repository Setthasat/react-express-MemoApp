import { create } from "zustand";
import { persist } from 'zustand/middleware';


let store = (set) => ({
    memo: [],
    addMemo: (form) => set((state) => {
        return { memo: [...state.memo, form] };
    }),
});

// store = persist(store, { name: 'Memo' });
const useStore = create(store);
export default useStore;