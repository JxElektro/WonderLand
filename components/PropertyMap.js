import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const PropertyMap = ({ location }) => {
  const [isMapReady, setMapReady] = useState(false);

  const onMapLayout = () => {
    setMapReady(true);
  };

  // Verificar si 'location' tiene valores válidos
  if (!location || !location.latitude || !location.longitude) {
    return <Text>Ubicación no válida</Text>;
  }

  try {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          onLayout={onMapLayout}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {isMapReady && (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Cabaña"
            />
          )}
        </MapView>
      </View>
    );
  } catch (error) {
    console.error("Error al mostrar el mapa:", error);
    return <Text>Error al cargar el mapa</Text>;
  }
};

export default PropertyMap;
