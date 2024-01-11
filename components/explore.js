import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Explore = () => {
    return (
        <Pressable style={styles.container}>
            <View style={styles.boxRow}>
                <View style={styles.box}>
                    <Image source={{ uri: 'https://plyexpert.com/admin/CATEGORY-IMAGES/IMG_6966.JPG' }} style={styles.image} />
                    <Text style={styles.text}>VENEERS</Text>
                </View>
                <View style={styles.box}>
                    <Image source={{ uri: 'https://plyexpert.com/admin/CATEGORY-IMAGES/IMG_7163.jpeg' }} style={styles.image} />
                    <Text style={styles.text}>FLUSH DOOR</Text>
                </View>
                <View style={styles.box}>
                    <Image source={{ uri: 'https://plyexpert.com/admin/CATEGORY-IMAGES/IMG_6878.JPG' }} style={styles.image} />
                    <Text style={styles.text}>LAMINATE ACRYLIC</Text>
                </View>
                <View style={styles.box}>
                    <Image source={{ uri: 'https://plyexpert.com/admin/CATEGORY-IMAGES/IMG_6973.PNG' }} style={styles.image} />
                    <Text style={styles.text}>ADHESIVE AND TAPES</Text>
                </View>
                <View style={styles.box}>
                    <Image source={{ uri: 'https://plyexpert.com/admin/CATEGORY-IMAGES/IMG_6968.JPG' }} style={styles.image} />
                    <Text style={styles.text}>HARDWARE AND FITTINGS</Text>
                </View>
                <View style={styles.box}>
                    <Image source={{ uri: 'https://plyexpert.com/admin/CATEGORY-IMAGES/IMG_6955.JPG' }} style={styles.image} />
                    <Text style={styles.text}>PLYWOOD AND BOARDS</Text>
                </View>
            </View>

        </Pressable>
    )
}

export default Explore

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginLeft: "5%"
    },
    boxRow: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    box: {
        width: "31%",
        elevation: 5,
        backgroundColor: "#fff",
        marginTop: 25,
        height: 190,
        padding: "auto"
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 7,
        marginTop: 7
    },
    text: {
        fontSize: 14.5,
        fontWeight: "bold",
        color: "#000",
        textTransform: "capitalize",
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: "center",
        marginTop: 30
    }
})