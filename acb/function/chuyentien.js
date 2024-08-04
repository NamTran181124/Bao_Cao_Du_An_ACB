import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { TextInputMask } from "react-native-masked-text";
import { FontAwesome6 } from "@expo/vector-icons";
export default function App({ route }) {
  const idng_chuyen = route.params.user.id_user;
  const tiennnnn = route.params.user.sotien;
  const sotaikhoanDangNhap = route.params.user.sdt;
  const hoTenNgChuyen = `${route.params.user.ho} ${route.params.user.ten}`;
  //console.log('sdsdhgijdgfhdsf',sotaikhoanDangNhap)

  const [sotaikhoan, setSotaikhoan] = useState("");
  const [sotien, setSoTien] = useState("");
  const [tenNguoiNhan, setTenNguoiNhan] = useState("");
  const [noidungck, setNoiDungChuyenKhoan] = useState("");
  //------------//
  const [idng_nhan, setIdng_nhan] = useState("");
  const [stk, setSTK] = useState("");
  const handleInputChange = async (inputValue) => {
    setSotaikhoan(inputValue);

    try {
      const response = await axios.get(
        `http://192.168.1.9:3000/students/${inputValue}`
      );

      const data = response.data;
      console.log("datassssssss", data);
      var idng_nhan = data.user.id_user;
      var stk = data.user.stk;
      setIdng_nhan(idng_nhan);
      setSTK(stk);

      if (data) {
        const hoTen = `${data.user.ho} ${data.user.ten}`;
        const noidung = `${hoTenNgChuyen} chuyển tiền cho ${hoTen}`;
        setTenNguoiNhan(hoTen);
        setNoiDungChuyenKhoan(noidung)
      }
      if (!data) {
        setTenNguoiNhan("");
        return;
      }
      
    } catch (error) {
      //console.error('Lỗi :', error);
    }
  };
  const themThongBao = async () =>{}
  const chuyenTien = async () => {
    const processedValue = parseInt(sotien.replace(/\./g, ""), 10); // Xóa dấu chấm và chuyển đổi thành số nguyên

    console.log("Số tiền bạn chuyển là:", processedValue);
    console.log("id Người gửi là :", idng_chuyen);
    console.log("stk ng gửi :", sotaikhoanDangNhap);
    console.log("id Người nhận là :", idng_nhan);
    console.log("Số tiền tôi đang có :", tiennnnn);
    console.log("STK ban muons chuỷe :", sotaikhoan);
    console.log("ND :", noidungck);
    const currentTime = new Date();
currentTime.setHours(currentTime.getHours() + 7);

// Chuyển thời gian thành chuỗi ISO 8601
const isoString = currentTime.toISOString();

// Cắt bớt phần mili-giây và ký tự 'Z'
const formattedTime = isoString.slice(0, 19); // Lấy từ vị trí 0 đến 18, bỏ qua mili-giây và ký tự 'Z'
const originalTimeString = formattedTime;
const formattedTimeString = originalTimeString.replace("T", " "); // Thay thế ký tự 'T' bằng dấu cách

console.log("Thời gian hiện tại là:", formattedTimeString);

    try {
      const response = await axios.put(
        `http://192.168.1.9:3000/students/${idng_chuyen}/${processedValue}/${idng_nhan}`
      );
      const res = await axios.post(
        `http://192.168.1.9:3000/message/${idng_chuyen}/${idng_nhan}/${noidungck}/${processedValue}/${formattedTimeString}`
      );

      console.log("response data:", response.data);
      console.log("messages data:", res.data);
      if(sotaikhoanDangNhap ===  sotaikhoan){
        console.log('trung stk');
        Alert.alert("Lỗi", "M thích test bug không ? trùng STK sao mà chuyển", [{ text: "cút" }]);
        setSotaikhoan("");
        setTenNguoiNhan("");
        setSoTien("");
        setNoiDungChuyenKhoan("");
        return;
      }
      
      if (response.data) {
        console.log("Chuyển ok la!");
        Alert.alert("Thành công", "chuyển Tiền thành công", [{ text: "OK" }]);
        setSotaikhoan("");
        setTenNguoiNhan("");
        setSoTien("");
        setNoiDungChuyenKhoan("");
        return;
      }
      
      
    } catch (error) {
      if (error) {
        if (tiennnnn < processedValue) {
          console.log("lỗi chuyển tìnn.");
            Alert.alert("Thất bại", `Tiền thì có ${tiennnnn} vnd mà đòi chuyển ${processedValue}`, [{ text: "cút" }]);         
            setSoTien("");           
            return;
        }
        if ( !processedValue && !sotaikhoanDangNhap) {
          console.log("lỗi chuyển tìnn.");
            Alert.alert("Thất bại", `Vui lòng điền đầy đủ thông tin`, [{ text: "ok" }]);          
            setSoTien("");    
            return;
        }
        if ( !tenNguoiNhan || !sotaikhoan) {
          //console.log("lỗi chuyển tìnn.");
            Alert.alert("Thất bại", `Số tài khoản không có trong hệ thống`, [{ text: "ok" }]);          
            setSotaikhoan("");    
            return;
        }
        if ( !sotaikhoan) {
          //console.log("lỗi chuyển tìnn.");
            Alert.alert("Thất bại", `Vui lòng điền STK`, [{ text: "ok" }]);          
            setSotaikhoan("");
        setTenNguoiNhan("");
        setSoTien("");
        setNoiDungChuyenKhoan(""); 
            return;
        }
      }
      
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: 10 }}>
        <View>
          <View
            style={{
              //backgroundColor: 'red',
              width: "98%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 22 }}>Thông tinh người nhận</Text>
            <Text>
              <FontAwesome6 name="address-book" size={20} color="black" />
            </Text>
          </View>
          <View>
            <View
              style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: 10,
                padding: 15,
              }}
            >
              <Text>Ngân hàng</Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "blue",
                  borderBottomWidth: 2,
                  borderBottomColor: "#eff9f9",
                  marginBottom: 20,
                }}
              >
                ACB - NH TMCP A CHAU
              </Text>
              <TextInput
                style={{ fontSize: 21, marginBottom: 30 }}
                placeholder="Số tài khoản nhận"
                placeholderTextColor="#000"
                value={sotaikhoan}
                onChangeText={handleInputChange}
                keyboardType="numeric"
              />
              <Text>Tên Người Nhận</Text>
              <Text
                style={{
                  fontSize: 25,
                  color: "blue",
                  borderBottomWidth: 2,
                  borderBottomColor: "#eff9f9",
                  marginBottom: 20,
                }}
              >
                {tenNguoiNhan}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: 10,
              padding: 15,
              marginTop: 50,
            }}
          >
            <Text>Số tiền</Text>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
              }}
            >
              <TextInputMask
                style={{
                  fontSize: 25,
                  alignItems: "center",
                  flex: 1,
                  borderBottomWidth: 1,
                }}
                placeholderTextColor="#000"
                value={sotien}
                onChangeText={setSoTien}
                keyboardType="numeric"
                type={"money"}
                options={{
                  precision: 0, // số lượng số 0 sau dấu phẩy
                  separator: ",", // dấu ngăn cách hàng nghìn
                  delimiter: ".", // dấu thập phân
                  unit: "", // đơn vị tiền tệ
                  suffixUnit: "", // tiền tệ cuối cùng
                }}
              />
              <Text style={{ fontSize: 22, color: "blue" }}>VND</Text>
            </View>
            <Text style={{ marginTop: 10 }}></Text>
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: 10,
              padding: 15,
              marginTop: 50,
            }}
          >
            <Text>Nội dung chuyển khoản</Text>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={{
                  fontSize: 22,
                  alignItems: "center",
                  flex: 1,
                  borderBottomWidth: 1,
                }}
                placeholderTextColor="#000"
                value={noidungck}
                onChangeText={setNoiDungChuyenKhoan}
                multiline={true} // Enable multiline
                numberOfLines={1}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            height: 70,
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              width: "65%",
              height: "80%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}
            onPress={chuyenTien}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              TIẾP TỤC
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    alignItems: "center",
    padding: 8,
  },
});
