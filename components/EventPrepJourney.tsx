import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Animated } from 'react-native';
import { ThemedText } from './ThemedText';
import { PixelBeeImage } from './PixelBeeImage';

interface Task {
  id: number;
  title: string;
  description: string;
}

const TASKS: Task[] = [
  { id: 1, title: 'Clear Your Calendar', description: 'Make sure you have time to attend this event' },
  { id: 2, title: 'See Other Buddees Joining', description: 'Find Buddees to connect with at this event' },
  { id: 3, title: 'Find Venue', description: 'Research the venue' },
  { id: 4, title: 'Plan Your Journey', description: 'Make sure you can get to your destination and are bringing all the essentials' },
  { id: 5, title: 'Attend Event', description: 'Enjoy the event!' },
];

export const EventPrepJourney: React.FC = () => {
  const [currentTask, setCurrentTask] = useState(1);
  const [beePosition] = useState(new Animated.Value(0));

  const moveBeeTo = (taskId: number) => {
    if (taskId <= currentTask + 1) {
      const newPosition = ((taskId - 1) * 80) + 16;
      Animated.spring(beePosition, {
        toValue: newPosition,
        useNativeDriver: true,
        friction: 7,
        tension: 40,
      }).start();
      setCurrentTask(taskId);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.journeyLine}>
        <View style={styles.lineWrapper}>
          {/* Line segments between tasks */}
          {TASKS.slice(0, -1).map((task) => (
            <View
              key={task.id}
              style={[
                styles.lineSegment,
                task.id < currentTask && styles.completedLine,
                {
                  left: ((task.id - 1) * 80) + 32,
                },
              ]}
            />
          ))}
          <Animated.View
            style={[
              styles.beeContainer,
              {
                transform: [{ translateX: beePosition }, { scale: 0.9 }],
              },
            ]}
          >
            <PixelBeeImage variant="small" />
          </Animated.View>
          {TASKS.map((task) => (
            <Pressable
              key={task.id}
              style={[
                styles.circle,
                {
                  left: (task.id - 1) * 80,
                  backgroundColor: task.id <= currentTask ? '#007AFF' : '#E1E1E1',
                },
              ]}
              onPress={() => moveBeeTo(task.id)}
            >
              <ThemedText style={[styles.circleText, task.id <= currentTask && styles.completedText]}>
                {task.id}
              </ThemedText>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.taskInfo}>
        <ThemedText style={styles.taskTitle}>
          {TASKS[currentTask - 1].title}
        </ThemedText>
        <ThemedText style={styles.taskDescription}>
          {TASKS[currentTask - 1].description}
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    gap: 40,
    backgroundColor: 'transparent',
  },
  journeyLine: {
    height: 180,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  lineWrapper: {
    width: 400,
    height: '100%',
    position: 'relative',
    marginLeft: 24,
  },
  lineSegment: {
    position: 'absolute',
    height: 2,
    width: 48,
    top: 129,
    backgroundColor: '#E1E1E1',
  },
  completedLine: {
    backgroundColor: '#007AFF',
  },
  circle: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    top: 114,
  },
  circleText: {
    fontSize: 14,
    fontWeight: '600',
  },
  completedText: {
    color: '#FFFFFF',
  },
  beeContainer: {
    position: 'absolute',
    top: 45,
    left: -16,
    zIndex: 1,
  },
  taskInfo: {
    alignItems: 'center',
    gap: 8,
    padding: 20,
    backgroundColor: '#efefef',
    borderRadius: 16,
    width: 400,
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
  },
});
