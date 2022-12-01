import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { SafeAreaView, Image, View, TextInput, Text, TouchableOpacity } from "react-native"
import { Button } from "react-native-paper"
import { styles } from "./style"

const Login = ({ navigation  }) => { 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(email)
    console.log(password)
    axios.post('http://150.230.73.121:8000/accounts/login/', {
      user: email,
      password: password,
    })
    .then((response) => {
      navigation.navigate('LostPets');
    }, (error) => {
      alert('Usuário ou senha inválidos');
    });
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={styles.image}
        source={require('../../../assets/logo.png')} 
      />
      <View style={styles.loginForm}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity 
        onPress={() => handleSubmit()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>
      <View style={styles.boxText}>
        <Text> É novo aqui? 
          <TouchableOpacity>
            <Text 
              style={styles.span} 
              onPress={() => navigation.navigate('Register')}
            > Registre - se </Text>
          </TouchableOpacity>
        </Text>
      </View>

    </SafeAreaView>
  )
}

export default Login