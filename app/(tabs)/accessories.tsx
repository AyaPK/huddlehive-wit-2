import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { AccessoryItem } from './AccessoryItem';
import { SkinItem } from './SkinItem';
import { PageLayout } from '@/components/PageLayout';
import { shopStyles } from '@/styles/shop';
import { useInventory } from '@/context/InventoryContext';
import { ChefHat, BaseballCap } from '@/components/ui/pixel-accessories';

export default function AccessoriesScreen() {
  const { purchasedAccessories, purchasedSkins } = useInventory();

  const defaultAccessories = [
    { name: 'Chef Hat', Component: ChefHat, color: '#FFFFFF' },
    { name: 'Baseball Cap', Component: BaseballCap, color: '#0066CC' },
  ];

  const allSkins = [...purchasedSkins];
  const allAccessories = [...defaultAccessories, ...purchasedAccessories];

  return (
    <PageLayout>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedText style={styles.pageTitle}>My Accessories</ThemedText>
        {allSkins.length > 0 && (
          <>
            <ThemedText style={styles.subtitle}>Your Skins</ThemedText>
            <View style={shopStyles.grid}>
              {allSkins.map((skin, index) => (
                <SkinItem key={index} {...skin} />
              ))}
            </View>
          </>
        )}
        <ThemedText style={styles.subtitle}>Your Accessories</ThemedText>
        <View style={shopStyles.grid}>
          {allAccessories.map((accessory, index) => (
            <AccessoryItem key={index} {...accessory} />
          ))}
        </View>
        {allAccessories.length === 0 && (
          <View style={styles.emptyState}>
            <ThemedText style={styles.description}>
              Visit the shop to purchase accessories for your bee!
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
    marginBottom: 24,
    marginTop: 24,
    color: '#2C3333',
    textShadowColor: 'rgba(255, 255, 255, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  description: {
    fontSize: 16,
    color: '#2C3333',
    textAlign: 'center',
    opacity: 0.7,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
  },
});
