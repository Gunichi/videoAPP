import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export function newCourse() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo curso</Text>
      <View style={styles.newContent}>
        <TextInput
          style={styles.input}
          placeholder="Título do curso"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição do curso"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <TouchableOpacity 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Cadastrar curso</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}