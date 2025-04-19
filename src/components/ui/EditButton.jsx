// src/components/ui/EditButton.jsx
import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} color="primary" aria-label="edit task">
      <EditIcon />
    </IconButton>
  );
};

export default EditButton;