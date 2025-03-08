import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SkinItem } from './SkinItem';
import { AccessoryItemProps } from './AccessoryItemProps';
import { AccessoryItem } from './AccessoryItem';
import { CatEarsHeadband, Fedora, NewsBoy } from '@/components/ui/pixel-accessories';
import { shopStyles } from '@/styles/shop';

export interface ShopItemProps {
  name: string;
  color: string;
  price?: number;
}

export default function ShopScreen() {
  const accessories: AccessoryItemProps[] = [
    { name: 'Cat Ears', Component: CatEarsHeadband, color: '#FF69B4', price: 500 },
    { name: 'Fedora', Component: Fedora, color: '#8B4513', price: 200 },
    { name: 'News Boy', Component: NewsBoy, color: '#4A4A4A', price: 200 },
  ];
  const skins = [
    { name: 'Pink', color: '#FF69B4', price: 100 },
    { name: 'Orange', color: '#FF4500', price: 100 },
  ];

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedText style={styles.subtitle}>Skins</ThemedText>
        <ThemedText style={styles.description}>Change the colour of your stripes!</ThemedText>
        <View style={shopStyles.grid}>
          {skins.map((item, index) => (
            <SkinItem key={index} {...item} />
          ))}
        </View>
        <ThemedText style={styles.subtitle}>Accessories</ThemedText>
        <ThemedText style={styles.description}>Customize your look with these unique items!</ThemedText>
        <View style={shopStyles.grid}>
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
});
