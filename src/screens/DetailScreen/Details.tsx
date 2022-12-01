import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export function DetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Curso</Text>
        <Text style={styles.bannerText}>Educação financeira</Text>
        <View style = {styles.bannerIcon}>
          <Entypo style={styles.bannerIcon} name="open-book" size={40} color="#19786A" />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Sobre o curso</Text>
        <Text style={styles.contentDetail}>Aula 1</Text>
      </View>
      <View style={styles.contentPlayer}>
        <Text style={styles.contentPlayerText}>Módulo 1 - Entendendo melhor</Text>
        <View style={styles.contentPlayerIcon}>
          <Entypo name="controller-play" size={40} color="#19786A" />
          <Text style={styles.contentPlayerTxt}>Aula 1</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}