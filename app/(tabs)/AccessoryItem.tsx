import { ThemedText } from "@/components/ThemedText";
import { Pressable, StyleProp, Platform, View } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { AccessoryItemProps } from "./AccessoryItemProps";
import { CoinIcon } from "@/components/ui/CoinIcon";
import { shopStyles } from "@/styles/shop";

interface AccessoryItemComponentProps extends AccessoryItemProps {
  onPress?: () => void;
}

export const AccessoryItem: React.FC<AccessoryItemComponentProps> = ({ 
  name, 
  Component, 
  color = '#663399', 
  price,
  onPress 
}) => (
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
    <Component size={56} color={color} />
    <ThemedText style={shopStyles.text}>{name}</ThemedText>
    {price && (
      <View style={shopStyles.priceContainer}>
        <CoinIcon size={14} />
        <ThemedText style={shopStyles.price}>{price}</ThemedText>
      </View>
    )}
  </Pressable>
);
