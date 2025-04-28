import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SearchBar({ onSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  async function handleChange(text) {
    setQuery(text);
    if (text.length === 0) {
      setSuggestions([]);
      return;
    }
    // Call API for suggestions based on text
    const res = await fetch('http://localhost:3001/api/search-suggest?q=' + encodeURIComponent(text));
    const data = await res.json();
    setSuggestions(data);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Busca productos..."
        value={query}
        onChangeText={handleChange}
        style={styles.input}
      />
      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onSelect(item)}>
              <Text style={styles.suggestion}>{item.name}</Text>
            </TouchableOpacity>
          )}
          style={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  list: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 5,
  },
  suggestion: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});
