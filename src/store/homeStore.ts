import { produce } from "immer";
import { create } from "zustand";

interface HomeState {
  info: string | null;
  setInfo: (payload: string) => void;
}

const useHomeStore = create<HomeState>((set) => ({
  info: null,
  setInfo: (payload) =>
    set(
      produce((state: HomeState) => {
        state.info = payload;
      })
    ),
}));

export default useHomeStore;
