import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${title.toLowerCase()}`);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        width: "100%",
        height: 180,
        backgroundColor: "#151515",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        "&:hover": {
          transform: "translateY(-5px) scale(1.03)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
          backgroundColor: "#1e1e1e",
        },
      }}
    >
      <Box sx={{ fontSize: 50, color: "white" }}>{icon}</Box>
      <Typography
        variant="h6"
        sx={{
          color: "white",
          fontWeight: "bold",
          textTransform: "capitalize",
          mt: 1,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CategoryCard;
