import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface TaskState {
  completedTasks: string[];
  toggleTask: (taskId: string) => void;
  resetTasks: () => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      completedTasks: [],
      toggleTask: (taskId) =>
        set((state) => ({
          completedTasks: state.completedTasks.includes(taskId)
            ? state.completedTasks.filter((id) => id !== taskId)
            : [...state.completedTasks, taskId],
        })),
      resetTasks: () => set({ completedTasks: [] }),
    }),
    {
      name: 'event-prep-tasks',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
