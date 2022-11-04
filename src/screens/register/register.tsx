import { useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { TextInput, RadioButton, Button } from 'react-native-paper';


import { styles } from './style';

const Register = () => {

  const [value, setValue] = useState('first');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.registerText}>Registro</Text>
        <Text style={styles.registerDescription}> Por faavor registre se abaixo </Text>
          <View style={styles.registerForm}>
            <TextInput 
              style={styles.registerInput} 
              placeholder="Nome" 
              left={<TextInput.Icon icon="eye" />}
              activeUnderlineColor="#19786A"
            />
            <TextInput 
              style={styles.registerInput} 
              placeholder="Email" 
              left={<TextInput.Icon icon="eye" />}
              activeUnderlineColor="#19786A"
            />
            <TextInput 
              style={styles.registerInput} 
              placeholder="Senha" 
              left={<TextInput.Icon icon="eye" />}
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
        <Button style={styles.registerButton} mode="contained" onPress={() => console.log('Pressed')}>
          Registrar
        </Button>
        <Text style={styles.registerDescription}> Ao se registrar você está de acordo com os termos de privacidade. </Text>
      </SafeAreaView>
    );
}

export default Register;