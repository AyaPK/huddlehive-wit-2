import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {
  BaseballCap,
  ChefHat,
} from '@/components/ui/pixel-accessories';
import { AccessoryItem } from './AccessoryItem';
import { SkinItem } from './SkinItem';
import { PageLayout } from '@/components/PageLayout';
import { shopStyles } from '@/styles/shop';
import { useInventory } from '@/context/InventoryContext';
import { AnimatedPixelBee } from '@/components/AnimatedPixelBee';

export default function AccessoriesScreen() {
  const { purchasedAccessories, purchasedSkins, selectedSkin, setSelectedSkin } = useInventory();

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
        <View style={styles.beeContainer}>
          <View style={styles.beeWrapper}>
            <AnimatedPixelBee skin={selectedSkin} />
          </View>
        </View>
        {allSkins.length > 0 && (
          <>
            <ThemedText style={styles.subtitle}>Your Skins</ThemedText>
            <View style={shopStyles.grid}>
              {allSkins.map((item, index) => (
                <SkinItem 
                  key={index} 
                  {...item} 
                  onPress={() => {
                    // Convert skin name to lowercase and ensure it's either 'normal' or 'rainbow'
                    const newSkin = item.name.toLowerCase();
                    setSelectedSkin(newSkin === 'rainbow' ? 'rainbow' : 'normal');
                  }}
                  selected={item.name.toLowerCase() === selectedSkin} 
                />
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
  container: {
    flex: 1,
  },
  beeContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  beeWrapper: {
    alignItems: 'center',
    gap: 12,
  },
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
