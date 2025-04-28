import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function PersonalizedProducts() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Call API for personalized recommendations
    fetch('http://localhost:3001/api/personalized')
      .then(res => res.json())
      .then(data => setSuggestions(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomendaciones Para Ti</Text>
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text>{item.name}</Text>
            <Text>Personalizable</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
});
