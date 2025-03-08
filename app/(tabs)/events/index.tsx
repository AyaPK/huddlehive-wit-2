import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { EventContext } from './_layout';

// Event type definition for better type safety and documentation
export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  organizer?: string;
  fullDescription?: string;
  requirements?: string;
  checkInCode?: string;
  checked_in?: boolean;
};

// Sample events data - easy to modify
export const events: Event[] = [
  {
    id: '6',
    title: 'A past event that you missed :(',
    date: '2025-01-08',
    time: '18:00',
    location: 'Sadsville',
    description: 'I cannot believe you didnt join us!',
    imageUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800',
    organizer: 'Community Events Team',
    fullDescription: 'Get ready for an exciting evening of strategy, luck, and friendly competition! Our Summer Game Night brings together board game enthusiasts and newcomers alike. We\'ll have a wide selection of games from classic favorites to modern hits. Light refreshments will be provided, and our experienced game masters will be there to explain rules and get you started.',
    requirements: 'No experience necessary! Just bring your enthusiasm and readiness to learn. Ages 16+',
    checkInCode: 'HAPPY-GAME-NIGHT'
  },
  {
    id: '5',
    title: 'A super cool awesome event that is happening today!!!!',
    date: '2025-03-08',
    time: '18:00',
    location: 'Community Center',
    description: 'Join us for an evening of board games and fun!',
    imageUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800',
    organizer: 'Community Events Team',
    fullDescription: 'Get ready for an exciting evening of strategy, luck, and friendly competition! Our Summer Game Night brings together board game enthusiasts and newcomers alike. We\'ll have a wide selection of games from classic favorites to modern hits. Light refreshments will be provided, and our experienced game masters will be there to explain rules and get you started.',
    requirements: 'No experience necessary! Just bring your enthusiasm and readiness to learn. Ages 16+',
    checkInCode: 'HAPPY-GAME-NIGHT'
  },
  {
    id: '1',
    title: 'Summer Game Night',
    date: '2025-06-15',
    time: '18:00',
    location: 'Community Center',
    description: 'Join us for an evening of board games and fun!',
    imageUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800',
    organizer: 'Community Events Team',
    fullDescription: 'Get ready for an exciting evening of strategy, luck, and friendly competition! Our Summer Game Night brings together board game enthusiasts and newcomers alike. We\'ll have a wide selection of games from classic favorites to modern hits. Light refreshments will be provided, and our experienced game masters will be there to explain rules and get you started.',
    requirements: 'No experience necessary! Just bring your enthusiasm and readiness to learn. Ages 16+'
  },
  {
    id: '2',
    title: 'Tech Workshop',
    date: '2025-06-20',
    time: '14:00',
    location: 'Innovation Hub',
    description: 'Learn about the latest in web development',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    organizer: 'Tech Learning Initiative',
    fullDescription: 'Dive into the world of modern web development in this hands-on workshop. You\'ll learn about the latest frameworks, best practices, and how to build responsive, accessible websites. Our experienced instructors will guide you through practical exercises and real-world examples.',
    requirements: 'Basic understanding of HTML and CSS. Please bring your laptop with a modern web browser installed.'
  },
  {
    id: '3',
    title: 'Hackathon',
    date: '2025-07-01',
    time: '11:00',
    location: 'Zoopla Offices',
    description: 'For amazing women to come and make amazing things!',
    imageUrl: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800',
    organizer: 'Women in Tech',
    fullDescription: 'Join us for an inspiring day of creation, collaboration, and coding! This women-focused hackathon aims to bring together talented individuals from diverse backgrounds to tackle real-world challenges. Whether you\'re a seasoned developer or just starting your tech journey, you\'ll find a welcoming and supportive environment to learn and create.',
    requirements: 'Open to women and non-binary individuals of all skill levels. Bring your laptop and ideas!'
  },
];

export default function EventsScreen() {
  const { checkedInEvents } = React.useContext(EventContext);

  return (
    <ThemedView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {events.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
            isCheckedIn={checkedInEvents.has(event.id)}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

function EventCard({ event, isCheckedIn }: { 
  event: Event; 
  isCheckedIn: boolean;
}) {
  const router = useRouter();
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const currentDate = new Date('2025-03-08T14:37:45Z');
  const eventDate = new Date(event.date);
  const isToday = eventDate.toDateString() === currentDate.toDateString();
  const isPast = eventDate < currentDate && !isToday;
  const [isSignedUp, setIsSignedUp] = React.useState(false);

  return (
    <ThemedView style={[styles.card, { backgroundColor: '#ffffff' }]}>
      <ThemedView style={[
        styles.dateStrip, 
        isSignedUp && { backgroundColor: '#34C759' },
        isPast && !isSignedUp && { backgroundColor: '#FF3B30' },
        isCheckedIn && { backgroundColor: '#34C759' }
      ]}>
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
          <Pressable 
            style={[
              styles.button, 
              isToday ? (isCheckedIn ? styles.signedUpButton : styles.checkInButton) : 
              isSignedUp ? styles.signedUpButton : 
              isPast ? styles.pastButton :
              styles.signupButton
            ]}
            onPress={() => {
              if (isToday && !isCheckedIn) {
                router.push(`/events/check-in?id=${event.id}`);
              } else if (!isPast && !isSignedUp) {
                setIsSignedUp(true);
              }
            }}
            disabled={isSignedUp || (isPast && !isToday) || isCheckedIn}
          >
            <ThemedText style={styles.buttonText}>
              {isToday ? (isCheckedIn ? 'Checked In' : 'Check In') : 
               isSignedUp ? 'Signed Up' : 
               isPast ? 'Past Event' :
               'Sign Up'}
            </ThemedText>
          </Pressable>
          <Pressable 
            style={[styles.button, styles.detailsButton]}
            onPress={() => router.push({ pathname: "/events/[id]", params: { id: event.id }})}
          >
            <ThemedText style={styles.buttonText}>Details</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
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
    backgroundColor: '#007AFF', // Blue accent for primary state
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
    backgroundColor: '#007AFF', // Blue accent for primary actions
  },
  signedUpButton: {
    backgroundColor: '#34C759', // Green for success states
  },
  checkInButton: {
    backgroundColor: '#007AFF', // Blue accent for primary actions
  },
  pastButton: {
    backgroundColor: '#FF3B30', // Red for error/past states
  },
  detailsButton: {
    backgroundColor: '#666666', // Light gray for secondary actions
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
