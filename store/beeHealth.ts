import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StateCreator } from 'zustand';

interface BeeHealthState {
  currentHealth: number;
  maxHealth: number;
  increaseHealth: (amount: number) => void;
  decreaseHealth: (amount: number) => void;
  resetHealth: () => void;
}

type BeeHealthStore = StateCreator<
  BeeHealthState,
  [],
  [],
  BeeHealthState
>;

const DEFAULT_HEALTH = 50;

const createBeeHealthStore: BeeHealthStore = (set) => ({
  currentHealth: DEFAULT_HEALTH,
  maxHealth: 100,
  increaseHealth: (amount: number) =>
    set((state: BeeHealthState) => ({
      currentHealth: Math.min(state.currentHealth + amount, state.maxHealth),
    })),
  decreaseHealth: (amount: number) =>
    set((state: BeeHealthState) => ({
      currentHealth: Math.max(state.currentHealth - amount, 0),
    })),
  resetHealth: () =>
    set(() => ({
      currentHealth: DEFAULT_HEALTH,
    })),
});

export const useBeeHealth = create<BeeHealthState>()(
  persist(
    createBeeHealthStore,
    {
      name: 'bee-health-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
