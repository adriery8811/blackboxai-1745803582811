import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MayChi</Text>
      <View style={styles.menu}>
        <TouchableOpacity><Text style={styles.menuItem}>Catálogo</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.menuItem}>About</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.menuItem}>Contacto</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.menuItem}>Carrito</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#00d0ff',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  menu: {
    flexDirection: 'row',
  },
  menuItem: {
    color: '#ffffff',
    marginLeft: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
