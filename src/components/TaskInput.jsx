// src/components/TaskInput.jsx
import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TaskInput = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAddTask(text);
      setText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <TextField
        label="Type Task"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        fullWidth
      />
      <IconButton onClick={handleAdd} color="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default TaskInput;