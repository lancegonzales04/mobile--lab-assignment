import React from 'react';
import { View, StyleSheet } from 'react-native';

export const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    });