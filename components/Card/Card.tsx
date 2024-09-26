import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { styles } from '../Style'

const Card = () => {
  return (
  <View style={styles.container}>
    <View style={styles.imageContainer}></View>
    <View>
        <View style={styles.topContainer1}>
            <Text style={styles.title}>Header</Text>
            <Text style={styles.minute}>8m ago</Text>
        </View>
        <Text style={styles.content}>He'll want to use your yatch, and I 
          don't want this thing smelling like fish</Text>
    </View>
    
  </View>
  )
}

export default Card
