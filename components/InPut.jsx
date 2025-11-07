import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

export default function Input({ value, onChange, placeholder }) {
  return (
    <View>
      <TextInput
        style={[
          styles.input,
          value ? styles.inputActive : null,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    height: 48,
    paddingVertical: 17,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 17.28,
    fontWeight: 400,
    marginHorizontal: 27,
  },
  inputActive: {
    borderColor: '#000000ff',
  },
});
