import { ThemedText } from "@/components/ThemedText";
import { Pressable, StyleProp, Platform, View } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { CoinIcon } from "@/components/ui/CoinIcon";
import { shopStyles } from "@/styles/shop";
import { ShopItemProps } from "./shop";
import { LinearGradient } from 'expo-linear-gradient';

interface SkinItemComponentProps extends ShopItemProps {
  onPress?: () => void;
}

export const SkinItem: React.FC<SkinItemComponentProps> = ({ name, color, price, onPress }) => {
  const isRainbow = name.toLowerCase() === 'rainbow';
  const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8F00FF'] as const;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed, hovered }): StyleProp<ViewStyle> => [
        shopStyles.itemContainer,
        (pressed || hovered) && {
          backgroundColor: '#00000022',
          transform: [{
            scale: Platform.select({
              web: 1.05,
              ios: 0.98,
              default: 1,
            })
          }],
        },
      ]}
    >
      {isRainbow ? (
        Platform.OS === 'web' ? (
          <View 
            style={[
              shopStyles.colorCircle,
              { backgroundImage: `linear-gradient(90deg, ${rainbowColors.join(', ')})` }
            ]} 
          />
        ) : (
          <LinearGradient
            colors={rainbowColors}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={shopStyles.colorCircle}
          />
        )
      ) : (
        <View style={[shopStyles.colorCircle, { backgroundColor: color }]} />
      )}
      <ThemedText style={shopStyles.text}>{name}</ThemedText>
      {price && (
        <View style={shopStyles.priceContainer}>
          <CoinIcon size={14} />
          <ThemedText style={shopStyles.price}>{price}</ThemedText>
        </View>
      )}
    </Pressable>
  );
};
