import { Box, Grid, Typography } from "@mui/material";
import CategoryCard from "../components/projects/CategoryCard";
import CodeIcon from "@mui/icons-material/Code";

export default function Projects() {
  const categories = [
    { title: "Programming", icon: <CodeIcon fontSize="inherit" /> },
  ];

  return (
    <Box sx={{ p: 4, paddingTop: 6 }} id={"Projects"}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "200",
          textAlign: "center",
          fontFamily: "Playfair",
          textTransform: "uppercase",
        }}
      >
        Projects{" "}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categories.map((category, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <CategoryCard title={category.title} icon={category.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
