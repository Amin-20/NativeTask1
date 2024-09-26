import { View, Text } from "react-native";
import { styles } from "./CardStyle";

const Card2 = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.image1}></View>
      <Text style={styles.title2}>Header</Text>
      <Text style={styles.content2}>
        He'll want to use your yacht, and I don't want this thing smelling like fish.
      </Text>
      <Text style={styles.minute2}>8m ago</Text>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
        <View style={styles.circle2}></View>
        <View style={styles.circle3}></View>
      </View>
        <View style={styles.image2}></View>
    </View>
  );
};

export default Card2;
