// src/components/TaskList.jsx
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onComplete, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;