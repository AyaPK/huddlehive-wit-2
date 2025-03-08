import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SkinItem } from './SkinItem';
import { AccessoryItemProps } from './AccessoryItemProps';
import { CatEarsHeadband, Fedora, NewsBoy } from '@/components/ui/pixel-accessories';
import { AccessoryItem } from './AccessoryItem';

export interface ShopItemProps {
  name: string;
  color: string;
  price?: number;
}

export default function ShopScreen() {
  const accessories: AccessoryItemProps[] = [
    { name: 'Cat Ears', Component: CatEarsHeadband, color: '#FF69B4', price: 100 },
    { name: 'Fedora', Component: Fedora, color: '#8B4513', price: 100 },
    { name: 'News Boy', Component: NewsBoy, color: '#4A4A4A', price: 100 },
  ];
  const skins = [
    { name: 'Gray', color: '#4A4A4A', price: 100 },
    { name: 'White', color: '#FFFFFF', price: 100 },
    { name: 'Green', color: '#5C8C60', price: 100 },
  ];

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <ThemedText style={styles.subtitle}>Skins</ThemedText>
      <ThemedText style={styles.description}>Change the colour of your stripes!</ThemedText>
      <View style={styles.grid}>
        {skins.map((item, index) => (
          <SkinItem key={index} {...item} />
        ))}
      </View>
      <ThemedText style={styles.subtitle}>Wearables</ThemedText>
      <ThemedText style={styles.description}>Wear a hat!</ThemedText>
      <View style={styles.grid}>
        {accessories.map((accessory, index) => (
          <AccessoryItem key={index} {...accessory} />
        ))}
      </View>
      </ScrollView>
    </ThemedView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 24,
  },
  description: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 24,
  },
  shopItem: {
    alignItems: 'center',
    gap: 12,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#00000011',
    minWidth: 100,
    ...(Platform.OS === 'web' ? {
      cursor: 'pointer',
      transition: 'all 200ms ease',
    } : {}),
  },
  colorCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#00000022',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 16,
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
