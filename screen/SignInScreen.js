import { Pressable, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = () => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <ScrollView>
                <Pressable style={styles.bannerDarkScreen}>
                    <Image source={{ uri: 'https://plyexpert.com/img/log.png' }}
                        style={{ width: "100%", height: 60, marginBottom: 40 }} />
                </Pressable>
                <Pressable style={styles.formContainer}>
                    <Text style={{ padding: 40, color: "#000", fontSize: 25, fontWeight: "800" }}>Sign In</Text>
                   
                    <View style={styles.formGroup}>
                        <Text style={styles.formIcon}><MaterialCommunityIcons name="email-outline" size={25} color="#fff" /></Text>
                        <TextInput style={styles.input} placeholder="Enter Your Email"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.formIcon}><Feather name="lock" size={25} color="#fff" /></Text>
                        <TextInput style={styles.input} placeholder="Enter Your Mobile Number"                            keyboardType="numeric"
                        />
                    </View>
                   
                    <View style={styles.button}>
                        <Text style={{fontSize:20,width:"100%",textAlign:"center",color:"#fff"}}>
                            Submit
                        </Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around",marginTop:100}}>
                             <Text style={{width:"47%",fontSize:17,fontWeight:500}}>Forgot Password</Text>
                             <Text style={{width:"47%",textAlign:"right",color:"#000",fontSize:19,fontWeight:600}}>Sign Up </Text>
                    </View>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    bannerDarkScreen: {
        backgroundColor: "#e3ecfa",
        height: 300,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    formContainer: {
        width: "90%",
        height: 600,
        marginLeft: "5%",
        backgroundColor: "#f7f5f5",
        marginTop: -70,
        borderTopRightRadius:35,
        borderTopLeftRadius:35,
        elevation: 5,
        paddingBottom:80,
        justifyContent:"center",

    },
    formGroup: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        marginLeft: "5%",
        elevation: 5,
        backgroundColor: "#f7f5f5",
        height: 60,
        justifyContent: "space-between",
        marginBottom:25
    },
    formIcon: {
        width: "15%",
        height: 60,
        backgroundColor: "#fc2137",
        textAlign: "center",
        paddingTop: 15


    },
    input: {
        width: "80%",
        height: "100%",
    },
    button:{
        elevation: 5,
        backgroundColor:"green",
        padding:10,
        width:"40%",
        justifyContent:"center",
        marginLeft:"30%",
        borderRadius:10,
    }

})