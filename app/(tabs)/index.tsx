import EventCard from '@/components/EventCard';
import { events } from '@/data/events';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
