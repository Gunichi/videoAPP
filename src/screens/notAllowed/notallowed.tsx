import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export const NotAllowed = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="emoticon-sad" size={120} color="#BA7E08" />
      <Text style={styles.text}>Ops! Você não tem acesso a essa área :(</Text> 
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}