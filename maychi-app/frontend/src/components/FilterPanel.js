import React, { useContext } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { useFilters } from '../contexts/FiltersContext';

export default function FilterPanel() {
  const { filters, setFilters } = useContext(FiltersContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Categoría:</Text>
      <Picker
        selectedValue={filters.category}
        onValueChange={(val) => setFilters({ ...filters, category: val })}
        style={styles.picker}
      >
        <Picker.Item label="Todos" value="" />
        <Picker.Item label="Polos" value="polo" />
        <Picker.Item label="Pantalones" value="pantalon" />
        <Picker.Item label="Poleras" value="polera" />
        <Picker.Item label="Zapatillas" value="zapatilla" />
      </Picker>
      {/* Additional filters for size, color, price can be added here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#fafafa' },
  label: { fontFamily: 'Poppins-Bold', fontSize: 16 },
  picker: { height: 50, width: 200 },
});
