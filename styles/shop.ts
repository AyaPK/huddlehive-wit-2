import { Platform, StyleSheet } from 'react-native';

export const shopStyles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'rgba(245, 245, 245, 0.7)',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    width: '100%',
    maxWidth: 140,
    aspectRatio: 0.85,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: 'center',
    ...(Platform.OS === 'web' ? {
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'rgba(250, 250, 250, 0.8)',
      },
    } : {}),
  },
  colorCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#00000022',
    overflow: 'hidden',
    ...(Platform.OS === 'web' ? {
      transition: 'transform 200ms ease',
    } : {}),
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
    color: '#2C3333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 'auto',
    paddingTop: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3333',
  },
});
