import { UserState } from "../userStore";

export const persistOptions = {
  user: {
    name: "user-storage",
    partialize: (state: UserState) => ({
      token: state.token,
      user: state.user,
    }),
  },
};
