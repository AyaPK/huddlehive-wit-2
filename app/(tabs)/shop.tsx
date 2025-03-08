import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SkinItem } from './SkinItem';
import { AccessoryItemProps } from './AccessoryItemProps';
import { AccessoryItem } from './AccessoryItem';
import { CatEarsHeadband, Fedora, NewsBoy } from '@/components/ui/pixel-accessories';
import { shopStyles } from '@/styles/shop';
import { useInventory } from '@/context/InventoryContext';

export interface ShopItemProps {
  name: string;
  color: string;
  price?: number;
}

export default function ShopScreen() {
  const { purchasedAccessories, purchasedSkins, tryPurchaseItem } = useInventory();

  const accessories: AccessoryItemProps[] = [
    { name: 'Cat Ears', Component: CatEarsHeadband, color: '#FF69B4', price: 500 },
    { name: 'Fedora', Component: Fedora, color: '#8B4513', price: 200 },
    { name: 'News Boy', Component: NewsBoy, color: '#4A4A4A', price: 200 },
  ].filter(item => !purchasedAccessories.some(purchased => purchased.name === item.name));

  const skins: ShopItemProps[] = [
    { name: 'Pink', color: '#FF69B4', price: 100 },
    { name: 'Orange', color: '#FF4500', price: 100 },
  ].filter(item => !purchasedSkins.some(purchased => purchased.name === item.name));

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {skins.length > 0 && (
          <>
            <ThemedText style={styles.subtitle}>Skins</ThemedText>
            <ThemedText style={styles.description}>Change the colour of your stripes!</ThemedText>
            <View style={shopStyles.grid}>
              {skins.map((item, index) => (
                <SkinItem key={index} {...item} onPress={() => tryPurchaseItem(item)} />
              ))}
            </View>
          </>
        )}
        {accessories.length > 0 && (
          <>
            <ThemedText style={styles.subtitle}>Accessories</ThemedText>
            <ThemedText style={styles.description}>Customize your look with these unique items!</ThemedText>
            <View style={shopStyles.grid}>
              {accessories.map((accessory, index) => (
                <AccessoryItem key={index} {...accessory} onPress={() => tryPurchaseItem(accessory)} />
              ))}
            </View>
          </>
        )}
        {skins.length === 0 && accessories.length === 0 && (
          <View style={styles.emptyState}>
            <ThemedText style={styles.subtitle}>All Items Purchased!</ThemedText>
            <ThemedText style={styles.description}>
              You've bought everything from the shop. Check back later for new items!
            </ThemedText>
          </View>
        )}
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
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
  },
});
