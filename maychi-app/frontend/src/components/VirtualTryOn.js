import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VirtualTryOn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prueba Virtual (AR) - Próximamente</Text>
      {/* Aquí se integraría la cámara y modelos 3D */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontFamily: 'Poppins-Bold', color: '#00d0ff' },
});
