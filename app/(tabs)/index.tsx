<<<<<<< HEAD
import EventCard from '@/components/EventCard';
import { events } from '@/data/events';
import { FlatList, StyleSheet, Text, View } from 'react-native';
=======
import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { EventCard } from '@/components/EventCard';
import { EVENTS } from '@/constants/events';
>>>>>>> 91dce34db33fdede58b68d0edfab442bc7eca0b9

export default function HomeScreen() {

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.title}>Eventos La Paz 🚀</Text>

      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EventCard
            id={item.id}
            title={item.title}
            location={item.location}
            date={item.date}
          />
        )}
      />
=======
      <View style={styles.headerRow}>
        <Text style={styles.title}>Eventos La Paz 🚀</Text>
        <Pressable onPress={() => router.push('/favorites')} style={styles.favoritesLink}>
          <Text style={styles.favoritesLinkText}>Ver favoritos</Text>
        </Pressable>
      </View>
>>>>>>> 91dce34db33fdede58b68d0edfab442bc7eca0b9

      <FlatList
        data={EVENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 20,
  },
  headerRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
<<<<<<< HEAD
=======
  favoritesLink: {
    backgroundColor: '#1d4ed8',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  favoritesLinkText: {
    color: '#ffffff',
    fontWeight: '600',
  },
>>>>>>> 91dce34db33fdede58b68d0edfab442bc7eca0b9
});
