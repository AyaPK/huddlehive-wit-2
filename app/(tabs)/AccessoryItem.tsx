import { ThemedText } from "@/components/ThemedText";
import { Pressable, StyleProp, Platform, View } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { AccessoryItemProps } from "./AccessoryItemProps";
import { CoinIcon } from "@/components/ui/CoinIcon";
import { shopStyles } from "@/styles/shop";

interface AccessoryItemComponentProps extends AccessoryItemProps {
  onPress?: () => void;
  selected?: boolean;
}

export const AccessoryItem: React.FC<AccessoryItemComponentProps> = ({ 
  name, 
  Component, 
  color = '#663399', 
  price,
  onPress,
  selected 
}) => (
  <Pressable
    onPress={onPress}
    style={({ pressed, hovered }): StyleProp<ViewStyle> => [
      shopStyles.itemContainer,
      selected && {
        backgroundColor: '#00000022',
        borderWidth: 2,
        borderColor: '#007AFF',
      },
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
