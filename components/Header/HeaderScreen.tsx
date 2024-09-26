import React from "react";
import { styles } from "./HeaderStyle";
import { View, Text, TextInput } from "react-native";

const Header2 = () => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.back}>Back</Text>
      <Text style={styles.cont}>Content</Text>
      <Text style={styles.filter}>Filter</Text>
      <View style={styles.search}>
        <TextInput value="Search" style={styles.searchbar} />
      </View>
    </View>
  );
};

export default Header2;
