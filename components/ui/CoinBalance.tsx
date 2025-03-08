import { View, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { CoinIcon } from './CoinIcon';

interface CoinBalanceProps {
  balance: number;
}

export const CoinBalance: React.FC<CoinBalanceProps> = ({ balance }) => (
  <View style={styles.container}>
    <CoinIcon size={16} />
    <ThemedText style={styles.text}>{balance.toLocaleString()}</ThemedText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#00000011',
    borderRadius: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
});
