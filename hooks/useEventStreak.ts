import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface EventAttendance {
  eventId: string;
  date: string;
  status: 'attended' | 'flaked';
}

interface EventStreakState {
  attendanceHistory: EventAttendance[];
  currentStreak: number;
  bestStreak: number;
  markEventAttendance: (eventId: string, status: 'attended' | 'flaked') => void;
  getStreak: () => number;
  hasAttendedEvent: (eventId: string) => boolean;
  resetToDemo: () => void;
}

const DEMO_DATA: EventAttendance[] = [
  {
    eventId: 'demo-event-1',
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Yesterday
    status: 'attended'
  },
  {
    eventId: 'demo-event-2',
    date: new Date().toISOString(), // Today
    status: 'attended'
  }
];

export const useEventStreak = create<EventStreakState>()(
  persist(
    (set, get) => ({
      attendanceHistory: DEMO_DATA,
      currentStreak: 2,
      bestStreak: 2,

      markEventAttendance: (eventId: string, status: 'attended' | 'flaked') => {
        set((state) => {
          const existingIndex = state.attendanceHistory.findIndex(
            (entry) => entry.eventId === eventId
          );

          let newHistory = [...state.attendanceHistory];
          
          if (existingIndex !== -1) {
            newHistory[existingIndex] = {
              ...newHistory[existingIndex],
              status,
              date: new Date().toISOString(),
            };
          } else {
            newHistory.push({
              eventId,
              date: new Date().toISOString(),
              status,
            });
          }

          newHistory.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

          let streak = 0;
          for (const entry of newHistory) {
            if (entry.status === 'attended') {
              streak++;
            } else {
              break;
            }
          }

          return {
            attendanceHistory: newHistory,
            currentStreak: streak,
            bestStreak: Math.max(streak, state.bestStreak)
          };
        });
      },

      getStreak: () => {
        return get().currentStreak;
      },

      hasAttendedEvent: (eventId: string) => {
        const state = get();
        return state.attendanceHistory.some(
          (entry) => entry.eventId === eventId && entry.status === 'attended'
        );
      },

      resetToDemo: () => {
        set({
          attendanceHistory: DEMO_DATA,
          currentStreak: 2,
          bestStreak: 2
        });
      }
    }),
    {
      name: 'event-streak-storage',
      version: 1,
    }
  )
);
