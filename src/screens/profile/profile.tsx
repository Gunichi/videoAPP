import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

const Profile = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Chicken_portrait.jpg',
        }
        }
      />
        <Text style={styles.name}>Saul Abreu</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>      
        <TouchableOpacity 
          onPress={() => navigation.navigate('Suporte')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Suporte</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Meu conteudo')}
        >
          <Text style={styles.buttonText}>Conteúdo</Text>
        </TouchableOpacity>     
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>         
      <View style={styles.body}>
      
      </View>
    </View>
  );
}

export default Profile;