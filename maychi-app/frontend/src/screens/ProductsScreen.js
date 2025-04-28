import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { FiltersContext } from '../contexts/FiltersContext';
import ProductCard from '../components/ProductCard';
import FilterPanel from '../components/FilterPanel';

export default function ProductsScreen() {
  const { filters } = useContext(FiltersContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulated static products data
    const allProducts = [
      { id: '1', name: 'Polo Futurista', category: 'polo', price: 49.99, image: 'https://via.placeholder.com/150' },
      { id: '2', name: 'Pantalón Neón', category: 'pantalon', price: 79.99, image: 'https://via.placeholder.com/150' },
      { id: '3', name: 'Polera Minimalista', category: 'polera', price: 39.99, image: 'https://via.placeholder.com/150' },
      { id: '4', name: 'Zapatillas LED', category: 'zapatilla', price: 99.99, image: 'https://via.placeholder.com/150' },
    ];

    const filtered = allProducts.filter(p => {
      let ok = true;
      if (filters.category && p.category !== filters.category) ok = false;
      // Additional filters for size, color, price can be added here
      return ok;
    });

    setProducts(filtered);
  }, [filters]);

  return (
    <View style={styles.container}>
      <FilterPanel />
      {products.length === 0 ? (
        <Text style={styles.noProducts}>No hay productos que coincidan con los filtros.</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 10 },
  noProducts: { padding: 20, fontSize: 16, textAlign: 'center' },
});
