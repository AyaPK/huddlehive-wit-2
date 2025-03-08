import { ThemedText } from "@/components/ThemedText";
import { Pressable, StyleProp, Platform, View } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { styles } from "./accessories";
import { AccessoryItemProps } from "./AccessoryItemProps";
import { CoinIcon } from "@/components/ui/CoinIcon";

export const AccessoryItem: React.FC<AccessoryItemProps> = ({ name, Component, color = '#663399', price }) => (
  <Pressable
    style={({ pressed, hovered }): StyleProp<ViewStyle> => [
      styles.accessoryItem,
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
    <Component size={64} color={color} />
    <ThemedText style={styles.text}>{name}</ThemedText>
    {price && (
      <View style={styles.priceContainer}>
        <CoinIcon size={14} />
        <ThemedText style={styles.price}>{price}</ThemedText>
      </View>
    )}
  </Pressable>
);
