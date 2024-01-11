import { Pressable, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProdcutAddScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#ffffff"}}>
    <ScrollView>
     
        <Pressable style={styles.formContainer}>
            <Text style={{ padding: 40, color: "#000", fontSize: 25, fontWeight: "800" ,textAlign:"center",marginTop:70}}>Product Add</Text>
            <View style={styles.formGroup}>
                <TextInput style={styles.input} placeholder="Enter Product Name" 
                />
            </View>
            <View style={styles.formGroup}>
                <TextInput style={styles.input} placeholder="Enter Product Description"
                />
            </View>
            <View style={styles.formGroup}>
                <TextInput style={styles.input} placeholder="Enter Price"                            keyboardType="numeric"
                />
            </View>
            <View style={styles.formGroup}>
                <TextInput style={styles.input} placeholder="Enter Dsicount"  
                />
            </View>
            <View style={styles.formGroup}>
                <TextInput style={styles.input} placeholder="Enter Image"  
                />
            </View>
            <View style={styles.formGroup}>
                <TextInput style={styles.input} placeholder="Enter Multi Images"  
                />
            </View>
            <View style={styles.button}>
                <Text style={{fontSize:20,width:"100%",textAlign:"center",color:"#fff"}}>
                    Submit
                </Text>
            </View>
        </Pressable>
    </ScrollView>
</SafeAreaView>
  )
}

export default ProdcutAddScreen


const styles = StyleSheet.create({
   
    formContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        elevation: 5,
        paddingBottom:80,
        justifyContent:"center",
        

    },
    formGroup: {
        width: "90%",
        display: "flex",
        borderRadius:10,
        flexDirection: "row",
        marginLeft: "5%",
        elevation: 5,
        backgroundColor: "#ffffff",
        height: 60,
        justifyContent: "space-between",
        marginBottom:25
    },
    input: {
        width: "80%",
        height: "100%",
    },
    button:{
        elevation: 5,
        backgroundColor:"#017e40",
        padding:10,
        width:"40%",
        justifyContent:"center",
        marginLeft:"30%",
        borderRadius:10,
        marginTop:5,
    }

})