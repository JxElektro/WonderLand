import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PropertyCard = ({ property }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: property.image }} style={styles.image} />
      <Text style={styles.name}>{property.name}</Text>
      <Text style={styles.price}>${property.price}/noche</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
  },
  image: {
    height: 150,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: '#555',
  },
});

export default PropertyCard;
