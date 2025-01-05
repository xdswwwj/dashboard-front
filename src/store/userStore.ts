import { createPersistedStore } from "@store/persist/persistMiddleware";
import { persistOptions } from "@store/persist/persistOptions";
import { create } from "zustand";

export interface UserInterface {
  userId?: string;
  email?: string;
  image?: string;
  name?: string;
  phone?: string;
  provider?: string;
}

export interface UserState {
  token: string | null;
  setToken: (payload: string) => void;

  user: UserInterface | null;
  setUser: (payload: UserInterface) => void;
}

const useUserStore = create<UserState>()(
  createPersistedStore(
    (set) => ({
      token: null,
      setToken: (payload: string) => set({ token: payload }),
      user: null,
      setUser: (payload) => set({ user: payload }),
    }),
    persistOptions.user
  )
);

export default useUserStore;
