<<<<<<< HEAD
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  id: number;
  title: string;
  location: string;
  date: string;
};

export default function EventCard({ id, title, location, date }: Props) {
  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/event/[id]",
          params: { id},
        })
      }
    >
      <Text style={styles.eventTitle}>{title}</Text>
      <Text>📍 {location}</Text>
      <Text>📅 {date}</Text>
    </Pressable>
=======
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
>>>>>>> 91dce34db33fdede58b68d0edfab442bc7eca0b9
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
<<<<<<< HEAD
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});


=======
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
>>>>>>> 91dce34db33fdede58b68d0edfab442bc7eca0b9
