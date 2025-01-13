import { createPersistedStore } from "@store/persist/persistMiddleware";
import { persistOptions } from "@store/persist/persistOptions";
import { create } from "zustand";

export interface UserInterface {
  userId?: string;
  email?: string;
  image?: string;
  name?: string;
  nickname?: string;
  sex?: number;
  phone?: string;
  provider?: string;
}

export interface UserState {
  token: string;
  setToken: (payload: string) => void;

  user: UserInterface | null;
  setUser: (payload: UserInterface) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  createPersistedStore(
    (set) => ({
      token: "",
      setToken: (payload: string) => set({ token: payload }),
      user: null,
      setUser: (payload) => set({ user: payload }),
      clearUser: () => set({ user: null }),
    }),
    persistOptions.user
  )
);

export default useUserStore;
