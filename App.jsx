import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {
  
  
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Complete React Native tutorial' },
    { id: '2', text: 'Build a ToDo app' },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length.toString(), text: task }]);
  };

  return (
    <>
      <ToDoList tasks={tasks} />
      <ToDoForm onAddTask={addTask} />
    </>
  );
};

export default App;
