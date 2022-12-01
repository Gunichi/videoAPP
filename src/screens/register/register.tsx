import { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { TextInput, RadioButton, Button } from 'react-native-paper';


import { styles } from './style';

const Register = ({navigation}) => {

  const [value, setValue] = useState('first');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.registerText}>Registro</Text>
        <Text style={styles.registerDescription}> Por faavor registre se abaixo </Text>
          <View style={styles.registerForm}>
            <TextInput 
              style={styles.registerInput} 
              placeholder="Nome" 
              left={<TextInput.Icon icon="account" />}
              activeUnderlineColor="#19786A"
            />
            <TextInput 
              style={styles.registerInput} 
              placeholder="Email" 
              left={<TextInput.Icon icon="email" />}
              activeUnderlineColor="#19786A"
            />
            <TextInput 
              style={styles.registerInput} 
              placeholder="Senha" 
              left={<TextInput.Icon icon="shield-lock" />}
              activeUnderlineColor="#19786A"
            />
          </View>
          <View style={styles.registerRadio}>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
              <View>
              <Text>Professor</Text>
              <RadioButton color='#19786A' value="first" />
            </View>
            <View>
              <Text>Aluno</Text>
              <RadioButton color="#19786A" value="second" />
            </View>
          </RadioButton.Group>
        </View>
        <TouchableOpacity style={styles.registerButton} mode="contained" 
        onPress={() =>
          navigation.navigate('Login')
         }>
          Registrar
        </TouchableOpacity>
        <Text style={styles.registerDescription}> Ao se registrar você está de acordo com os termos de privacidade. </Text>
      </SafeAreaView>
    );
}

export default Register;