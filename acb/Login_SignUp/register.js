import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios'; // Import axios for making HTTP requests

const Register = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);
  const [newUser, setNewUser] = useState({
    ho: '',
    ten: '',
    sdt: '',
    password: '',
    soTien: '20000',
  });

  const showwpass = () => {
    setShowPass(!showPass);
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://192.168.1.9:3000/students', newUser);
      console.log('Response:', res.data);
      Alert.alert('Thành công', 'Đăng ký tài khoản thành công', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } catch (err) {
      console.log('Error:', err);
      Alert.alert('Lỗi', 'Đã xảy ra lỗi khi thêm sinh viên', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
    setNewUser({
      ho: '',
      ten: '',
      sdt: '',
      password: '',
      soTien :'200000'
      

    });
  };

  const handleInputChange = (field, value) => {
    setNewUser(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const pressDngNhap = () => {
    navigation.navigate('dnhap');
  };

  return (
    <View style={styles.bgImage}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.heading}>Đăng Ký</Text>
          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Họ"
              placeholderTextColor="#000"
              value={newUser.ho}
              onChangeText={text => handleInputChange("ho", text)}
            />
          </View>
          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Tên"
              placeholderTextColor="#000"
              value={newUser.ten}
              onChangeText={text => handleInputChange("ten", text)}
            />
          </View>
          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              placeholderTextColor="#000"
              value={newUser.sdt}
              onChangeText={text => handleInputChange("sdt", text)}
              keyboardType="phone-pad"
            />
          </View>
          <View style={{ flexDirection: 'row', width: '100%', height: 47, borderWidth: 1, marginBottom: 20, borderColor: '#000', borderRadius: 5, alignItems: 'center', paddingLeft: 10, }}>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Mật khẩu"
              value={newUser.password}
              onChangeText={text => handleInputChange("password", text)}
              secureTextEntry={!showPass}
            />
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => showwpass(true)}>
              <Entypo name={showPass ? 'eye' : 'eye-with-line'} size={20} color="black" />
            </TouchableOpacity>
          </View>
          
            <View style={styles.formGroup}>
            {newUser.soTien === '' && ( // Kiểm tra nếu giá trị của soTien không rỗng thì hiển thị trường nhập
    <TextInput
      style={styles.input}
      placeholder="Nhập số tiền"
      placeholderTextColor="#000"
      value={newUser.soTien}
      onChangeText={text => handleInputChange("soTien", text)}
      keyboardType="numeric"
    />
  )}
            </View>
          
          <View>
            <TouchableOpacity onPress={handleRegister} style={{ width: '100%', backgroundColor: '#ecf0f1', height: 40, borderRadius: 10, marginTop: 20, }}>
              <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, }}>
            <Text>Bạn đã có tài khoản</Text>
            <TouchableOpacity onPress={pressDngNhap}>
              <Text style={{ color: 'blue' }}> Đăng nhập ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardBody: {
    padding: 20,
    width: '90%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

export default Register;
