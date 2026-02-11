import { StyleSheet, Text, View } from 'react-native';

import { FavoriteButton } from '@/components/FavoriteButton';
import { Event } from '@/constants/events';
import { useFavorites } from '@/context/favorites-context';

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(event.id);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <FavoriteButton isFavorite={favorite} onPress={() => toggleFavorite(event.id)} />
      </View>
      <Text>{event.location}</Text>
      <Text>{event.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    gap: 4,
    marginBottom: 12,
    padding: 15,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  eventTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
