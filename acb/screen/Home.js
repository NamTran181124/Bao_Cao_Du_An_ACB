import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
  Feather,
} from '@expo/vector-icons';
const img = [
  'https://images2.thanhnien.vn/528068263637045248/2024/1/25/fcf9536bfd4eef529987001a4ca77a4b-65a11adce6885880-1706156293014525970033.jpg',
  'https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg',
  'https://images2.thanhnien.vn/528068263637045248/2024/1/25/ac36f48cce98a31df72e0a130074f8f7-65a11af821373880-17061562928371143948676.jpg',
  'https://images2.thanhnien.vn/528068263637045248/2024/1/18/famous-landscape-paintings-05-17055846692081996641102.jpg',
];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Home = ({ user,navigation }) => {
  // const  user  = route.params;
  console.log('màn hình Home',user)
  

  var tienTaoDangCo = user.sotien;
  const [imageActive, setImgactive] = useState(0);
  const [tien, setTien] = useState(tienTaoDangCo);
  const [sotien, setSotien] = useState(false);
  const anSoTien = () => {
    setSotien(!sotien);
  };
  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const sline = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (sline != imageActive) {
        setImgactive(sline);
      }
    }
  };
  // Hàm định dạng số với dấu phẩy cách 3 số
  const formatNumber = (number) => {
    return new Intl.NumberFormat('vi-VN').format(number);
  };

  return (
    <View style={styles.container}>
   
        <View style={styles.thecha}>
          <View style={styles.sodu1}>
            <View style={styles.sodu}>
              <TouchableOpacity onPress={() => anSoTien(true)}>
                <FontAwesome5 name="eye" size={24} color="blue" />
              </TouchableOpacity>
              <Text>Số dư khả dụng</Text>
              <TouchableOpacity></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'blue', fontSize: 18 }}>
              {sotien ? formatNumber(tien) : '******'}{' '}
              </Text>
              <Text>VND</Text>
            </View>
          </View>
          <View style={styles.rework}>
            <View style={styles.rewor}>
              <Text>ACB Rewards</Text>
              <TouchableOpacity>
                <AntDesign name="arrowright" size={24} color="blue" />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ color: 'blue', fontSize: 18 }}>7 điểm</Text>
            </View>
          </View>
        </View>
        <View style={styles.solai}>
          <SafeAreaView style={styles.sline}>
            <View style={styles.wrap}>
              <ScrollView
                onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}>
                {img.map((e, index) => (
                  <Image
                    key={e}
                    resizeMode="stretch"
                    style={styles.wrap}
                    source={{ uri: e }}
                  />
                ))}
              </ScrollView>
              <View style={styles.wrapdot}>
                {img.map((e, index) => (
                  <Text
                    key={e}
                    style={
                      imageActive == index ? styles.dotActive : styles.dot
                    }>
                    ●
                  </Text>
                ))}
              </View>
            </View>
          </SafeAreaView>
        </View>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text>Dịch vụ ngân hàng</Text>
          <Text style={{ color: 'blue' }}>Tổng quan tài chính</Text>
        </View>
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            height: HEIGHT * 0.15,
            justifyContent: 'center',
            marginTop: 10,
            borderRadius: 12,
          }}>
          <View style={{  alignItems: 'center' }}>
            <View
              style={{
                width: '95%',
                flexDirection: 'row',
                justifyContent: 'space-between',
               
              }}>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="bank" size={30} color="blue" />
                </TouchableOpacity>
                <Text>Tài khoản</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="piggy-bank-outline"
                    size={30}
                    color="blue"
                  />
                </TouchableOpacity>

                <Text>Tiết kiệm</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                  <MaterialIcons name="attach-money" size={30} color="blue" />
                </TouchableOpacity>
                <Text>Vay</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginRight: 5,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity>
                  <Feather name="credit-card" size={30} color="blue" />
                </TouchableOpacity>
                <Text>Thẻ</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: '90%', marginTop: 10, marginBottom: 10 }}>
          <Text>Dịch vụ khác</Text>
        </View>
        <ScrollView horizontal={true} style={{ width: '90%' }}>
          <View style={styles.item}>
            <View style={{ width: '85%', alignItems: 'center' }}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 20,
                }}>
                ACBS
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18 }}>
                  Đón đầu cơ hội - Mở Lối đầu tư{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.item}>
            <View style={{ width: '85%' }}>
              <FontAwesome5 name="google-pay" size={35} color="blue" />
              <Text style={{ fontSize: 18 }}>Thanh toán bằng Google pay</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={{ width: '85%', alignItems: 'center' }}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 20,
                }}>
                Sun Life
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18 }}>Chọn mỗi ngày tươi sáng </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.item}>
            <View style={{ width: '85%', alignItems: 'center' }}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 20,
                }}>
                Family
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18 }}>
                  Ưu đãi dành cho gia đình bạn
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    width: WIDTH * 0.3,
    height: HEIGHT * 0.215,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sodu: {
    flexDirection: 'row',
  },
  sodu1: {
    borderRadius: 10,
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#DFECEC',
    flex: 0.6,
  },
  rewor: {
    flexDirection: 'row',
  },
  rework: {
    borderRadius: 10,
    backgroundColor: '#DFECEC',
    flex: 0.38,
    justifyContent: 'center',
  },
  thecha: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  wrap: {
    width: WIDTH * 0.85,
    height: HEIGHT * 0.25,
    borderRadius: 20,
  },
  solai: {
    marginTop: 10,
  },
  wrapdot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 5,
    color: 'white',
  },
});

export default Home;
