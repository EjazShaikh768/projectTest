import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView, } from 'react-native-safe-area-context';
import TopHeader from '../components/header';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const HomeScreen = () => {


  const images = [
    'https://plyexpert.com/img/Sainikk.jpg',
    'https://plyexpert.com/img/fev.jpg',
    'https://plyexpert.com/img/max2.jpg',
  ];


  return (
    <SafeAreaView style={{backgroundColor:"#fff"}}>
      <ScrollView >
        <TopHeader />

        <View style={{ height: 210, width: "90%", marginLeft: "5%", marginTop: 20 }}>
          <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
            {images.map((image, index) => (
              <View key={index} style={styles.slide}>
                <Image source={{ uri: image }} style={styles.image} />
              </View>
            ))}
          </Swiper>
        </View>

        <View style={{ width: "90%", marginLeft: "5%" }}>
          <Text style={styles.titles}> Explore </Text>
          <View style={styles.titleBottomLine}></View>
        </View>

        <ScrollView horizontal={true} style={{ width: "90%", marginLeft: "5%", paddingTop: 30, paddingBottom: 10 }}>
          <Pressable style={styles.scrollTabs}>
            <View style={styles.Tabimage}>
              <Image source={{ uri: 'https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png' }}
                style={{ width: "100%", height: "100%", borderRadius: 80 / 2 }} />
            </View>
            <Text style={styles.tabsText}>Plywood</Text>
          </Pressable>
          <Pressable style={styles.scrollTabs}>
            <View style={styles.Tabimage}>
              <Image source={{ uri: 'https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png' }}
                style={{ width: "100%", height: "100%", borderRadius: 80 / 2 }} />
            </View>
            <Text style={styles.tabsText}>Laminate Plywood</Text>
          </Pressable>
          <Pressable style={styles.scrollTabs}>
            <View style={styles.Tabimage}>
              <Image source={{ uri: 'https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png' }}
                style={{ width: "100%", height: "100%", borderRadius: 80 / 2 }} />
            </View>
            <Text style={styles.tabsText}>Laminate Plywood</Text>
          </Pressable>
        </ScrollView>

        <Pressable style={styles.container}>
          <View style={styles.imageBox}>
            <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
              style={{ width: "100%", height: 150 }} />
          </View>
          <View style={styles.contentBox}>
            <Text style={{ fontSize: 18, fontWeight: 600, color: "#000" }}>Product Name </Text>
            <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star-half-empty" size={17} color="#000" /></Text>
              <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 3 }}>44,232</Text>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", marginTop: 5 }}>
              <Text style={{ marginTop: 5 }} ><FontAwesome name="inr" size={18} color="#000" /></Text>
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000" }}>11,863</Text>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Text style={{ marginTop: 4 }}><FontAwesome name="inr" size={12} color="#000" /></Text>
              <Text style={{ fontSize: 14, fontWeight: 200, color: "#000" }}>13,863</Text>
              <Text style={{ fontSize: 14, fontWeight: 200, marginLeft: 5, color: "#000" }}>incl.</Text>
              <Text style={{ fontSize: 14, fontWeight: 200, marginLeft: 5, color: "#000" }}>GST</Text>
              <Text style={{ fontSize: 12, fontWeight: 200, marginTop: 3, marginLeft: 5, color: "#000", textDecorationLine: "line-through" }}>13,863</Text>
              <Text style={{ fontSize: 12, fontWeight: 200, marginTop: 3, marginLeft: 5, color: "#000" }}>(44% off)</Text>
            </View>
            <View style={{ width: "100%" }}>
              <Text style={{ fontSize: 18.5, fontWeight: "bold", color: "#000" }}>SUYOG ELECTRONICS</Text>
              <Text style={{ fontSize: 16.5, fontWeight: 400, color: "#000" }}>Miraj Road Sangola</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={styles.container}>
          <View style={styles.imageBox}>
            <Image source={{ uri: 'https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png' }}
              style={{ width: "100%", height: 150 }} />
          </View>
          <View style={styles.contentBox}>
            <Text style={{ fontSize: 18, fontWeight: 600, color: "#000" }}>Product Name </Text>
            <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star-half-empty" size={17} color="#000" /></Text>
              <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 3, }}>44,232</Text>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", marginTop: 5 }}>
              <Text style={{ marginTop: 5 }} ><FontAwesome name="inr" size={18} color="#000" /></Text>
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000" }}>11,863</Text>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Text style={{ marginTop: 4 }}><FontAwesome name="inr" size={12} color="#000" /></Text>
              <Text style={{ fontSize: 14, fontWeight: 200, color: "#000" }}>13,863</Text>
              <Text style={{ fontSize: 14, fontWeight: 200, marginLeft: 5, color: "#000" }}>incl.</Text>
              <Text style={{ fontSize: 14, fontWeight: 200, marginLeft: 5, color: "#000" }}>GST</Text>
              <Text style={{ fontSize: 12, fontWeight: 200, marginTop: 3, marginLeft: 5, color: "#000", textDecorationLine: "line-through" }}>13,863</Text>
              <Text style={{ fontSize: 12, fontWeight: 200, marginTop: 3, marginLeft: 5, color: "#000" }}>(44% off)</Text>
            </View>
            <View style={{ width: "100%" }}>
              <Text style={{ fontSize: 18.5, fontWeight: "bold", color: "#000" }}>SUYOG ELECTRONICS</Text>
              <Text style={{ fontSize: 16.5, fontWeight: 400, color: "#000" }}>Miraj Road Sangola</Text>
            </View>
          </View>
        </Pressable>

        <Pressable style={styles.container}>
          <View style={styles.imageBox}>
            <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
              style={{ width: "100%", height: 150 }} />
          </View>
          <View style={styles.contentBox}>
            <Text style={{ fontSize: 18, fontWeight: 600, color: "#000" }}>Product Name </Text>
            <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star-half-empty" size={17} color="#000" /></Text>
              <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 3 }}>44,232</Text>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", marginTop: 5 }}>
              <Text style={{ marginTop: 5 }} ><FontAwesome name="inr" size={18} color="#000" /></Text>
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000" }}>11,863</Text>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Text style={{ marginTop: 4 }}><FontAwesome name="inr" size={12} color="#000" /></Text>
              <Text style={{ fontSize: 14, fontWeight: 200, color: "#000" }}>13,863</Text>
              <Text style={{ fontSize: 14, fontWeight: 200, marginLeft: 5, color: "#000" }}>incl.</Text>
              <Text style={{ fontSize: 14, fontWeight: 200, marginLeft: 5, color: "#000" }}>GST</Text>
              <Text style={{ fontSize: 12, fontWeight: 200, marginTop: 3, marginLeft: 5, color: "#000", textDecorationLine: "line-through" }}>13,863</Text>
              <Text style={{ fontSize: 12, fontWeight: 200, marginTop: 3, marginLeft: 5, color: "#000" }}>(44% off)</Text>
            </View>
            <View style={{ width: "100%" }}>
              <Text style={{ fontSize: 18.5, fontWeight: "bold", color: "#000" }}>SUYOG ELECTRONICS</Text>
              <Text style={{ fontSize: 16.5, fontWeight: 400, color: "#000" }}>Miraj Road Sangola</Text>
            </View>
          </View>
        </Pressable>

        <Pressable style={styles.container}>
          <View style={styles.imageBox}>
            <Image source={{ uri: 'https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png' }}
              style={{ width: "100%", height: 150 }} />
          </View>
          <View style={styles.contentBox}>
            <Text style={{ fontSize: 18, fontWeight: 600, color: "#000" }}>Product Name </Text>
            <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star" size={17} color="#000" /></Text>
              <Text><FontAwesome name="star-half-empty" size={17} color="#000" /></Text>
              <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 3 }}>44,232</Text>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", marginTop: 5 }}>
              <Text style={{ marginTop: 5 }} ><FontAwesome name="inr" size={18} color="#000" /></Text>
              <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000" }}>11,863</Text>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Text style={{ marginTop: 4 }}><FontAwesome name="inr" size={12} color="#000" /></Text>
              <Text style={{ fontSize: 14, fontWeight: 200, color: "#000" }}>13,863</Text>
              <Text style={{ fontSize: 14, fontWeight: 200, marginLeft: 5, color: "#000" }}>incl.</Text>
              <Text style={{ fontSize: 14, fontWeight: 200, marginLeft: 5, color: "#000" }}>GST</Text>
              <Text style={{ fontSize: 12, fontWeight: 200, marginTop: 3, marginLeft: 5, color: "#000", textDecorationLine: "line-through" }}>13,863</Text>
              <Text style={{ fontSize: 12, fontWeight: 200, marginTop: 3, marginLeft: 5, color: "#000" }}>(44% off)</Text>
            </View>
            <View style={{ width: "100%" }}>
              <Text style={{ fontSize: 18.5, fontWeight: "bold", color: "#000" }}>SUYOG ELECTRONICS</Text>
              <Text style={{ fontSize: 16.5, fontWeight: 400, color: "#000" }}>Miraj Road Sangola</Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

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
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    marginLeft: "5%",
    marginTop: 25,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 10,
    color: "#000"
  },
  titleBottomLine: {
    height: 3,
    width: "40%",
    backgroundColor: "#000",
    marginTop: 15,
    borderRadius: 50
  },
  imageBox: {
    width: "35%",
    justifyContent: "center"
  },
  contentBox: {
    width: "65%",
    padding: 10,
    color: "#000"

  },
  scrollTabs: {
    alignItems: "center",
    padding: 20,
    marginRight: 15,
  },
  Tabimage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: "#ddd",
    elevation: 5,
  },
  tabsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  titles: {
    fontSize: 25,
    fontWeight: "900",
    marginTop: 30,
    color: "#000"
  }
})