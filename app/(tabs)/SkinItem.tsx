import { ThemedText } from "@/components/ThemedText";
import { Pressable, StyleProp, Platform, View } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { ShopItemProps, styles } from "./shop";
import { CoinIcon } from "@/components/ui/CoinIcon";

export const SkinItem: React.FC<ShopItemProps> = ({ name, color, price }) => (
  <Pressable
    style={({ pressed, hovered }): StyleProp<ViewStyle> => [
      styles.shopItem,
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
    <View style={[styles.colorCircle, { backgroundColor: color }]} />
    <ThemedText style={styles.text}>{name}</ThemedText>
    {price && (
      <View style={styles.priceContainer}>
        <CoinIcon size={14} />
        <ThemedText style={styles.price}>{price}</ThemedText>
      </View>
    )}
  </Pressable>
);
