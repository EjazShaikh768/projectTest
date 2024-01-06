import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Geocoder from 'react-native-geocoding';

const LocationToAddress = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Example coordinates (replace with your actual coordinates)
    const currentLatitude = 37.7749;
    const currentLongitude = -122.4194;

    setLatitude(currentLatitude);
    setLongitude(currentLongitude);

    // Initialize the geocoding library with your API key
    Geocoder.init("YOUR_GOOGLE_MAPS_API_KEY");

    // Perform reverse geocoding to get the address from coordinates
    Geocoder.from(currentLatitude, currentLongitude)
      .then((json) => {
        const addressComponent =
          json.results[0].formatted_address || 'Address not found';
        setAddress(addressComponent);
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Latitude: {latitude}</Text>
      <Text style={styles.text}>Longitude: {longitude}</Text>
      <Text style={styles.text}>Address: {address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default LocationToAddress;
