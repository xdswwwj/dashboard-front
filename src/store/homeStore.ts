import { createPersistedStore } from "@store/persist/persistMiddleware";
import { persistOptions } from "@store/persist/persistOptions";
import { create } from "zustand";

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
