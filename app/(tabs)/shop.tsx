import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SkinItem } from './SkinItem';
import { AccessoryItemProps } from './AccessoryItemProps';
import { AccessoryItem } from './AccessoryItem';
import { CatEarsHeadband, Fedora, NewsBoy } from '@/components/ui/pixel-accessories';
import { shopStyles } from '@/styles/shop';
import { useInventory } from '@/context/InventoryContext';
import { PageLayout } from '@/components/PageLayout';
import { SKIN_TYPE } from '@/constants/Accessories';

export interface ShopItemProps {
  name: SKIN_TYPE;
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
    { name: SKIN_TYPE.PINK, color: '#FF69B4', price: 100 },
    { name: SKIN_TYPE.ORANGE, color: '#FF4500', price: 100 },
  ].filter(item => !purchasedSkins.some(purchased => purchased.name === item.name));

  return (
    <PageLayout>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedText style={styles.pageTitle}>Shop</ThemedText>
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
    </PageLayout>
  );
}

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 16,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    color: '#2C3333',
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 24,
    color: '#2C3333',
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  description: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 24,
    color: '#2C3333',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
  },
});
