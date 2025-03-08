import { View, StyleSheet } from 'react-native';

interface CoinIconProps {
  size?: number;
}

export const CoinIcon: React.FC<CoinIconProps> = ({ size = 16 }) => (
  <View style={[styles.coin, { width: size, height: size, borderRadius: size / 2 }]}>
    <View style={[styles.innerCoin, { width: size * 0.8, height: size * 0.8, borderRadius: (size * 0.8) / 2 }]} />
  </View>
);

const styles = StyleSheet.create({
  coin: {
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#B8860B',
  },
  innerCoin: {
    backgroundColor: '#FFC000',
    borderWidth: 1,
    borderColor: '#DAA520',
  },
});
