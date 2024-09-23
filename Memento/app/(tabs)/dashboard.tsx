import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import auth from '@react-native-firebase/auth';
import { FIREBASE_AUTH } from "@/FirebaseConfig";

export default function DashboardScreen() {
  const user = auth().currentUser;

  return (
    <View style={styles.dashboardscreen}>
      <Text style={styles.welcomeUser}>Welcome {user?.email}</Text>
      <View style={styles.rectangleParent}>
        <TouchableOpacity style={styles.button} onPress={() => FIREBASE_AUTH.signOut()}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.weAreSo}>We are so glad to have you here! Click on the pictures below to get started</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardscreen: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeUser: {
    fontSize: 35,
    color: "#000",
    textAlign: "center",
    fontFamily: "Belgrano-Regular",
    marginBottom: 20,
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 20,
    backgroundColor: "#2d4962",
    height: 60,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangleParent: {
    height: 60,
    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    height: '100%', // Full height of the parent
    width: '100%', // Full width of the parent
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    borderRadius: 20, // Match the rectangle background
    backgroundColor: '#2d4962', // Same color as the rectangle
    top: -380,
    left:90
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Belgrano-Regular",
  },
  weAreSo: {
    fontSize: 15,
    color: "#000",
    textAlign: "center",
    fontFamily: "Belgrano-Regular",
    marginTop: 0,
    top:-100
  },
});
