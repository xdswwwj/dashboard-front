import { create } from "zustand";
import { createPersistedStore } from "./persist/persistMiddleware";
import { persistOptions } from "./persist/persistOptions";

export interface HomeState {
  info: string | null;
  setInfo: (payload: string) => void;
}

const useHomeStore = create<HomeState>()(
  createPersistedStore(
    (set) => ({
      info: null,
      setInfo: (payload: string) => set({ info: payload }),
    }),
    persistOptions.home
  )
);

export default useHomeStore;
