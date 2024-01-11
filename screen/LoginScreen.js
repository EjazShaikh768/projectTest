import { ScrollView, StyleSheet, Text, View, ImageBackground, Pressable, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';




const image = { uri: 'https://images.pexels.com/photos/376533/pexels-photo-376533.jpeg?auto=compress&cs=tinysrgb&w=600' };
const LoginScreen = () => {


    const route = useRoute();

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
            <ScrollView>
                <ImageBackground source={image} resizeMode="cover" style={styles.bgContainer}>

                    <Text style={{ color: "#fff", fontSize: 40, fontWeight: "bold", textShadowRadius: 25 }}>PlyExpert</Text>
                    <View style={{ position: "absolute", bottom: 10, left: 20, right: 20, }}>
                        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold", textShadowRadius: 25 }}>Sign In</Text>
                        <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold", marginTop: 15 }}>the action of enrolling for something or of enrolling or employing someone.</Text>
                    </View>
                </ImageBackground>
                <Pressable style={styles.formContainer}>

                    <View style={{ width: "100%", marginTop: 15 }}>
                        <TextInput style={styles.input} placeholder=" Email "
                        />
                    </View>
                    <View style={{ width: "100%", marginTop: 15 }}>
                        <TextInput style={styles.input} placeholder=" Password"
                        />
                    </View>
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={styles.button}> Submit</Text>
                    </View>
                    <View style={{ width: "100%", justifyContent: "space-around", alignItems: "center", display: "flex", flexDirection: "row", marginTop: 80 }}>
                        <Text style={{ fontSize: 16, color: "#000", fontWeight: 500 }}>Don't Have An Account ?</Text>
                        <Text  style={{ color: "#328da8", fontWeight: "600", fontSize: 18, textShadowRadius: 3 }}>Sign Up</Text>
                    </View>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    bgContainer: {
        width: "100%",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: "5%",
        paddingTop: 40
    },
    input: {
        borderBottomWidth: 0.5,

    },
    button: {
        backgroundColor: "#000",
        elevation: 5,
        width: "40%",
        height: 45,
        justifyContent: "center",
        textAlign: "center",
        paddingTop: 8,
        marginTop: 30,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    }
})