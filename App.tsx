
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-native-paper';
import Dashboard from './src/screens/dashboard/Dashboard';
import EditProfile from './src/screens/editprofile/editProfile';
import Login from './src/screens/login/login';
import { NotAllowed } from './src/screens/notAllowed/notallowed';
import Profile from './src/screens/profile/profile';
import Register from './src/screens/register/register';
import { Support } from './src/screens/support/support'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './src/components/Routes';


export default function App() {

  return (
    <NavigationContainer>  
      <Routes />
    </NavigationContainer>
  );
}

