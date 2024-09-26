import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { View, Text } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import Card from "@/components/Card/Card";
import Header from "@/components/Header";
import { styles } from "@/components/Style";
import Header2 from "@/components/Header2";
import Card2 from "@/components/Card/Card2";
// Prevent the splash screen from auto-hiding before asset loading is complete.
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
      {/* Task1 */}
      {/* <Header />
      <View style={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.blank}></View>
      <View style={styles.footer}>
        <View style={styles.icon}/>
        <View style={styles.icon1}/>
        <View style={styles.icon2}/>
        <View style={styles.icon3}/>
        <View style={styles.icon4}/>
      </View> */}


      {/*Task2*/}
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
