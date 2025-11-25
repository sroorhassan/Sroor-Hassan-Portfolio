import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CourseCard {
  id: string;
  title: string;
  icon: React.ReactNode;
  link: string; // الرابط يلي رح ننتقل له
}

interface ShowCoursesCardProps {
  title: string;
  cards: CourseCard[];
}

const ShowCoursesCard: React.FC<ShowCoursesCardProps> = ({ title, cards }) => {
  const navigate = useNavigate();

  const handleCardClick = (link: string) => {
    navigate(link);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 4,
          fontFamily: "Playfair",
          color: "#fff",
        }}
      >
        {title}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {cards.map((card) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={card.id}>
            <Card
              onClick={() => handleCardClick(card.link)}
              sx={{
                cursor: "pointer",
                backgroundColor: "#1a1a1a",
                color: "white",
                borderRadius: 3,
                p: 3,
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                },
              }}
            >
              <Box mb={2}>{card.icon}</Box>
              <Typography variant="h6">{card.title}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShowCoursesCard;
