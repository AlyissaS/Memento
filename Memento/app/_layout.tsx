import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from ".";
import LoginScreen from "./login";
import SignUpScreen from "./signup";
import Layout from "./(auth)/_layout";
import { router } from "expo-router";

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="index" options={{headerShown: false}} component={Index}/>
      <Stack.Screen
        name="login"
        options={{
          presentation: 'modal',
          title: '',
          headerTitleStyle: {
            fontFamily: 'mon-sb',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
        component={LoginScreen}
      />
      <Stack.Screen name="signup" options={{headerShown: false}} component={SignUpScreen}/>
      <Stack.Screen name="(auth)" options={{headerShown: false}} component={Layout} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
