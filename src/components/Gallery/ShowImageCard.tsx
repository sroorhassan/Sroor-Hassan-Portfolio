import { Grid, Box } from "@mui/material";
import React from "react";

interface ShowImageCardProps {
  Image: string;
  onClick?: () => void;
}

const ShowImageCard: React.FC<ShowImageCardProps> = ({ Image, onClick }) => {
  return (
    <Grid>
      <Box
        component="img"
        src={Image}
        alt="gallery"
        onClick={onClick}
        sx={{
          width: "100%",
          height: "100%",
          marginBottom: "10px",
          objectFit: "cover",
          borderRadius: "12px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          },
        }}
      />
    </Grid>
  );
};

export default ShowImageCard;
