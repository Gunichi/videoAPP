import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export function newContent({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.newContent}>
        <Text style={styles.title}>Novo conteúdo</Text>
        <TouchableOpacity 
          style={styles.button}                     
          onPress={() => navigation.navigate('Novo curso')}
        >
          <Text style={styles.buttonText}>Adicionar curso</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Novo modulo')}
        >
          <Text style={styles.buttonText}>Adicionar módulo</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Novo video')}
        >
          <Text style={styles.buttonText}>Adicionar vídeo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}