import { persistOptions } from "./persistOptions";

export const clearPersistedState = (keys: string[]) => {
  keys.forEach((key) => localStorage.removeItem(key));
};

export const clearPersistedStates = () => {
  Object.values(persistOptions).forEach((option) => {
    if (option.name) {
      localStorage.removeItem(option.name);
    }
  });
};
