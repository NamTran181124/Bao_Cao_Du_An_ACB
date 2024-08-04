
import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Chuyentien = ({user})=> {
  console.log('CHUYEN TIEN :',user);
  //console.log('thanh navigation :',navigation)
  // const chuyenKhoan = () =>{
  //   navigation.navigate('chuyentien');
   
  // }
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ width: '80%', marginBottom: 10, marginTop: 0 }}>
        <Text>Chuyển Tiền đến</Text>
      </View>
      <View style={styles.window}>
        <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => navigation.navigate('chuyentien',{ user })}>
              <MaterialCommunityIcons
                name="bank-outline"
                size={30}
                color="blue"
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 11 }}>Tài khoản ngân hàng</Text>
          </View>
          <View style={styles.item1}>
            <TouchableOpacity>
              <Ionicons name="card-outline" size={30} color="blue" />
            </TouchableOpacity>
            <Text style={{ fontSize: 11 }}>Thẻ ngân hàng</Text>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={styles.item2}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="smart-card-outline"
                size={30}
                color="blue"
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 11 }}>CMND / Hộ chiếu</Text>
          </View>
          <View style={styles.item3}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="screen-smartphone"
                size={30}
                color="blue"
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 11 }}>Tài khoản ngân hàng</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          marginBottom: 10,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Danh sách người nhận</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
         // flex: 1,
          backgroundColor: 'white',
          width: '90%',
          height:'60%',
          //alignItems: 'center',
        }}>
        <ScrollView
         style={{ width: '90%' }}>
        <TouchableOpacity style={{borderBottomWidth:1}}>
          <View style={{flexDirection:'row' ,marginTop:10,marginBottom:10}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <FontAwesome name="user-circle" size={24} color="black" />
            </View>
            <View style={{flex:3}}>
              <Text>TRAN HUU NAM</Text>
              <Text>ACB - Ngân hàng Á Châu</Text>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <FontAwesome name="bank" size={15} color="blue" />
                </View>
                <View style={{marginLeft:10}}>                 
                  <Text>28125097</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{borderBottomWidth:1}}>
          <View style={{flexDirection:'row' ,marginTop:10,marginBottom:10}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <FontAwesome name="user-circle" size={24} color="black" />
            </View>
            <View style={{flex:3}}>
              <Text>TRAN HUU NAM</Text>
              <Text>ACB - Ngân hàng Á Châu</Text>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <FontAwesome name="bank" size={15} color="blue" />
                </View>
                <View style={{marginLeft:10}}>                 
                  <Text>28125097</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{borderBottomWidth:1}}>
          <View style={{flexDirection:'row' ,marginTop:10,marginBottom:10}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <FontAwesome name="user-circle" size={24} color="black" />
            </View>
            <View style={{flex:3}}>
              <Text>TRAN HUU NAM</Text>
              <Text>ACB - Ngân hàng Á Châu</Text>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <FontAwesome name="bank" size={15} color="blue" />
                </View>
                <View style={{marginLeft:10}}>                 
                  <Text>28125097</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{borderBottomWidth:1}}>
          <View style={{flexDirection:'row' ,marginTop:10,marginBottom:10}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <FontAwesome name="user-circle" size={24} color="black" />
            </View>
            <View style={{flex:3}}>
              <Text>TRAN HUU NAM</Text>
              <Text>ACB - Ngân hàng Á Châu</Text>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <FontAwesome name="bank" size={15} color="blue" />
                </View>
                <View style={{marginLeft:10}}>                 
                  <Text>28125097</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{borderBottomWidth:1}}>
          <View style={{flexDirection:'row' ,marginTop:10,marginBottom:10}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <FontAwesome name="user-circle" size={24} color="black" />
            </View>
            <View style={{flex:3}}>
              <Text>TRAN HUU NAM</Text>
              <Text>ACB - Ngân hàng Á Châu</Text>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <FontAwesome name="bank" size={15} color="blue" />
                </View>
                <View style={{marginLeft:10}}>                 
                  <Text>28125097</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{borderBottomWidth:1}}>
          <View style={{flexDirection:'row' ,marginTop:10,marginBottom:10}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <FontAwesome name="user-circle" size={24} color="black" />
            </View>
            <View style={{flex:3}}>
              <Text>TRAN HUU NAM</Text>
              <Text>ACB - Ngân hàng Á Châu</Text>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <FontAwesome name="bank" size={15} color="blue" />
                </View>
                <View style={{marginLeft:10}}>                 
                  <Text>28125097</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        </ScrollView>
        
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  window: {
    backgroundColor: 'white',
    width: '90%',
    height: '25%',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ecf0f1',
  },
  row1: {
    flexDirection: 'row',
    flex: 1,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderEndWidth: 1,
    borderColor: '#ecf0f1',
  },
  item1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderEndWidth: 1,
    borderColor: '#ecf0f1',
  },
  item3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Chuyentien;