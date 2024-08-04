import { Text, View, StyleSheet } from 'react-native';


export default function ThongBao({route}) {
    console.log('ccccccc:',route.params.id);
    const id = route.params.id;
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Đây là thông báo của ID :{id}
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
