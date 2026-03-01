import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: { padding: 20, elevation: 3, backgroundColor: '#FFF', borderRadius: 6 },
});

export default Card;