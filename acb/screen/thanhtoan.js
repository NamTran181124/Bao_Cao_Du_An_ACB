import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {
  Ionicons,
  SimpleLineIcons,
  Entypo,
  EvilIcons,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          height: 45,
          borderRadius: 30,
          backgroundColor: '#eff9f9',
          alignItems: 'center',
          paddingLeft: 10,
        }}>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="blue" />
        </TouchableOpacity>
        <TextInput placeholder="Tìm kiếm" style={{ marginLeft: 10 }} />
      </View>
      <ScrollView style={{ width: '100%', alignItems: 'center',backgroundColor: '#eff9f9',marginTop:20 }}>
      <View style={{  width: '95%',marginBottom:20 }}>
        <Text style={{ fontSize: 19 }}>Danh sách dịch vụ</Text>
      </View>
        <View style={{width: '100%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={styles.item_start}>
              <View style={styles.phoneIcon}>
                <SimpleLineIcons
                  name="screen-smartphone"
                  size={50}
                  color="blue"
                />
                <View style={styles.arrowContainer}>
                  <Entypo
                    name="arrow-with-circle-up"
                    size={24}
                    color="blue"
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
              <Text style={{ padding: 5 }}>Nạp DTDD trả trước</Text>
            </View>
            <View style={styles.item}>
              <View style={styles.phoneIcon}>
                <SimpleLineIcons
                  name="screen-smartphone"
                  size={50}
                  color="blue"
                />
                <View style={styles.arrowContainer}>
                  <EvilIcons name="credit-card" size={24} color="blue" />
                </View>
              </View>
              <Text style={{ padding: 3 }}>Mua mã thẻ cào DTDD</Text>
            </View>
            <View style={styles.item}>
              <View style={styles.phoneIcon}>
                <SimpleLineIcons
                  name="screen-smartphone"
                  size={50}
                  color="blue"
                />
                <View style={styles.arrowContainer}>
                  <Ionicons
                    name="calendar-number-outline"
                    size={24}
                    color="blue"
                  />
                </View>
              </View>
              <Text style={{ padding: 5 }}>DTDD trả sau</Text>
            </View>
            <View style={styles.item_1}>
              <Entypo name="old-phone" size={50} color="blue" />
              <Text style={{ padding: 5 }}>Nạp DTDD trả trước</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={styles.item2}>
              <View style={styles.phoneIcon}>
                <Entypo name="light-bulb" size={60} color="blue" />
                <View
                  style={{
                    position: 'absolute',
                    justifyContent: 'center', // Căn giữa theo chiều ngang
                    alignItems: 'center',
                    marginLeft: 18,
                    marginTop: 10,
                  }}>
                  <MaterialIcons name="electric-bolt" size={24} color="orange" />
                </View>
              </View>
              <Text style={{ padding: 5 }}>Điện</Text>
            </View>
            <View style={styles.item2}>
              <View style={styles.phoneIcon}>
                <Ionicons name="water-outline" size={55} color="blue" />
              </View>
              <Text style={{ padding: 3 }}>Nước</Text>
            </View>
            <View style={styles.item2}>
              <View style={styles.phoneIcon}>
                <Ionicons name="wifi-outline" size={50} color="blue" />
              </View>
              <Text style={{ padding: 5 }}>Internet</Text>
            </View>
            <View style={styles.item2_1}>
             <MaterialCommunityIcons name="television-play" size={50} color="blue" />
              <Text style={{ padding: 5 }}>Truyền hình</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={styles.item_start1}>
              <View style={styles.phoneIcon}>
                <Ionicons name="airplane-outline" size={50} color="blue" />
              </View>
              <Text style={{ padding:2 }}>Vé máy bay</Text>
            </View>
            <View style={styles.item3}>
              <View style={styles.phoneIcon}>
               <Ionicons name="train-outline" size={50} color="blue" />
              </View>
              <Text style={{ padding: 3 }}>Vé tàu lửa</Text>
            </View>
            <View style={styles.item3}>
              <View style={styles.phoneIcon}>
                <Ionicons name="sunny-outline" size={50} color="blue" />
              </View>
              <Text style={{ padding: 5 }}>Bảo hiểm Sun Life</Text>
            </View>
            <View style={styles.item3_1}>
             <Entypo name="open-book" size={50} color="blue" />
              <Text style={{ padding: 5 }}>Học phí</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 10,
  },
  item_start: {
    borderTopLeftRadius: 18,
    backgroundColor: 'white',
    width: '25%',
    height: 130,
    alignItems: 'center',
    paddingTop: 10,
    borderRightWidth: 1,
    borderColor: '#CCCCCC',
  },
  item_start1: {
    backgroundColor: 'white',
    width: '25%',
    height: 130,
    alignItems: 'center',
    paddingTop: 10,
    borderRightWidth: 1,
    borderColor: '#CCCCCC',
    borderBottomLeftRadius: 18,
  },
  item: {
    backgroundColor: 'white',
    width: '25%',
    height: 130,
    alignItems: 'center',
    paddingTop: 10,
    borderRightWidth: 1,
    borderColor: '#CCCCCC',
  },
  item_1: {
    borderTopRightRadius: 18,
    backgroundColor: 'white',
    width: '25%',
    height: 130,
    alignItems: 'center',
    paddingTop: 10,
  },
  item2: {
    backgroundColor: '#eff9f9',
    width: '25%',
    height: 130,
    alignItems: 'center',
    justifyContent:'center',
    paddingTop: 10,
    borderRightWidth: 1,
    borderColor: '#CCCCCC',
  },
  item2_1: {
    justifyContent:'center',
    width: '25%',
    height: 130,
    alignItems: 'center',
    backgroundColor: '#eff9f9',
    paddingTop: 10,
  },
  item3: {
    backgroundColor: 'white',
    width: '25%',
    height: 130,
    alignItems: 'center',
    paddingTop: 10,
    borderRightWidth: 1,
    borderColor: '#CCCCCC',
  },
  item3_1: {
    borderBottomEndRadius: 18,
    backgroundColor: 'white',
    width: '25%',
    height: 130,
    alignItems: 'center',
    paddingTop: 10,
  },
  arrowContainer: {
    position: 'absolute',
    justifyContent: 'center', // Căn giữa theo chiều ngang
    alignItems: 'center',
    marginLeft: 13,
    marginTop: 13,
  },
});
