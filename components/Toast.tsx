import React, { useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

interface ToastProps {
  message: string;
  duration?: number;
  onHide?: () => void;
}

export function Toast({ message, duration = 2000, onHide }: ToastProps) {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(duration - 600),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onHide?.();
    });
  }, [duration, onHide]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <ThemedText style={styles.text}>{message}</ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '15%',
    left: 20,
    right: 20,
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
