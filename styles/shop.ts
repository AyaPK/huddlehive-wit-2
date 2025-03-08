import { Platform, StyleSheet } from 'react-native';

export const shopStyles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    gap: 8,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#00000011',
    width: '100%',
    maxWidth: 140,
    aspectRatio: 0.85,
    justifyContent: 'center',
    ...(Platform.OS === 'web' ? {
      cursor: 'pointer',
      transition: 'all 200ms ease',
    } : {}),
  },
  colorCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#00000022',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  price: {
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 'auto',
    paddingTop: 4,
  },
});
