import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import {
  BaseballCap,
  ChefHat,
} from '@/components/ui/pixel-accessories';
import { AccessoryItem } from './AccessoryItem';
import { SkinItem } from './SkinItem';
import { shopStyles } from '@/styles/shop';
import { useInventory } from '@/context/InventoryContext';
import { ThemedText } from '@/components/ThemedText';

export default function AccessoriesScreen() {
  const { purchasedAccessories, purchasedSkins } = useInventory();

  const defaultAccessories = [
    { name: 'Chef Hat', Component: ChefHat, color: '#FFFFFF' },
    { name: 'Baseball Cap', Component: BaseballCap, color: '#0066CC' },
  ];

  const allAccessories = [...defaultAccessories, ...purchasedAccessories];
  const allSkins = [...purchasedSkins];

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {allSkins.length > 0 && (
          <>
            <ThemedText style={styles.subtitle}>Your Skins</ThemedText>
            <View style={shopStyles.grid}>
              {allSkins.map((item, index) => (
                <SkinItem key={index} {...item} />
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
    marginBottom: 24,
    marginTop: 24,
  },
});
