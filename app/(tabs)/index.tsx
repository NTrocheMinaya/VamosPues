import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Eventos La Paz 🚀</Text>

      <View style={styles.card}>
        <Text style={styles.eventTitle}>Festival de Música</Text>
        <Text>📍 Teatro al Aire Libre</Text>
        <Text>📅 25 Febrero 2026</Text>
      </View>

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
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
