import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

function ToDoList ({ tasks }){
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View style={styles.container} key={task.id}>
          {/* Display each task item styled as incomplete. */}
          <Text style={styles.header}>ToDo list Page</Text>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                <Text>{item.text}</Text>
              </View>
            )}
          />
        </View>
      ))}
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
