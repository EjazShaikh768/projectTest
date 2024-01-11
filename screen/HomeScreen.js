import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView, } from 'react-native-safe-area-context';
import TopHeader from '../components/header';
import Explore from '../components/explore';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {

  const navigation = useNavigation();

  const images = [
    'https://plyexpert.com/img/Sainikk.jpg',
    'https://plyexpert.com/img/fev.jpg',
    'https://plyexpert.com/img/max2.jpg',
  ];


  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
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

      <Explore />


      {/* <ScrollView horizontal={true} style={{ width: "90%", marginLeft: "5%", paddingTop: 30, paddingBottom: 10 }}>
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
      </ScrollView> */}

      <Pressable style={styles.container}>
        <View style={styles.imageBox}>
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{ width: "100%", height: 150 }} />
        </View>
        <View style={styles.contentBox}>
          <Text style={{ fontSize: 17.5, fontWeight: 400, color: "#000" }}>Product Name </Text>
          <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star-half-empty" size={17} color="#000" /></Text>
            <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 3 }}>44,232</Text>
          </View>
          <View style={{ width: "100%", display: "flex", flexDirection: "row", marginTop: 5 }}>
            <Text style={{ marginTop: 5 }} ><FontAwesome name="inr" size={18} color="#000" /></Text>
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#000" }}>11,863</Text>
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
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#000" }}>SUYOG ELECTRONICS</Text>
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
          <Text style={{ fontSize: 17.5, fontWeight: 400, color: "#000" }}>Product Name </Text>
          <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star-half-empty" size={17} color="#000" /></Text>
            <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 3 }}>44,232</Text>
          </View>
          <View style={{ width: "100%", display: "flex", flexDirection: "row", marginTop: 5 }}>
            <Text style={{ marginTop: 5 }} ><FontAwesome name="inr" size={18} color="#000" /></Text>
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#000" }}>11,863</Text>
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
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#000" }}>SUYOG ELECTRONICS</Text>
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
          <Text style={{ fontSize: 17.5, fontWeight: 400, color: "#000" }}>Product Name </Text>
          <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star-half-empty" size={17} color="#000" /></Text>
            <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 3 }}>44,232</Text>
          </View>
          <View style={{ width: "100%", display: "flex", flexDirection: "row", marginTop: 5 }}>
            <Text style={{ marginTop: 5 }} ><FontAwesome name="inr" size={18} color="#000" /></Text>
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#000" }}>11,863</Text>
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
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#000" }}>SUYOG ELECTRONICS</Text>
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
          <Text style={{ fontSize: 17.5, fontWeight: 400, color: "#000" }}>Product Name </Text>
          <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star" size={17} color="#000" /></Text>
            <Text><FontAwesome name="star-half-empty" size={17} color="#000" /></Text>
            <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 3 }}>44,232</Text>
          </View>
          <View style={{ width: "100%", display: "flex", flexDirection: "row", marginTop: 5 }}>
            <Text style={{ marginTop: 5 }} ><FontAwesome name="inr" size={18} color="#000" /></Text>
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#000" }}>11,863</Text>
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
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#000" }}>SUYOG ELECTRONICS</Text>
            <Text style={{ fontSize: 16.5, fontWeight: 400, color: "#000" }}>Miraj Road Sangola</Text>
          </View>
        </View>
      </Pressable>

      <View style={{backgroundColor:"#ffffff",marginTop:65,marginBottom:65,elevation:5,paddingTop:50}}>
        <Pressable style={{ width: "100%", display: "flex", flexDirection: "row" }}>
          <View style={{ width: "40%", backgroundColor: "#ffe6ff", justifyContent: "center", alignItems: "center",display:"flex",flexDirection:"row" }}>
            <Text style={{ fontSize: 35 }}>50%</Text>
            <Text style={{bottom:10,position:"absolute",right:20}}>Off</Text>
          </View>
          <View style={{ width: "60%", backgroundColor: "#ffe6ff" }}>
            <View style={{ width: "100%", height: 60, backgroundColor: "#ffffff", display:"flex",flexDirection:"row",borderTopLeftRadius: 50, borderBottomStartRadius: 50,justifyContent:"center",alignItems:"center" }}>
            <AntDesign name="heart" size={20} color="#000" />
              <Text style={{fontSize:22,fontWeight:"bold",color:"#000",marginLeft:15}}>SALE </Text>
              <Text style={{fontSize:22,fontWeight:"bold",color:"#000"}}> !!!</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={styles.BannerArea}>

          <View style={{ width: "35%" }}>
          <Image source={{ uri: 'https://png.pngtree.com/png-clipart/20230921/original/pngtree-countdown-10-days-left-amplify-your-business-with-megaphone-marketing-vector-png-image_12719372.png' }}
            style={{ width: "100%", height: 150 }} />
          </View>
          <View style={{ width: "65%", backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 22 }}>Deal Of The Day</Text>
            <Text style={{ padding: 10, color: "#000", fontSize: 14 }}>We are providing Branded  Hardware in Lowest Price with Companies Guarantee Certification.</Text>
            <Text style={{ fontSize: 20, backgroundColor: "#ffffff", paddingBottom: 10, paddingTop: 10, paddingLeft: 45, paddingRight: 45, borderRadius: 15, elevation: 3, marginTop: 15 }}>Buy Now</Text>
          </View>
        </Pressable>
      </View>

      <Pressable style={styles.SocialMediaLinks}>
        <View style={styles.iconBox}>
        <FontAwesome name="facebook" size={24} color="#000" />
        </View>
        <View style={styles.iconBox}>
        <AntDesign name="twitter" size={24} color="#000" />
        </View>
        <View style={styles.iconBox}>
        <FontAwesome name="instagram" size={24} color="#000" />
        </View>
        <View style={styles.iconBox}>
        <FontAwesome name="linkedin" size={24} color="#000" />
        </View>
      </Pressable>
      <Pressable style={{width:"90%",marginLeft:"5%"}}>
        <Text onPress={() => navigation.navigate('Wishlist')}>Wish List Page</Text>
        <Text onPress={() => navigation.navigate('WishScreenBlank')}>Wish List Blank Page</Text>
        <Text onPress={() => navigation.navigate('Registration')}>Registration</Text>
        <Text onPress={() => navigation.navigate('LoginScreen')}>Login Screen</Text>
        <Text onPress={() => navigation.navigate('SignInScreen')}>Sign In Screen</Text>
        <Text onPress={() => navigation.navigate('SignUpScreen')}>Sign Up Screen</Text>
        <Text onPress={() => navigation.navigate('SingleProduct')}>Single Product</Text>
        <Text onPress={() => navigation.navigate('ProdcutAddScreen')}>Prodcut Add Screen </Text>
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
    height: 250,
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
    backgroundColor: "#017e40",
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
  },
  BannerArea: {
    width: "100%",
    height: 200,
    marginBottom: 45,
    display: "flex",
    flexDirection: "row",
    marginTop:25
  },
  SocialMediaLinks: {
    width: "90%",
    marginLeft: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconBox: {
    width: "20%",
    elevation: 3,
    backgroundColor: "#fff",
    textAlign: "center",
    elevation:5,
    marginBottom:50,
    height:60,
    justifyContent:"center",
    alignItems:"center"
  }
})