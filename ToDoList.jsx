import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.header}>ToDo list Page</Text>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Text>{item.text}</Text>
                    </View>
                )}
            />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
  },
});

export default ToDoList;
