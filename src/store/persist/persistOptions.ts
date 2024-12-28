import { HomeState } from "../homeStore";

export const persistOptions = {
  home: {
    name: "home-storage",
    partialize: (state: HomeState) => ({ info: state.info }),
  },
};
