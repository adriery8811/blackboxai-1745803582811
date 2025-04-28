import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { motion } from 'framer-motion';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacto</Text>
      <motion.View
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={styles.form}
      >
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={[styles.input, styles.message]} placeholder="Mensaje" multiline />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </motion.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontFamily: 'Poppins-Bold', marginBottom: 15 },
  form: { marginTop: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  message: { height: 100, textAlignVertical: 'top' },
  button: {
    backgroundColor: '#00d0ff',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: { color: '#fff', fontFamily: 'Poppins-Bold', fontSize: 16 },
});
