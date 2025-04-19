// src/components/TaskHistory.jsx
import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const TaskHistory = ({ completedTasks }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Completed Tasks
      </Typography>
      <List>
        {completedTasks.map((task) => (
          <ListItem key={task.id} disablePadding>
            <ListItemText primary={task.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskHistory;