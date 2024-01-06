import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import TOpHeader from '../components/header';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';




const SingleProduct = () => {

    const images = [
        'https://plyexpert.com/img/Sainikk.jpg',
        'https://plyexpert.com/img/fev.jpg',
        'https://plyexpert.com/img/max2.jpg',
    ];




    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <ScrollView>
                <TOpHeader />

                <Pressable style={styles.container}>
                    <View style={{ width: "100%" }}>
                        <Text style={{ fontSize: 18 }}>Product Name Here </Text>
                        <View style={{ height: 230, width: "100%", marginTop: 20 }}>
                            <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
                                {images.map((image, index) => (
                                    <View key={index} style={styles.slide}>
                                        <Image source={{ uri: image }} style={styles.image} />
                                    </View>
                                ))}
                            </Swiper>
                        </View>
                        <View style={{padding:15,backgroundColor:"#fff",elevation:3}}>
                        <View style={styles.priceBox}>
                             <Text style={{marginTop:2}}><FontAwesome name="inr" size={17} color="#000" /></Text>
                             <Text style={{fontSize:22,color:"#000",fontWeight:"bold",marginLeft:5}}>12,711</Text>
                             <Text  style={{fontSize:20,color:"#000",fontWeight:"bold",marginLeft:10}}>excl,</Text>
                             <Text  style={{fontSize:20,color:"#000",fontWeight:"bold",marginLeft:15}}>GST</Text>
                        </View>
                        <View style={styles.priceBox}>
                             <Text style={{marginTop:2}}><FontAwesome name="inr" size={17} color="#000" /></Text>
                             <Text style={{fontSize:16,color:"#666666",fontWeight:700,marginLeft:5}}>14,711</Text>
                             <Text  style={{fontSize:16,color:"#666666",fontWeight:400,marginLeft:10}}>incl,</Text>
                             <Text  style={{fontSize:16,color:"#666666",fontWeight:400,marginLeft:15}}>GST</Text>
                             <Text style={{fontSize:16,color:"#666666",fontWeight:400,marginLeft:5}}>19,999</Text>
                             <Text style={{fontSize:16,color:"#666666",fontWeight:400,marginLeft:5}}>(25% off)</Text>
                        </View>
                        <View style={styles.priceBox}>
                             <Text style={{marginTop:2}}><FontAwesome name="inr" size={17} color="#000" /></Text>
                             <Text style={{fontSize:16,color:"#666666",fontWeight:700,marginLeft:5}}>14,711</Text>
                             <Text  style={{fontSize:16,color:"#666666",fontWeight:300,marginLeft:10}}>with qunatity discounts</Text>
                        </View>
                        </View>
                        <View style={{padding:5,backgroundColor:"#fff",elevation:3}}>
                           <Text style={{fontWeight:"bold",fontSize:26,color:"#000"}}>Morya Sales and Services </Text>
                           <Text style={{fontWeight:"bold",fontSize:20}}>Wakad Bridge, Pune</Text>
                        </View>
                        <View style={styles.iconRow}>
                             <View style={styles.iconBox}>
                             <Text style={{marginTop:2}}><FontAwesome name="whatsapp" size={30} color="#000" /></Text>
                             <Text style={{fontSize:14}}>WhasApp</Text>
                             </View>
                             <View style={styles.iconBox}>
                             <Text style={{marginTop:2}}><FontAwesome name="phone" size={30} color="#000" /></Text>
                             <Text style={{fontSize:14}}>Phone</Text>
                             </View>
                             <View style={styles.iconBox}>
                             <Text style={{marginTop:2}}><Ionicons name="receipt-outline" size={30} color="#000" /></Text>
                             <Text style={{fontSize:14}}>Get Quote</Text>
                             </View>
                             <View style={styles.iconBox}>
                             <Text style={{marginTop:2}}><EvilIcons name="location" size={35} color="#000" /></Text>
                             <Text style={{fontSize:14}}>Get Direction</Text>
                             </View>
                        </View>
                    </View>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SingleProduct

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: "#000",
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    container: {
        width: "90%",
        marginLeft: "5%",
        marginTop: 20
    },
    priceBox:{
        display:"flex",
        flexDirection:"row",
        width:"90%",
        marginLeft:"5%",
    },
    iconRow:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        marginTop:15,
        paddingBottom:25
    },
    iconBox:{
        width:"25%",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
    }
})