// src/components/ui/DeleteButton.jsx
import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} color="error" aria-label="delete task">
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;