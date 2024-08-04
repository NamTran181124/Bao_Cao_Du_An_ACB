import * as React from 'react';
import { Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Feather,
  AntDesign,
  Ionicons,
  Entypo,
  FontAwesome,
} from '@expo/vector-icons';

import Login from './Login_SignUp/Login';
import Check_User from './Login_SignUp/checkUser';
import dangnhap from './Login_SignUp/checkUser';
import dangki from './Login_SignUp/register';
import Home from './screen/Home';
import qr from './screen/qr';
import Chuyentien from './screen/chuyentien';
import thanhToan from './screen/thanhtoan';
import Chuyenkhoan from './function/chuyentien';
import thongbao from './function/thongbao';
//Logo Ngân hàng

const CustomHeader = () => {
  
  return(
  <View>
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={{ marginLeft: 20, alignItems: 'center' }}>
        <Image
          source={require('./logo/logogo.png')}
          style={{ width: 170, height: 40, alignItems: 'center' }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 12, alignItems: 'center' }}>
        <Image
          source={require('./logo/chatvoiACB.png')}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 12, alignItems: 'center' }}>
        <Image
          source={require('./logo/logoutu.png')}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
    </View>
  </View>
  );
};
const CustomHeader_Home = ({ho,ten,id}) => {
  const navigation = useNavigation();

  const handMessagePress = () => {
    navigation.navigate('thongbao',{id});
  };
  return(
  <View style={{ flexDirection:'row',justifyContent:'space-between',width:350 }}>
    <View style={{ flexDirection: 'row' ,alignItems:'center' }}>
      <View>
        <FontAwesome name="user-circle-o" size={40} color="aqua" />
      </View>
      <View>
        <Text> Xin Chào</Text>
        <Text style={{fontSize:20,fontWeight:'bold'}}> {ho} {ten} </Text>
      </View>
      
    </View>
      <View style={{ flexDirection: 'row' ,alignItems:'center' }}>
      <TouchableOpacity style={{ marginLeft: 12, alignItems: 'center' }}>
        <Image
          source={require('./logo/chatvoiACB.png')}
          style={{ width: 40, height: 40 ,borderRadius:50}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 12, alignItems: 'center' ,backgroundColor:'#DFECEC' ,borderRadius:50}} onPress={handMessagePress}>
        <Ionicons name="notifications-outline" size={25} color="black" />
      </TouchableOpacity>
    </View>
  </View>
);
};
const CustomHeader_ChuyenTien = () => (
  <View style={{ flexDirection:'row',justifyContent:'center',width:350 }}>
    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize
        :24,justifyContent:'center'}}> Chuyển khoản</Text> 
    </View>
      <View style={{ flexDirection: 'row' ,alignItems:'center' }}>
      <TouchableOpacity style={{ marginLeft: 50, alignItems: 'center' }}>
        <Image
          source={require('./logo/chatvoiACB.png')}
          style={{ width: 40, height: 40 ,borderRadius:50}}
        />
      </TouchableOpacity>

    </View>
  </View>
);



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Login_SignUp() {
  return (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
function HomeACB({ route }) {
  const { user } = route.params;
  console.log('user',user);
  return (
    <Tab.Navigator>
      <Tab.Screen
  name="Trang Chủ"
  options={{
    headerTitle: () => <CustomHeader_Home ho={user.ho} ten={user.ten} id={user.id_user} />,
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="home" color={color} size={size} />
    ),
  }}
>
  {() => <Home user={user} />}
</Tab.Screen>

      <Tab.Screen
        name="QR Code"
        component={qr}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={size}
            />
          ),
        }}
      />      
      <Tab.Screen
        name="Chuyển Tiền"
        
        options={{
          headerTitle: () => <CustomHeader_ChuyenTien />,
          tabBarIcon: ({ color, size }) => {
            return (
              <View
                style={{
                  top: Platform.OS == 'ios' ? -10 : -20,
                  width: Platform.OS == 'ios' ? 50 : 60,
                  height: Platform.OS == 'ios' ? 50 : 60,
                  borderRadius: Platform.OS == 'ios' ? 25 : 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                }}>
                <Feather name="repeat" size={24} color={color} />
              </View>
            );
          },
        }}
      >
          {() => <Chuyentien user={user} />}
        </Tab.Screen>
      <Tab.Screen
        name="Thanh Toán"
        component={Chuyentien}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="wallet" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Thêm"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={Login_SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeACB}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="dangki"
          component={dangki}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Check_User"
          component={Check_User}
          options={{
            headerTitle: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="dnhap"
          component={dangnhap}
           options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="chuyentien"
          component={Chuyenkhoan}
           options={{ headerShown: true }}
        />
        <Stack.Screen
          name="thongbao"
          component={thongbao}
           options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
