import React from 'react';
import MainLayout from './layouts/MainLayout';
import { View, StyleSheet, TouchableOpacity, Text, Alert } 
from 'react-native';

const AboutScreen = () => {
    const handleNamePress = () => {
      Alert.alert("Not april anymore", "Yet you found an easter egg!");
    };
    return (
        <MainLayout>
          <View style={styles.container}>
            <Text style={styles.title}> Random Message</Text>
            <TouchableOpacity onPress={handleNamePress}>
              <Text style={styles.name}>Gonzales, Lance</Text>
            </TouchableOpacity>
            <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
          </View>
        </MainLayout>
      );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      name: {
        fontSize: 18,
        color: 'Red',
        textDecorationLine: 'underline',
      },
      date: {
        fontSize: 16,
      },
});
export default AboutScreen;
