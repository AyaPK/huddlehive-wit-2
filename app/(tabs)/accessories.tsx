import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {
  BaseballCap,
  CatEarsHeadband,
  ChefHat,
  Fedora,
  NewsBoy
} from '@/components/ui/pixel-accessories';

interface AccessoryItemProps {
  name: string;
  Component: React.ComponentType<{ size: number; color: string }>;
  color?: string;
}

const AccessoryItem: React.FC<AccessoryItemProps> = ({ name, Component, color = '#663399' }) => (
  <Pressable
    style={({ hovered }) => [
      styles.accessoryItem,
      hovered && {
        backgroundColor: '#00000022',
        transform: Platform.select({
          web: 'scale(1.05)',
          default: undefined,
        }),
      },
    ]}
  >
    <Component size={64} color={color} />
    <ThemedText style={styles.text}>{name}</ThemedText>
  </Pressable>
);

export default function AccessoriesScreen() {
  const accessories: AccessoryItemProps[] = [
    { name: 'Cat Ears', Component: CatEarsHeadband, color: '#FF69B4' },
    { name: 'Fedora', Component: Fedora, color: '#8B4513' },
    { name: 'News Boy', Component: NewsBoy, color: '#4A4A4A' },
    { name: 'Chef Hat', Component: ChefHat, color: '#FFFFFF' },
    { name: 'Baseball Cap', Component: BaseballCap, color: '#1E90FF' },
  ];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.grid}>
        {accessories.map((accessory, index) => (
          <AccessoryItem key={index} {...accessory} />
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  shopButton: {
    backgroundColor: '#00000011',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    ...(Platform.OS === 'web' ? {
      cursor: 'pointer',
      transitionProperty: 'transform, background-color',
      transitionDuration: '200ms',
    } : {}),
  },
  shopButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 32,
  },
  accessoryItem: {
    alignItems: 'center',
    gap: 12,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#00000011',
    minWidth: 120,
    ...(Platform.OS === 'web' ? {
      cursor: 'pointer',
      transitionProperty: 'transform, background-color',
      transitionDuration: '200ms',
    } : {}),
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});
