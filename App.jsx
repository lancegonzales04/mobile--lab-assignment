import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { ScrollView } from 'react-native';

const App = () => {
  
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length.toString(), text: task }]);
  };

  return (
    <ScrollView>
      <ToDoList tasks={tasks} />
      <ToDoForm onAddTask={addTask} />
    </ScrollView>
  );
};

export default App;
