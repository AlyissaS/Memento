import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { defaultStyles } from '@/constants/Styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {ColorPalette} from '@/constants/Colors'
import { Link, useNavigation } from 'expo-router'
import SignUpScreen from './signup'
import LoginScreen from './login'

const BottomLoginSheet = () => {
  const navigation = useNavigation();
  const navigateToSignUp = () => {
    console.log('Navigating to SignUp'); // Debug line
    navigation.navigate('signup');
  };

  const { bottom }  = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
        <Pressable style={[defaultStyles.btn, styles.btnDark]} onPress={navigateToSignUp}>
          <Ionicons name="mail" size={20} style={styles.btnIcon} color={ColorPalette.light}/>
          <Text style={styles.btnDarkText}>Continue with Email</Text>
          </Pressable>
          <Pressable style= {[defaultStyles.btn, styles.btnDark]} onPress={LoginScreen}>
          <Text style={styles.btnDarkText}>Log in</Text>
          </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000',
    padding: 26,
    gap: 14,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

  },
  btnLight: {
    backgroundColor: '#fff',
  },
  btnIcon: {
    paddingRight: 7,
  },
  btnLightText: {
    fontSize: 20,
  },
  btnDark: {
    backgroundColor: ColorPalette.grey,
  },
  btnDarkText: {
    color: '#fff',
    fontSize: 20,
  },
  btnOutline: {
    borderWidth: 3,
    borderColor: ColorPalette.grey,
  }
})

export default BottomLoginSheet
