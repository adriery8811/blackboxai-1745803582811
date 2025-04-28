import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { motion } from 'framer-motion';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre MayChi</Text>
      <motion.Text
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.text}
      >
        MayChi nació de la pasión por la moda futurista y funcional. Nuestra misión es ofrecer prendas
        cómodas, elegantes y sostenibles, integrando tecnología en cada diseño.
      </motion.Text>
      <Image
        source={{ uri: 'https://example.com/imagen_fabrica.jpg' }}
        style={styles.image}
      />
      <Text style={styles.text}>
        Cada colección es pensada en los detalles: patrones geométricos, materiales innovadores y
        cortes vanguardistas. Queremos que quien viste MayChi se sienta parte de un futuro creativo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontFamily: 'Poppins-Bold', marginBottom: 15 },
  text: { fontSize: 16, lineHeight: 24, color: '#333' },
  image: { width: '100%', height: 200, borderRadius: 8, marginVertical: 15 },
});
