import { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface PersistOptions<T> {
  name: string; // localStorage 키 이름
  partialize?: (state: T) => Partial<T>; // 저장할 상태 일부만 선택
}

// 공통 persist 유틸리티
export const createPersistedStore = <T>(
  config: StateCreator<T>,
  options: PersistOptions<T>
) => {
  return persist(config, options);
};
