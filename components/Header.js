// Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Header = ({ title, onButtonPress, onSearch }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {onSearch && (
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#ccc"
          onChangeText={onSearch}
        />
      )}
      {onButtonPress && (
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>Botón</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default Header;
