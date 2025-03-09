import React, { createContext, useContext, useState } from 'react';
import { AccessoryItemProps } from '@/app/(tabs)/AccessoryItemProps';
import { ShopItemProps } from '@/app/(tabs)/shop';
import { Alert, Platform } from 'react-native';
import { useCoinBalance } from './CoinBalanceContext';
import { ACCESSORY_TYPE, SKIN_TYPE } from '@/constants/Accessories';

interface InventoryContextType {
  purchasedSkins: ShopItemProps[];
  purchasedAccessories: AccessoryItemProps[];
  selectedSkin: SKIN_TYPE;
  setSelectedSkin: (skin: SKIN_TYPE) => void;
  selectedAccessory: ACCESSORY_TYPE;
  setSelectedAccessory: (accessory: ACCESSORY_TYPE) => void;
  tryPurchaseItem: (item: ShopItemProps | AccessoryItemProps) => void;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export function InventoryProvider({ children }: { children: React.ReactNode }) {
  const [purchasedSkins, setPurchasedSkins] = useState<ShopItemProps[]>([
    { name: SKIN_TYPE.NORMAL, color: '#FFFFFF' },
    { name: SKIN_TYPE.RAINBOW  , color: 'linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8F00FF)' },
    { name: SKIN_TYPE.PURPLE, color: '#9932CC' }, // Brighter purple (Dark Orchid)
  ]);
  const [purchasedAccessories, setPurchasedAccessories] = useState<AccessoryItemProps[]>([]);
  const [selectedSkin, setSelectedSkin] = useState<SKIN_TYPE>(SKIN_TYPE.NORMAL);
  const [selectedAccessory, setSelectedAccessory] = useState<ACCESSORY_TYPE>(ACCESSORY_TYPE.NONE);
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
      selectedAccessory,
      setSelectedAccessory,
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
