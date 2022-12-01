import React from 'react';
import { SafeAreaView, Image, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { styles } from './styles';

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Image
        style={styles.tinyLogo}
        source={
          require('../../../assets/logo.png')
        }
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar foto</Text>
      </TouchableOpacity>
      <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#BA7E08"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Número"
          placeholderTextColor="#BA7E08"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#BA7E08"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

export default EditProfile;