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
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
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


