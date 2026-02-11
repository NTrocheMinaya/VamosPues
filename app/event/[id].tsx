import { events } from '@/data/events';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams();

  const event = events.find(
    (e) => e.id === Number(id)
  );

  if (!event) {
    return (
      <View style={styles.container}>
        <Text>Evento no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text>📍 {event.location}</Text>
      <Text>📅 {event.date}</Text>
      <Text style={styles.id}>ID del evento: {event.id}</Text>
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
    marginBottom: 15,
  },
  id: {
    marginTop: 20,
    color: 'gray',
  },
});
