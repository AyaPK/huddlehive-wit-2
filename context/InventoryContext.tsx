import React, { createContext, useContext, useState } from 'react';
import { AccessoryItemProps } from '@/app/(tabs)/AccessoryItemProps';
import { ShopItemProps } from '@/app/(tabs)/shop';
import { Alert, Platform } from 'react-native';
import { useCoinBalance } from './CoinBalanceContext';

interface InventoryContextType {
  purchasedSkins: ShopItemProps[];
  purchasedAccessories: AccessoryItemProps[];
  selectedSkin: 'normal' | 'rainbow';
  setSelectedSkin: (skin: 'normal' | 'rainbow') => void;
  tryPurchaseItem: (item: ShopItemProps | AccessoryItemProps) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export function InventoryProvider({ children }: { children: React.ReactNode }) {
  const [purchasedSkins, setPurchasedSkins] = useState<ShopItemProps[]>([
    { name: 'Rainbow', color: 'linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8F00FF)' },
    { name: 'Purple', color: '#9932CC' }, // Brighter purple (Dark Orchid)
  ]);
  const [purchasedAccessories, setPurchasedAccessories] = useState<AccessoryItemProps[]>([]);
  const [selectedSkin, setSelectedSkin] = useState<'normal' | 'rainbow'>('normal');
  const { balance, removeCoins } = useCoinBalance();

  const tryPurchaseItem = (item: ShopItemProps | AccessoryItemProps) => {
    if (!item.price) return;
    
    if (balance < item.price) {
      if (Platform.OS === 'web') {
        alert('Not enough coins!');
      } else {
        Alert.alert('Not enough coins!', 'You need more coins to purchase this item.');
      }
      return;
    }

    const confirmPurchase = () => {
      removeCoins(item.price!);
      if ('Component' in item) {
        setPurchasedAccessories(prev => [...prev, { ...item, price: undefined }]);
      } else {
        setPurchasedSkins(prev => [...prev, { ...item, price: undefined }]);
      }
    };

    if (Platform.OS === 'web') {
      if (confirm(`Would you like to purchase ${item.name} for ${item.price} coins?`)) {
        confirmPurchase();
      }
    } else {
      Alert.alert(
        'Confirm Purchase',
        `Would you like to purchase ${item.name} for ${item.price} coins?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Buy', onPress: confirmPurchase },
        ],
      );
    }
  };

  return (
    <InventoryContext.Provider value={{ 
      purchasedSkins, 
      purchasedAccessories, 
      selectedSkin,
      setSelectedSkin,
      tryPurchaseItem 
    }}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (context === undefined) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
}
