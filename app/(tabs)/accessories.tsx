import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import {
  BaseballCap,
  ChefHat,
} from '@/components/ui/pixel-accessories';
import { AccessoryItemProps } from './AccessoryItemProps';
import { AccessoryItem } from './AccessoryItem';
import { SkinItem } from './SkinItem';

export default function AccessoriesScreen() {
  const accessories: AccessoryItemProps[] = [
    { name: 'Chef Hat', Component: ChefHat, color: '#FFFFFF' },
    { name: 'Baseball Cap', Component: BaseballCap, color: '#1E90FF' },
  ];

  const skins = [
    { name: 'Pink', color: '#FF69B4' },
    { name: 'Brown', color: '#8B4513' },]

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.grid}>
        {accessories.map((accessory, index) => (
          <AccessoryItem key={index} {...accessory} />
        ))}
        {skins.map((item, index) => (
          <SkinItem key={index} {...item} />
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
      transition: 'all 200ms ease',
    } : {}),
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
      transition: 'all 200ms ease',
    } : {}),
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
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
