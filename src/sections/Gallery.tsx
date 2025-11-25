// src/pages/Home.tsx
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4, paddingTop: 6 }} id={"Gallery"}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 200,
          textAlign: "center",
          fontFamily: "Playfair",
          textTransform: "uppercase",
        }}
      >
        Explore
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box
            onClick={() => navigate("/gallery")}
            sx={{
              backgroundColor: "#1a1a1a",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
              height: 180,
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#222",
                transform: "scale(1.05)",
              },
            }}
          >
            <PhotoLibraryIcon sx={{ fontSize: 50, mb: 1 }} />
            <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
              Gallery
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}