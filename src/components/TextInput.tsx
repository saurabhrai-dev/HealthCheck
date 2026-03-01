import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ ...props }) => {
  return <RNTextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: { padding: 10, borderColor: '#ccc', borderWidth: 1, borderRadius: 5 },
});

export default TextInput;