import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Geolocation from '@react-native-community/geolocation';
import Geocoding from 'react-native-geocoding';
import GetLocation from 'react-native-get-location'
import Geocoder from 'react-native-geocoding';
const header = () => {




    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);

    useEffect(() => {
        // Get current location
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then((location) => {
                setLocation(location);

                // Reverse geocoding to get address from coordinates
                Geocoding.from({
                    latitude: location.latitude,
                    //21.0298743    75.8034323
                    longitude: location.longitude,
                })

                    .then((json) => {
                        const addressComponent =
                            json.results[0].formatted_address || 'Address not found';
                        setAddress(addressComponent);
                    })
                    
                    .catch((error) => console.warn(error));
            })
            .catch((error) => {
                const { code, message } = error;
                console.warn(code, message);
            });
    }, []);

    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <Pressable style={styles.container}>
                <View style={styles.currentAdress}>
                    <Text style={{ alignItems: "center", width: "15%" }}> <Entypo name="location" size={25} color="#900" /></Text>
                    {location && (
                        <Text style={styles.text}>
                            Latitude: {location.latitude}, Longitude: {location.longitude}
                        </Text>
                    )}
                    {/* {address && <Text >Address: {address}</Text>} */}

                </View>
                <View style={{ width: '20%', alignItems: "flex-end" }}>
                    <Text > <EvilIcons name="user" size={50} color="#900" /></Text>
                </View>
            </Pressable>
            <Pressable style={{ elevation: 5, width: "90%", backgroundColor: "#fff", marginLeft: "5%", display: "flex", flexDirection: "row", borderRadius: 10, justifyContent: "space-around" }}>

                <View style={{ width: "15%", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ alignItems: "center" }}> <EvilIcons name="search" size={45} color="#900" /></Text>
                </View>
                <View style={{ width: "80%" }}>
                    <TextInput
                        label="Serach Product"
                        placeholder="Type something"
                        style={{ width: "80%" }}
                    />
                </View>
            </Pressable>
            
        </SafeAreaView>
    )
}

export default header

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: "90%",
        marginLeft: "5%",
        marginTop: 10,
        marginBottom: 15
    },
    currentAdress: {
        width: '80%',
        color: "white",
        display: "flex",
        flexDirection: "row"
    },

    profileUnderCircle: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        color: "#000",
        alignItems: "flex-end",
        fontSize: 25,
    },
})