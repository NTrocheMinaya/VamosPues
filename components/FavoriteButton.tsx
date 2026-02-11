import { Pressable, StyleSheet, Text } from 'react-native';

type FavoriteButtonProps = {
  isFavorite: boolean;
  onPress: () => void;
};

export function FavoriteButton({ isFavorite, onPress }: FavoriteButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.button, isFavorite ? styles.buttonActive : styles.buttonInactive]}>
      <Text style={styles.icon}>{isFavorite ? '★' : '☆'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buttonActive: {
    backgroundColor: '#f59e0b',
  },
  buttonInactive: {
    backgroundColor: '#d1d5db',
  },
  icon: {
    color: '#111827',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
