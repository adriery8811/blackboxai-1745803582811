import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FashionAssistant() {
  const [recommendation, setRecommendation] = useState('');

  async function getRecommendation() {
    const response = await fetch('http://localhost:3001/api/recommend', {
      method: 'POST',
      body: JSON.stringify({ userPreferences: {} }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    setRecommendation(data.outfit);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Asistente de Moda</Text>
      <Button title="¿Qué me recomiendas hoy?" onPress={getRecommendation} color="#00d0ff" />
      {recommendation ? <Text style={styles.text}>{recommendation}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  text: { marginTop: 10, fontStyle: 'italic' },
});
