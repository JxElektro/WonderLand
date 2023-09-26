// HomeScreen.js
import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';
import { mockProperties } from '../assets/mocks/MockProperties';

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = mockProperties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Inicio"
        onSearch={(text) => setSearchTerm(text)}
      />
      <FlatList
        data={filteredProperties}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { property: item })}>
            <PropertyCard property={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
