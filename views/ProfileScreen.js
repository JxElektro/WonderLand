import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Perfil" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
