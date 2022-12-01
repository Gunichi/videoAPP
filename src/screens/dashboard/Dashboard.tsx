import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Olá, Gunichi</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Escolha uma categoria de curso que seja do seu interesse!</Text>
        </View>
        <View style={styles.categories}>
            <TouchableOpacity 
              style={styles.category}
              onPress={() => navigation.navigate('Detalhes')}
            >
              <View style={styles.categoryBanner}>
                <FontAwesome name="book" size={24} color="#19786A" />
              </View>
              <Text style={styles.categoryText}>Educação Financeira 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <TouchableOpacity style={styles.categoryBanner}>
                <FontAwesome name="book" size={24} color="#19786A" />
              </TouchableOpacity>
              <Text style={styles.categoryText}>Educação Financeira 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <View style={styles.categoryBanner}>
                <FontAwesome name="book" size={24} color="#19786A" />
              </View>
              <Text style={styles.categoryText}>Educação Financeira 1</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.progress}>
          <Text style={styles.progressText}>Seu progresso</Text>
            <TouchableOpacity style={styles.progressCourses}>
              <View style={styles.progressCoursesDetails}>
                <FontAwesome5 style={styles.progressCoursesText} name="play" size={24} color="#19786A" />
                <Text style={styles.progressCoursesText}>Curso 1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.progressCourses}>
              <View style={styles.progressCoursesDetails}>
                <FontAwesome5 style={styles.progressCoursesText} name="play" size={24} color="#19786A" />
                <Text style={styles.progressCoursesText}>Curso 1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.progressCourses}>
              <View style={styles.progressCoursesDetails}>
                <FontAwesome5 style={styles.progressCoursesText} name="play" size={24} color="#19786A" />
                <Text style={styles.progressCoursesText}>Curso 1</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;