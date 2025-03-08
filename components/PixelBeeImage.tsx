import { SKIN_TYPE } from '@/constants/Accessories';
import { ACCESSORY_TYPE } from '@/constants/Accessories';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

interface PixelBeeImageProps {
  variant?: 'large' | 'small';
  skin?: SKIN_TYPE;
  accessory?: ACCESSORY_TYPE;
}

const skinToImageMap: Record<SKIN_TYPE, ImageSourcePropType> = {
  [SKIN_TYPE.NORMAL]: require('@/components/ui/bee-big.png'),
  [SKIN_TYPE.ORANGE]: require('@/components/ui/bee-big.png'), // TODO: Add orange skin
  [SKIN_TYPE.PINK]: require('@/components/ui/bee-big.png'), // TODO: Add pink skin
  [SKIN_TYPE.RAINBOW]: require('@/components/ui/bee-rainbow.png'),
  [SKIN_TYPE.PURPLE]: require('@/components/ui/bee-purple.png'),
};

const accessoryToImageMap: Record<ACCESSORY_TYPE, Record<SKIN_TYPE, ImageSourcePropType>> = {
  [ACCESSORY_TYPE.NONE]: skinToImageMap,
  [ACCESSORY_TYPE.CAT_EARS]: {
    ...skinToImageMap,
    [SKIN_TYPE.NORMAL]: require('@/components/ui/bee-cat.png'),
    [SKIN_TYPE.RAINBOW]: require('@/components/ui/bee-cat-rainbow.png'),
  },
  [ACCESSORY_TYPE.CHEF_HAT]: {
    ...skinToImageMap,
    [SKIN_TYPE.NORMAL]: require('@/components/ui/bee-chef.png'),
    [SKIN_TYPE.RAINBOW]: require('@/components/ui/bee-chef.png'),
  },
  [ACCESSORY_TYPE.FEDORA]: {
    ...skinToImageMap,
    [SKIN_TYPE.NORMAL]: require('@/components/ui/bee-big.png'),
    [SKIN_TYPE.RAINBOW]: require('@/components/ui/bee-rainbow.png'),
  },
  [ACCESSORY_TYPE.NEWS_BOY]: {
    ...skinToImageMap,
    [SKIN_TYPE.NORMAL]: require('@/components/ui/bee-big.png'),
    [SKIN_TYPE.RAINBOW]: require('@/components/ui/bee-rainbow.png'),
  },
};

const mapSkinAndAccessoryToSourceImage = (skin: SKIN_TYPE, accessory: ACCESSORY_TYPE): ImageSourcePropType => {
  // Get the image map for the current accessory, falling back to no accessory if not found
  const imageMap = accessoryToImageMap[accessory] || accessoryToImageMap[ACCESSORY_TYPE.NONE];
  // Get the specific skin variant for this accessory, falling back to normal skin if not found
  return imageMap[skin] || imageMap[SKIN_TYPE.NORMAL];
};

const styles = StyleSheet.create({
  beeImage: {
    width: 64,
    height: 64,
    marginBottom: 30
  },
  largeBee: {
    transform: [{ scale: 2 }],
  },
  smallBee: {
    transform: [{ scale: 0.8 }],
  },
});

export const PixelBeeImage: React.FC<PixelBeeImageProps> = ({ variant = 'large', skin = SKIN_TYPE.NORMAL, accessory = ACCESSORY_TYPE.NONE }) => {
  return (
    <Image 
      source={mapSkinAndAccessoryToSourceImage(skin, accessory)} 
      style={[
        styles.beeImage,
        variant === 'small' ? styles.smallBee : styles.largeBee,
      ]} 
      resizeMode="contain"
    />
  );
};
