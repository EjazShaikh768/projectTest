import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WishScreenBlank = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#fff",height:"100%"}}>
        <ScrollView >
                  <View style={styles.box}>
                    <Text ><MaterialCommunityIcons name="gift-open-outline" size={150} color="#000" /></Text>
                    <Text style={{fontSize:23,color:"#000",fontWeight:600,marginTop:50}}>Your Wish List is Empty</Text>
                    <Text style={{fontWeight:500,marginTop:10}}>Tap heart button to start saving your favoite item</Text>
                    <Text style={{borderWidth:2.5,elevation:1,width:"40%",marginTop:40,height:50,textAlign:"center",paddingTop:10,fontWeight:700,fontSize:17,color:"#000"}}> Add Now</Text>
                  </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default WishScreenBlank

const styles = StyleSheet.create({
    box:{
        width:"90%",
        height:800,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:"5%",
    }
})