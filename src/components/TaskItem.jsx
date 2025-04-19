// src/components/TaskItem.jsx
import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

import DeleteButton from "./ui/DeleteButton";
import CompleteButton from "./ui/CompleteButton";
import EditButton from "./ui/EditButton";

const TaskItem = ({ task, onDelete, onComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEditSave = () => {
    if (editText.trim()) {
      onEdit(task.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={1} mb={1}>
      {isEditing ? (
        <TextField
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEditSave}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleEditSave();
          }}
          size="small"
          autoFocus
        />
      ) : (
        <Typography sx={{ flexGrow: 1 }}>{task.text}</Typography>
      )}
      <EditButton onClick={() => setIsEditing(!isEditing)} />
      <CompleteButton onClick={() => onComplete(task.id)} />
      <DeleteButton onClick={() => onDelete(task.id)} />
    </Box>
  );
};

export default TaskItem;