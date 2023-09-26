// DetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import PropertyMap from '../components/PropertyMap'; // Asegúrate de que la ruta sea correcta

const DetailsScreen = ({ route }) => {
  const { property } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Header title="Detalles" />
      <ScrollView style={styles.container}>
        <Image source={{ uri: property.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{property.name}</Text>
          <Text style={styles.price}>${property.price}/noche</Text>
          <View style={styles.divider} />
          <Text style={styles.location}>📍 {property.location.name}</Text>
          <Text style={styles.details}>🛏️ {property.bedrooms} Habitaciones - 🚽 {property.bathrooms} Baños</Text>
          <View style={styles.divider} />
          <Text style={styles.descriptionTitle}>Descripción</Text>
          <Text style={styles.description}>{property.description}</Text>
          <View style={styles.divider} />
          <Text style={styles.amenitiesTitle}>Comodidades</Text>
          <Text style={styles.amenities}>{property.amenities.join(' • ')}</Text>
        </View>
        {/* //  <PropertyMap location={property.location} /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 24,
    color: '#555',
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  location: {
    fontSize: 18,
    color: '#666',
  },
  details: {
    fontSize: 18,
    color: '#666',
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  amenitiesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  amenities: {
    fontSize: 16,
    color: '#666',
  },
});

export default DetailsScreen;
