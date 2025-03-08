import { ThemedText } from "@/components/ThemedText";
import { Pressable, StyleProp, Platform, View } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { CoinIcon } from "@/components/ui/CoinIcon";
import { shopStyles } from "@/styles/shop";
import { ShopItemProps } from "./shop";

export const SkinItem: React.FC<ShopItemProps> = ({ name, color, price }) => (
  <Pressable
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
    <View style={[shopStyles.colorCircle, { backgroundColor: color }]} />
    <ThemedText style={shopStyles.text}>{name}</ThemedText>
    {price && (
      <View style={shopStyles.priceContainer}>
        <CoinIcon size={14} />
        <ThemedText style={shopStyles.price}>{price}</ThemedText>
      </View>
    )}
  </Pressable>
);
