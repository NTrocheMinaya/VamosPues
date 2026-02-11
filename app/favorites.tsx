import { FlatList, StyleSheet, Text, View } from 'react-native';

import { EventCard } from '@/components/EventCard';
import { EVENTS } from '@/constants/events';
import { useFavorites } from '@/context/favorites-context';

export default function FavoritesScreen() {
  const { favoriteIds } = useFavorites();
  const favoriteEvents = EVENTS.filter((event) => favoriteIds.includes(event.id));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis favoritos ⭐</Text>

      {favoriteEvents.length === 0 ? (
        <Text style={styles.empty}>Aún no marcaste eventos como favoritos.</Text>
      ) : (
        <FlatList
          data={favoriteEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EventCard event={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  empty: {
    color: '#6b7280',
    fontSize: 16,
  },
});
