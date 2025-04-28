import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../contexts/CartContext';

export default function CartScreen() {
  const { items, removeFromCart, clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>
      {items.length === 0 ? (
        <Text style={styles.empty}>Tu carrito está vacío.</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name} x {item.quantity}</Text>
              <Text style={styles.itemText}>${(item.price * item.quantity).toFixed(2)}</Text>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text style={styles.remove}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Pagar con Stripe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10, fontFamily: 'Poppins-Bold' },
  empty: { fontSize: 18, marginTop: 20 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
  itemText: { fontSize: 16 },
  remove: { color: 'red' },
  total: { fontSize: 20, marginVertical: 10, fontFamily: 'Poppins-Bold' },
  checkoutButton: {
    backgroundColor: '#00d0ff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  checkoutText: { color: '#fff', fontSize: 18, fontFamily: 'Poppins-Bold' },
});
