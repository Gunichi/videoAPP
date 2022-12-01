import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { PaperSelect } from 'react-native-paper-select';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export function newVideo() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo vídeo</Text>
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
          placeholder="Selecione um módulo"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Título do vídeo"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="URL do vídeo"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <TouchableOpacity 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Cadastrar vídeo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}