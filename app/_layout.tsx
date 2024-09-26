import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { View, Text } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { styles } from "@/components/Card/CardStyle";
import Header2 from "@/components/Header/HeaderScreen";
import Card2 from "@/components/Card/CardScreen";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <View>
        <Header2></Header2>  
        <Card2></Card2>
        <View style={styles.footer2}>
        <View style={styles.icon}/>
        <View style={styles.icon1}/>
        <View style={styles.icon2}/>
        <View style={styles.icon3}/>
        <View style={styles.icon4}/>
      </View>
      </View> 
    </View>
  );
}
