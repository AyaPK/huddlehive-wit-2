import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface BeeHealthState {
  currentHealth: number;
  maxHealth: number;
  increaseHealth: (amount: number) => void;
  decreaseHealth: (amount: number) => void;
  resetHealth: () => void;
}

const DEFAULT_HEALTH = 50;
const MAX_HEALTH = 100;

export const useBeeHealth = create<BeeHealthState>()(
  persist(
    (set) => ({
      currentHealth: DEFAULT_HEALTH,
      maxHealth: MAX_HEALTH,

      increaseHealth: (amount) =>
        set((state) => ({
          currentHealth: Math.min(state.currentHealth + amount, state.maxHealth),
        })),

      decreaseHealth: (amount) =>
        set((state) => ({
          currentHealth: Math.max(state.currentHealth - amount, 0),
        })),

      resetHealth: () =>
        set({
          currentHealth: DEFAULT_HEALTH,
          maxHealth: MAX_HEALTH,
        }),
    }),
    {
      name: 'bee-health-storage',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
