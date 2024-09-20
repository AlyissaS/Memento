import { Text, View, Button} from "react-native";
import auth from '@react-native-firebase/auth';
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { Tabs } from "expo-router";

export default function DashboardScreen() {
  const user = auth().currentUser;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome back {user?.email}</Text>
      <Button title='Sign out' onPress={() => FIREBASE_AUTH.signOut()}/>
    </View>
  );
}