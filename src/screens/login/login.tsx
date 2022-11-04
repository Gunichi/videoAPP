import { SafeAreaView, Image, View, TextInput, Text, TouchableOpacity } from "react-native"
import { Button } from "react-native-paper"
import { styles } from "./style"

const Login = () => {
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
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.boxText}>
        <Text> É novo aqui? 
          <TouchableOpacity>
            <Text style={styles.span}> Registre - se </Text>
          </TouchableOpacity>
        </Text>
      </View>

    </SafeAreaView>
  )
}

export default Login