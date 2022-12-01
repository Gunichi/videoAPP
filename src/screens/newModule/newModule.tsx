import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { PaperSelect } from 'react-native-paper-select';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export function newModule() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo módulo</Text>
      <View style={styles.newContent}>
        <TextInput
          style={styles.input}
          placeholder="Selecione um curso"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Título do módulo"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <TouchableOpacity 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Cadastrar módulo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}