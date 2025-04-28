import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function Preloader({ onLoaded }) {
  useEffect(() => {
    const timeout = setTimeout(() => onLoaded(), 2000);
    return () => clearTimeout(timeout);
  }, [onLoaded]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MayChi</Text>
      <ActivityIndicator size="large" color="#00d0ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'
  },
  title: {
    fontSize: 36, color: '#fff', marginBottom: 20, fontFamily: 'Poppins-Bold'
  },
});
