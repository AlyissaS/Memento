import {View} from "react-native";
import AnimatedIntro from "@/components/AnimatedIntro";
import BottomLoginSheet from "@/components/BottomLoginSheet";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return(
    <SafeAreaProvider>
    <View
      style={{
        flex:1
      }}
    >
      <AnimatedIntro />
      <BottomLoginSheet />
    </View>
    </SafeAreaProvider>
  )
}
        				