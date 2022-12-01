import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/dashboard/Dashboard';
import { Entypo, Ionicons } from '@expo/vector-icons';
import Register from '../screens/register/register';
import Profile from '../screens/profile/profile';
import EditProfile from '../screens/editprofile/editProfile';
import Login from '../screens/login/login';
import axios from 'axios';
import { Support } from '../screens/support/support';
import { newContent } from '../screens/newContent/newContent';
import { newCourse } from '../screens/newCourse/newCouse';
import { newModule } from '../screens/newModule/newModule';
import { newVideo } from '../screens/newVideo/newVideo';
import { myContent } from '../screens/myContent/myContent';
import { DetailScreen } from '../screens/DetailScreen/Details';

const HomeStack = createStackNavigator()

function HomescreenStack() {

  const [user, setUser] = useState('')
  const [isTeacher, setIsTeacher] = useState('')

  useEffect (() => {
    axios.get('http://150.230.73.121:8000/accounts/me/')
    .then((response) => {
      setUser(response.data.teacher)
      console.log(response.data.teacher)
    }, (error) => {
      alert('Usuário ou senha inválidos');
    });
  }, [])

  if(user === true) {
    return (
      <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: '#19786A',
          tabBarInactiveTintColor: '#000',
        }}
      >
      <Tab.Screen 
        name="Dashboard" 
        component={Dashboard}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#19786A',
          },
          title: 'Home',
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name="Postar" 
        component={newContent}
        options={{
          headerStyle: {
            backgroundColor: '#19786A',
          },
          title: 'Postar',
          headerTintColor: '#fff',
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="plus" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name="Perfil" 
        component={Profile} 
        options={{
          headerStyle: {
            backgroundColor: '#19786A',
          },
          title: 'Perfil',
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    )
  } else {
    return (
      <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: '#19786A',
          tabBarInactiveTintColor: '#000',
        }}
      >
      <Tab.Screen 
        name="Dashboard" 
        component={Dashboard}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#19786A',
          },
          title: 'Pets',
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      {/*<Tab.Screen 
        name="Register" 
        component={Register} 
        options={{
          tabBarLabel: '',
          headerStyle: {
            backgroundColor: '#19786A',
          },
          title: 'Cadastrar Pet',
          headerTintColor: '#fff',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />*/}

      <Tab.Screen 
        name="Settings" 
        component={Profile} 
        options={{
          headerStyle: {
            backgroundColor: '#19786A',
          },
          title: 'Configurações',
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    )
      }
}



const Tab = createBottomTabNavigator()

const Routes = () => {
    
  return (
    <HomeStack.Navigator initialRouteName='Login'>
      <HomeStack.Screen 
        name="LostPets" 
        component={HomescreenStack} 
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen 
        name="Team"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: '#19786A',
          },
          title: 'Equipe',
          headerTintColor: '#fff',
        }}
      />
      <HomeStack.Screen 
        name="EditProfile" 
        component={EditProfile} 
        options={{
          headerStyle: {
            backgroundColor: '#19786A',
          },
          title: 'Editar perfil',
          headerTintColor: '#fff',
        }}
      />
      <HomeStack.Screen
        name="Suporte"
        component={Support}
        options={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name="Novo curso"
        component={newCourse}
        options={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name="Novo modulo"
        component={newModule}
        options={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name="Novo video"
        component={newVideo}
        options={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name="Meu conteudo"
        component={myContent}
        options={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name="Detalhes"
        component={DetailScreen}
        options={{
          headerShown: true,
        }}
      />
       <HomeStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
        }}
      />
    </HomeStack.Navigator>

  )
}

export default Routes