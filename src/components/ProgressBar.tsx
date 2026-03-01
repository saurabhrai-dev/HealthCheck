import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return <View style={[styles.progress, { width: `${progress}%` }]} />;
};

const styles = StyleSheet.create({
  progress: { height: 10, backgroundColor: '#00FF00', borderRadius: 5 },
});

export default ProgressBar;