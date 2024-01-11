import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Wishlist = () => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <ScrollView>
                <Pressable style={styles.Tabrow}>
                    <View style={{ backgroundColor: "#000", width: "40%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#fff", fontWeight: "500", fontSize: 18 }}>All Item</Text>
                    </View>
                    <View style={{
                        width: "40%", borderWidth: 4, borderColor: "#000", height: "100%", justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{ color: "#000", fontWeight: "500", fontSize: 18 }}>Boards</Text>
                    </View>
                </Pressable>

                <Pressable style={styles.productRow}>
                    <View style={styles.productImage}>
                        <Image source={{ uri: 'https://plyexpert.com/admin/ALL-PRODUCTS-IMAGES/IMG_6885.PNG' }}
                            style={styles.images} />
                    </View>
                    <View style={styles.productContent}>
                        <Text style={styles.ProductName}>hardware-nailsand Test</Text>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Size :</Text>
                            <Text style={styles.Productdetails}>10</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Color :</Text>
                        <Text style={styles.Productdetails}>pink</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Material :</Text>
                        <Text style={styles.Productdetails}>sheet</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Rate :</Text>
                        <Text style={styles.Productdetails}>200</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Quantity :</Text>
                        <Text style={styles.Productdetails}>1</Text>
                        </View>
                        <View style={styles.bottomRow}>
                            <Text style={styles.price}>  <FontAwesome name="inr" size={17} color="#000" /> 200 /-</Text>
                            <Text style={styles.buyBtn}>Add to Bag</Text>
                        </View>
                    </View>
                </Pressable>
                <View style={styles.border}></View>
                <Pressable style={styles.productRow}>
                    <View style={styles.productImage}>
                        <Image source={{ uri: 'https://plyexpert.com/admin/ALL-PRODUCTS-IMAGES/manage.jpg' }}
                            style={styles.images} />
                    </View>
                    <View style={styles.productContent}>
                        <Text style={styles.ProductName}>hardware-handle</Text>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Size :</Text>
                            <Text style={styles.Productdetails}>10</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Color :</Text>
                        <Text style={styles.Productdetails}>pink</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Material :</Text>
                        <Text style={styles.Productdetails}>sheet</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Rate :</Text>
                        <Text style={styles.Productdetails}>200</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Quantity :</Text>
                        <Text style={styles.Productdetails}>1</Text>
                        </View>
                        <View style={styles.bottomRow}>
                            <Text style={styles.price}>  <FontAwesome name="inr" size={17} color="#000" /> 200 /-</Text>
                            <Text style={styles.buyBtn}>Add to Bag</Text>
                        </View>
                    </View>
                </Pressable>
                <View style={styles.border}></View>
                <Pressable style={styles.productRow}>
                    <View style={styles.productImage}>
                        <Image source={{ uri: 'https://plyexpert.com/admin/ALL-PRODUCTS-IMAGES/social.jpg' }}
                            style={styles.images} />
                    </View>
                    <View style={styles.productContent}>
                        <Text style={styles.ProductName}>hardware-hinges Test</Text>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Size :</Text>
                            <Text style={styles.Productdetails}>10</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Color :</Text>
                        <Text style={styles.Productdetails}>pink</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Material :</Text>
                        <Text style={styles.Productdetails}>sheet</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Rate :</Text>
                        <Text style={styles.Productdetails}>200</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Quantity :</Text>
                        <Text style={styles.Productdetails}>1</Text>
                        </View>
                        <View style={styles.bottomRow}>
                            <Text style={styles.price}>  <FontAwesome name="inr" size={17} color="#000" /> 200 /-</Text>
                            <Text style={styles.buyBtn}>Add to Bag</Text>
                        </View>
                    </View>
                </Pressable>
                <View style={styles.border}></View>
                <Pressable style={styles.productRow}>
                    <View style={styles.productImage}>
                        <Image source={{ uri: 'https://plyexpert.com/admin/ALL-PRODUCTS-IMAGES/slide5.png' }}
                            style={styles.images} />
                    </View>
                    <View style={styles.productContent}>
                        <Text style={styles.ProductName}>hardware-certain-sockets Test</Text>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Size :</Text>
                            <Text style={styles.Productdetails}>10</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Color :</Text>
                        <Text style={styles.Productdetails}>pink</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Material :</Text>
                        <Text style={styles.Productdetails}>sheet</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Rate :</Text>
                        <Text style={styles.Productdetails}>200</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Quantity :</Text>
                        <Text style={styles.Productdetails}>1</Text>
                        </View>
                        <View style={styles.bottomRow}>
                            <Text style={styles.price}>  <FontAwesome name="inr" size={17} color="#000" /> 200 /-</Text>
                            <Text style={styles.buyBtn}>Add to Bag</Text>
                        </View>
                    </View>
                </Pressable>
                <View style={styles.border}></View>
                <Pressable style={styles.productRow}>
                    <View style={styles.productImage}>
                        <Image source={{ uri: 'https://plyexpert.com/admin/ALL-PRODUCTS-IMAGES/IMG_6968.JPG' }}
                            style={styles.images} />
                    </View>
                    <View style={styles.productContent}>
                        <Text style={styles.ProductName}>HETTICH DRAWER CHANNEL</Text>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Size :</Text>
                            <Text style={styles.Productdetails}>10</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Color :</Text>
                        <Text style={styles.Productdetails}>pink</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Material :</Text>
                        <Text style={styles.Productdetails}>sheet</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Rate :</Text>
                        <Text style={styles.Productdetails}>200</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Quantity :</Text>
                        <Text style={styles.Productdetails}>1</Text>
                        </View>
                        <View style={styles.bottomRow}>
                            <Text style={styles.price}>  <FontAwesome name="inr" size={17} color="#000" /> 200 /-</Text>
                            <Text style={styles.buyBtn}>Add to Bag</Text>
                        </View>
                    </View>
                </Pressable>
                <View style={styles.border}></View>
                <Pressable style={styles.productRow}>
                    <View style={styles.productImage}>
                        <Image source={{ uri: 'https://plyexpert.com/admin/ALL-PRODUCTS-IMAGES/IMG_6885.PNG' }}
                            style={styles.images} />
                    </View>
                    <View style={styles.productContent}>
                        <Text style={styles.ProductName}>Tapes Test</Text>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Size :</Text>
                            <Text style={styles.Productdetails}>10</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Color :</Text>
                        <Text style={styles.Productdetails}>pink</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Material :</Text>
                        <Text style={styles.Productdetails}>sheet</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Rate :</Text>
                        <Text style={styles.Productdetails}>200</Text>
                        </View>
                        <View style={styles.detailsRow}>
                            <Text style={styles.ProductdetailsLabel}>Quantity :</Text>
                        <Text style={styles.Productdetails}>1</Text>
                        </View>
                        <View style={styles.bottomRow}>
                            <Text style={styles.price}>  <FontAwesome name="inr" size={17} color="#000" /> 200 /-</Text>
                            <Text style={styles.buyBtn}>Add to Bag</Text>
                        </View>
                    </View>
                </Pressable>
                <View style={styles.border}></View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Wishlist

const styles = StyleSheet.create({
    Tabrow: {
        width: "90%",
        marginLeft: "5%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30
    },
    border:{
        height:0.7,
        backgroundColor:"#000",
        width:"100%",
        marginTop:10
    },
    productRow: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
        height: 250,
        marginLeft:"2.5%"
    },
    productImage: {
        width: "40%",
        padding: 10,
        height: "100%",
    },
    images: {
        width: "100%",
        height: 230
    },
    productContent: {
        width: "60%",
    },
    ProductName: {
        color: "#000",
        fontSize: 17,
        fontWeight:"500",
        textTransform:"capitalize",
    },
    detailsRow: {
        display: "flex",
        flexDirection: "row"
    },
    Productdetails: {
        fontSize: 15.5,
        marginLeft: 15
    },
    ProductdetailsLabel: {
        fontSize: 16,
        fontWeight:"500",
        color: "#000",
        width:"40%"
    },
    bottomRow: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        bottom: 5,
        left: 5,
        right: 5,
        height: 50
    },
    price: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        paddingTop: 10,
        color:"#000"
    },
    buyBtn: {
        width: "50%",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        paddingTop: 10,
        fontWeight: "500",
        fontSize: 17,
        elevation:4
    }
})