import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './style';

export const Support = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="headphones" size={130} color="#FEA800" />      
      <Text style={styles.text}>Precisa de ajuda?</Text> 
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar em contato</Text>
      </TouchableOpacity>
    </View>
  )
}