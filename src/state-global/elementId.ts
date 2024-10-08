import { create } from "zustand";

interface IElementIdState {
    elementId:string,
    setElementId:(value:string) =>void
};

export const useElmentId = create<IElementIdState>((set) => ({
    elementId: "", 
    setElementId: (value) => set(() => ({ elementId: value })) 
}));