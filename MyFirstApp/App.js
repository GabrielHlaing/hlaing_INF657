import { StyleSheet, View } from 'react-native';
import Header from './Components/HeaderFile';
import Profile from './Components/Profile';
import Button from './Components/ButtonFile';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header  />
      </View>

      <View style={styles.profile}>
      <Profile name = "Gabriel Hlaing" />
      </View>

      <View style={styles.button}>
      <Button />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    height: "20%", 
    width: "30%",
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
  },

  profile:{
    height: "40%", 
    width: "30%",
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },

  button:{
    height: "20%", 
    width: "30%",
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
