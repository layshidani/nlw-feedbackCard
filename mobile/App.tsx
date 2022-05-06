import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import { theme } from "./src/theme";
import { Widgets } from "./src/components/Widgets";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Widgets />

      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  );
}
