// src/components/ui/CompleteButton.jsx
import React from "react";
import { IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const CompleteButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} color="success" aria-label="complete task">
      <CheckIcon />
    </IconButton>
  );
};

export default CompleteButton;