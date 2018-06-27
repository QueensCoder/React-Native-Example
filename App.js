import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          apikey={GOOGLE_MAPS_API_KEY}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 10 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    );
  }
}
