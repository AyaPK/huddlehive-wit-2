import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import {
  BaseballCap,
  CatEarsHeadband,
  ChefHat,
  Fedora,
  NewsBoy,
} from '@/components/ui/pixel-accessories';
import { AccessoryItem } from './AccessoryItem';
import { SkinItem } from './SkinItem';
import { shopStyles } from '@/styles/shop';

export default function AccessoriesScreen() {
  const accessories = [
    { name: 'Chef Hat', Component: ChefHat, color: '#FFFFFF' },
    { name: 'Baseball Cap', Component: BaseballCap, color: '#0066CC' },
  ];

  const skins = [
    { name: 'Gray', color: '#4A4A4A' },
    { name: 'Purple', color: '#663399' },
  ];

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={shopStyles.grid}>
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
});
