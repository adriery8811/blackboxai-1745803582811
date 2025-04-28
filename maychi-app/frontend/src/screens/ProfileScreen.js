import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useUser } from '../contexts/UserContext';

export default function ProfileScreen() {
  const { user, logout } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      {user ? (
        <>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput style={styles.input} value={user.name} editable={false} />
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} value={user.email} editable={false} />
          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.text}>Por favor, inicia sesión para ver tu perfil.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 15, fontFamily: 'Poppins-Bold' },
  label: { fontFamily: 'Poppins-Bold', marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#00d0ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontFamily: 'Poppins-Bold' },
  text: { marginTop: 20 },
});
