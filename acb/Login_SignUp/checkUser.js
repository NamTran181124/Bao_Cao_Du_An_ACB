import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Modal,
  Alert
} from 'react-native';
import axios from 'axios'; // Import axios for making HTTP requests
import { MaterialIcons } from '@expo/vector-icons';
import vantay from '../logo/vtay.png';
import avt from '../logo/chatvoiACB.png';
import hienpass from '../logo/hienpass.png';
const Check_User = ({ navigation }) => {

  
  const [sdt, setsdt] = useState('');
  const [pass, setpassWord] = useState('');
  const [show, setShowpass] = useState(false);
  const anVaHienPass = () => {
    setShowpass(!show);
  };
  const [showModal, setShowModal] = useState(false);

  const handlePress = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleLogin = async () => {
    if (!sdt || !pass) {
      Alert.alert('Thất bại', 'Vui lòng điền đầy đủ thông tin', [
        { text: 'OK'}
      ]);
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.11:3000/students/login', { sdt, password: pass });
      const { user } = response.data;
     
      navigation.navigate('Home', { user });
    } catch (error) {
      
      Alert.alert('Lỗi', 'Tài khoản mật khẩu không chính xác');
    }
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.infor}>
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <View style={{ marginTop: 10 }}>
            <Image
              source={avt}
              style={{ width: 70, height: 70, borderRadius: 50 }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: 'blue', fontSize: 24 }}>Xin Chào</Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ color: 'blue', fontSize: 24 }}>Trần Hữu Nam</Text>
          </View>
        </View>
      </View>
      <View style={styles.thecha}>
        <View style={styles.inputHidden}>
          <TextInput
            style={styles.input}
            value={sdt}
            onChangeText={(number) => setsdt(number)}
            placeholder="Nhập tài khoản / SDT"
            keyboardType = 'numeric'           
          /> 
        </View>
        <View style={styles.inputHidden}>
          <TextInput
            style={styles.input}
            value={pass}
            onChangeText={(text) => setpassWord(text)}
            placeholder="Mật Khẩu"
            secureTextEntry={!show}
          />
          <TouchableOpacity
            onPressIn={() => anVaHienPass(true)}
            onPressOut={() => anVaHienPass(false)}>
            <Image
              source={hienpass}
              style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.DangNhap_VanTay}>
        <View style={styles.btnDangNhap}>
        <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginText}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.vantayy}>
          <TouchableOpacity onPress={handlePress}>
           <MaterialIcons name="fingerprint" size={45} color="black" />
          </TouchableOpacity>

          <Modal visible={showModal} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Xác Thức</Text>
                <Text style={styles.modalText1}>Vui lòng xác thực vân tay</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <View>
                   <Image style={styles.hinhan1} source={vantay} />
                  </View>
                  <View>
                    <Text>Touch sensor</Text>
                  </View>
                </View>
                <View style={styles.huybo}>
                <TouchableOpacity onPress={handleModalClose}>
                  <Text style={styles.closeButton}>HỦY BỎ</Text>
                </TouchableOpacity></View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Quên thông tin đăng nhập?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  huybo:{
    flexDirection:'row',
justifyContent:'flex-end',
  },
  modalContainer: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#999999',

  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 10,
    
    
  },
  modalText1: {
    fontSize: 20,
    marginBottom: 10,
    color:'#DDDDDD'
    
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    justifyContent:'flex-end', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loginText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  infor: {
    width: 300,
    height: 200,
    //backgroundColor: 'red',
    alignItems: 'center',
  },
  inputHidden: {
    width: '90%',
    flexDirection: 'row',
  },
  input: {
    width: '80%',
    height: '100%',
    borderBottomWidth: 1, // Độ rộng của đường gạch dưới
    borderBottomColor: 'black',
    alignItems: 'center',
  },
  thecha: {
    marginTop: 50,
  },

  DangNhap_VanTay: {
    width: '80%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },

  btnDangNhap: {
    width: '85%',
    height: '100%',
    backgroundColor: 'blue',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  hinhan1: {
    width: 50,
    height: 50,
    alignItems: 'center',
    marginRight:20,
  },
});

export default Check_User;
