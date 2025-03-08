import { StyleSheet, View, Pressable, ScrollView, Image, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { events } from './index';
import { Ionicons } from '@expo/vector-icons';
import { PageLayout } from '@/components/PageLayout';
import React from 'react';

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [isImageLoading, setIsImageLoading] = React.useState(true);
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <PageLayout>
        <View style={styles.container}>
          <ThemedText style={styles.errorText}>Event not found</ThemedText>
        </View>
      </PageLayout>
    );
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <PageLayout>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: event.imageUrl }}
                style={styles.image}
                resizeMode="cover"
                onLoadStart={() => setIsImageLoading(true)}
                onLoadEnd={() => setIsImageLoading(false)}
              />
              {isImageLoading && (
                <ThemedView style={styles.imageLoadingOverlay}>
                  <ActivityIndicator size="large" color="#007AFF" />
                </ThemedView>
              )}
            </View>

            <ThemedView style={styles.dateStrip}>
              <ThemedText style={styles.date}>{formattedDate}</ThemedText>
              <ThemedText style={styles.time}>{event.time}</ThemedText>
            </ThemedView>

            <ThemedView style={styles.content}>
              <ThemedText style={styles.title}>{event.title}</ThemedText>
              
              <ThemedView style={styles.infoContainer}>
                <ThemedView style={styles.infoRow}>
                  <Ionicons name="location-outline" size={20} color="#666666" style={styles.infoIcon} />
                  <ThemedText style={styles.infoText}>{event.location}</ThemedText>
                </ThemedView>

                {event.organizer && (
                  <ThemedView style={[styles.infoRow, styles.lastInfoRow]}>
                    <Ionicons name="person-outline" size={20} color="#666666" style={styles.infoIcon} />
                    <ThemedText style={styles.infoText}>{event.organizer}</ThemedText>
                  </ThemedView>
                )}
              </ThemedView>

              <ThemedView style={styles.section}>
                <ThemedText style={styles.sectionTitle}>Description</ThemedText>
                <ThemedText style={styles.description}>{event.fullDescription || event.description}</ThemedText>
              </ThemedView>

              {event.requirements && (
                <ThemedView style={styles.section}>
                  <ThemedText style={styles.sectionTitle}>Requirements</ThemedText>
                  <ThemedText style={styles.description}>{event.requirements}</ThemedText>
                </ThemedView>
              )}

              {/* Check if event is today and render appropriate button */}
              {(() => {
                const currentDate = new Date('2025-03-08T14:48:24Z');
                const isToday = new Date(event.date).toDateString() === currentDate.toDateString();
                return (
                  <Pressable 
                    style={[styles.button, isToday ? styles.checkInButton : styles.signupButton]}
                    onPress={() => isToday ? router.push(`/events/check-in?id=${event.id}`) : undefined}
                  >
                    <ThemedText style={styles.buttonText}>
                      {isToday ? 'Check In' : 'Sign Up for Event'}
                    </ThemedText>
                  </Pressable>
                );
              })()}
            </ThemedView>
          </View>
        </View>
      </ScrollView>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center' as const,
    paddingTop: 40,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    backgroundColor: '#e1e1e1',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageLoadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateStrip: {
    backgroundColor: '#007AFF',
    padding: 12,
  },
  date: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 4,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  infoContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  lastInfoRow: {
    marginBottom: 0,
  },
  infoIcon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#444444',
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#444444',
    lineHeight: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#007AFF',
  },
  checkInButton: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 16,
    color: '#666666',
  },
});
