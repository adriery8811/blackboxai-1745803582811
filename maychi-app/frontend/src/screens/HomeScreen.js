import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import BackgroundParticles from '../components/BackgroundParticles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <BackgroundParticles />
      <Header />
      <ScrollView style={styles.scroll}>
        <motion.View
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={styles.hero}
        >
          <Text style={styles.heroText}>Descubre la moda futurista con MayChi</Text>
        </motion.View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Productos Destacados</Text>
          {/* Aquí iría un componente de carrousel o grid */}
        </View>
        {/* ...otras secciones promocionales... */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { flex: 1 },
  hero: {
    backgroundColor: '#222222',
    padding: 40,
    alignItems: 'center',
  },
  heroText: {
    fontSize: 28,
    color: '#00d0ff',
    fontFamily: 'Poppins-Bold',
  },
  section: { padding: 20 },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
  },
});
