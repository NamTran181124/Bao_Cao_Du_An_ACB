import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  LayoutAnimation,
} from 'react-native';

import { Ionicons ,FontAwesome6,AntDesign,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';

//logo

import logo_ACB_ONE from '../logo/logo_ACB.png';

import caoheo from '../logo/caheo.jpg';

const LoginScreen = ({ navigation }) => {
  const [isLanguage, setLanguage] = React.useState(false);
  const VN = 'blue';
  const EN = 'blue';
  //console.log('thanh navigation of login :',navigation)
  const handleLoginPress = () => {
    navigation.navigate('Check_User');
  };
  const pressDangki = () => {
    navigation.navigate('dangki');
  };

  return (
    <View style={styles.container}>
      <Image source={caoheo} style={styles.backgroundImage} />
      <View style={styles.img_ACB_language}>
        <View>
             <TouchableOpacity style={{width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:50,backgroundColor:'#999999'}}>
          <MaterialCommunityIcons name="image-multiple" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <Image source={logo_ACB_ONE} />
        </View>
        <View>
          <TouchableOpacity
            style={{
              marginTop: 15,
              backgroundColor: 'white',
              height: 30,
              width: 60,
              borderRadius: 100,
              borderColer: isLanguage ? VN : EN,
              overflow: 'hidden',
            }}
            onPress={() => {
              LayoutAnimation.easeInEaseOut();
              setLanguage(!isLanguage);
            }}>
            <View
              style={{
                height: '100%',
                width: '50%',
                borderRadius: 100,
                backgroundColor: isLanguage ? VN : EN,
                alignSelf: isLanguage ? 'flex-end' : 'flex-start',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 14 }}>
                {isLanguage ? 'VN' : 'EN'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.layOutDN}>
        <TouchableOpacity style={styles.bntDn} onPress={handleLoginPress}>
          <Text style={styles.loginText}>Đăng Nhập</Text>
        </TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.option}>
                       <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name="document-text" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
              <FontAwesome name="line-chart" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Ionicons name="call-outline" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <AntDesign name="enviromento" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.qr}>
            <TouchableOpacity style={{width:60,height:60,justifyContent:'center',alignItems:'center',borderRadius:50,backgroundColor:'#3399FF'}}>
              <MaterialCommunityIcons name="qrcode-scan" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.haicaicuoi}>
          <View style={styles.layOTP}>
           <TouchableOpacity style={{width:40,height:40,justifyContent:'center',alignItems:'center',borderRadius:50,backgroundColor:'#DFECEC'}}>
             <AntDesign name="Safety" size={30} color="black" />
            </TouchableOpacity>
            <Text style={{color:'white',fontSize:20}}>  Lấy OTP</Text>
          </View>
          <View style={styles.dangki}>
            <TouchableOpacity style={{width:40,height:40,justifyContent:'center',alignItems:'center',borderRadius:50,backgroundColor:'#DFECEC'}}
            onPress={pressDangki}
            >
             <FontAwesome6 name="user-pen" size={24} color="black"  />
            </TouchableOpacity>
            <TouchableOpacity onPress={pressDangki}>
            <Text style={{color:'white',fontSize:20}}>  Đăng Ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    padding: 2,
    marginTop: 50,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  loginText: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  img_ACB_language: {
    width: '90%',
    flex: 1,
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  layOutDN: {
    flex: 1,
    width: '90%',
    marginTop: 200,
  },
  option: {
    flexDirection: 'row',
    //backgroundColor: 'orange',
    justifyContent: 'space-between',
    width: '80%',
    borderRadius: 25,
    paddingRight: 20,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'black', // Màu của đổ bóng
    shadowOffset: { width: 2, height: 2 }, // Độ dài và độ cao của đổ bóng
    shadowOpacity: 0.5, // Độ trong suốt của đổ bóng
    shadowRadius: 3, // Bán kính của đổ bóng
    elevation: 5, // Độ nâng của đổ bóng (chỉ áp dụng cho Android)
  },
  bntDn: {
    height: 60,
    borderRadius: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    marginTop: 30,
  },
  qr: {
    marginLeft: 20,
    flexDirection: 'row',
    //justifyContent:'center',
    alignItems: 'center',
  },
layOTP:{
flexDirection:'row',
alignItems:'center',
},
dangki:{
flexDirection:'row',
alignItems:'center',
},
haicaicuoi:{
  marginTop:20,
flexDirection:'row',
justifyContent: 'space-between',
},
});

export default LoginScreen;
