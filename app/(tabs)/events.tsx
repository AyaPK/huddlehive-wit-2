import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

// Event type definition for better type safety and documentation
type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

// Sample events data - easy to modify
const events: Event[] = [
  {
    id: '1',
    title: 'Summer Game Night',
    date: '2025-06-15',
    time: '18:00',
    location: 'Community Center',
    description: 'Join us for an evening of board games and fun!'
  },
  {
    id: '2',
    title: 'Tech Workshop',
    date: '2025-06-20',
    time: '14:00',
    location: 'Innovation Hub',
    description: 'Learn about the latest in web development'
  },
  {
    id: '3',
    title: 'Hackathon',
    date: '2025-07-01',
    time: '11:00',
    location: 'Zoopla Offices',
    description: 'For amazing women to come and make amazing things!'
  },
];

function EventCard({ event }: { event: Event }) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <ThemedView style={[styles.card, { backgroundColor: '#ffffff' }]}>
      <ThemedView style={styles.dateStrip}>
        <ThemedText style={styles.date}>
          {formattedDate}
        </ThemedText>
        <ThemedText style={styles.time}>{event.time}</ThemedText>
      </ThemedView>
      
      <ThemedView style={[styles.content, { backgroundColor: '#ffffff' }]}>
        <ThemedText style={[styles.title, { color: '#000000' }]}>{event.title}</ThemedText>
        <ThemedView style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color="#666666" />
          <ThemedText style={styles.location}>{event.location}</ThemedText>
        </ThemedView>
        <ThemedText style={styles.description}>{event.description}</ThemedText>
        
        <ThemedView style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.signupButton]}>
            <ThemedText style={styles.buttonText}>Sign Up</ThemedText>
          </Pressable>
          <Pressable style={[styles.button, styles.detailsButton]}>
            <ThemedText style={styles.buttonText}>Details</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

export default function EventsScreen() {
  return (
    <ThemedView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedText style={[styles.header, { color: '#000000' }]}>Upcoming Events</ThemedText>
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  card: {
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
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
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  location: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 16,
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#007AFF',
  },
  detailsButton: {
    backgroundColor: '#666666',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
