import { ScrollView, StyleSheet, Text, View, ImageBackground, Pressable, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const image = { uri: 'https://images.pexels.com/photos/568948/pexels-photo-568948.jpeg?auto=compress&cs=tinysrgb&w=600' };

const Registration = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#fff",height:"100%"}}>
    <ScrollView>
        <ImageBackground source={image} resizeMode="cover" style={styles.bgContainer}>

            <Text style={{color:"#fff",fontSize:33,fontWeight:"bold"}}>PlyExpert</Text>
            <View style={{position: "absolute",bottom:10,left:20,right: 20,}}>
                 
            <Text style={{color:"#fff",fontSize:22,fontWeight:"bold"}}>Sign Up</Text>
            <Text style={{color:"#fff",fontSize:17,fontWeight:"bold",marginTop:15}}>the action of enrolling for something or of enrolling or employing someone.</Text>
            </View>
        </ImageBackground>
        <Pressable style={styles.formContainer}>
            <View style={{ width: "45%" }}>
                <TextInput style={styles.input} placeholder=" Full Name"
                />
            </View>
            <View style={{ width: "45%" }}>
                <TextInput style={styles.input} placeholder=" Mobile"
                />
            </View>
            <View style={{ width: "100%" ,marginTop:15}}>
                <TextInput style={styles.input} placeholder=" Email "
                />
            </View>
            <View style={{ width: "100%",marginTop:15 }}>
                <TextInput style={styles.input} placeholder=" Address"
                />
            </View>
            <View style={{ width: "45%",marginTop:15 }}>
                <TextInput style={styles.input} placeholder=" Identity Image"
                />
            </View>
            <View style={{ width: "45%",marginTop:15 }}>
                <TextInput style={styles.input} placeholder=" Store Image"
                />
            </View>
            <View style={{ width: "100%",justifyContent:"center",alignItems:"center" }}>
             <Text style={styles.button}> Submit</Text>
            </View>
            <View style={{ width: "100%",justifyContent:"space-around",alignItems:"center" ,display:"flex",flexDirection:"row",marginTop:80}}>
               <Text style={{fontSize:16,color:"#000",fontWeight:500}}>Have An Account ?</Text>
               <Text style={{color:"blue",fontWeight:"600",fontSize:18}}>Sign In</Text>
            </View>
        </Pressable>
    </ScrollView>
</SafeAreaView>
  )
}

export default Registration


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
    button:{
         backgroundColor:"#000",
         elevation:5,
         width:"40%",
         height:45,
         justifyContent:"center",
         textAlign:"center",
         paddingTop:10,
         marginTop:30,
         color:"#fff",
         fontWeight:"700"
    }
})