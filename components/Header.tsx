import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './Style'

const Header = () => {
  return (
    <View style={styles.topContainer}>
        <Text style={styles.back}>Back</Text>
        <Text style={styles.feed}>Feed</Text>
        <Text style={styles.filter}>Filter</Text>
        <View  style={styles.search}>
        <TextInput value='Search' style={styles.searchbar}/>
        </View>
    </View>
  )
}

export default Header
