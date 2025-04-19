// src/App.jsx
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./App.css";
// app components
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskHistory from "./components/TaskHistory";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id);
    if (taskToComplete) {
      setTasks(tasks.filter((task) => task.id !== id));
      setCompletedTasks([...completedTasks, taskToComplete]);
    }
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", width: "100vh" }}>
        <Typography variant="h1">ToDo List</Typography>
        <Box className="bg-color" component="section" sx={{ p: 2 }}>
          <TaskInput onAddTask={addTask} />
        </Box>
        <Box sx={{ p: 2 }}>
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onComplete={completeTask}
            onEdit={editTask}
          />
        </Box>
        <Box sx={{ p: 2 }}>
          <TaskHistory completedTasks={completedTasks} />
        </Box>
      </Box>
    </Container>
  );
};

export default App;