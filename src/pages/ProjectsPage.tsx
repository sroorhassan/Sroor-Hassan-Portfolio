import { Box, Typography, Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router-dom";
import ShowProjectCard from "../components/projects/ShowProjectCard";

import OnlineStadium from "../imgs/Online Stadiums.webp";
import DentalClinic from "../imgs/Dental Clinic.webp";
import StadiumSystem from "../imgs/Stadium System.webp";

const projectData = {
  programming: [
    {
      Title: "Online Stadium Booking System (Web App)",
      Image: OnlineStadium,
      About:
        "Developed a full-featured web application for online booking and management of sports stadium slots. The platform supports both stadium owners and players: players can request bookings for available time slots (one-time or recurring), and stadium owners can review and approve or reject these requests. Integrated user authentication and authorization, real-time availability checks, and an intuitive dashboard for both owners and players. Technologies used: React.js, ASP.NET Core, C#, SQL Server.",
      Link: "https://github.com/Sror-7/Stadiums-Online.git",
    },
    {
      Title: "Dental Clinic Booking System (Desktop App)",
      Image: DentalClinic,
      About:
        "Developed a comprehensive desktop application for managing patient appointments and treatments in a dental clinic. Features include adding patients, scheduling appointments, recording treatment details (e.g., cleaning, fillings). Technologies used: C#, .NET, SQL Server.",
      Link: "https://github.com/Sror-7/Dental-Clinic.git",
    },
    {
      Title: "Stadium Booking System (Desktop App)",
      Image: StadiumSystem,
      About:
        "Developed a desktop application for managing bookings of a sports stadium. Features include creating and managing reservations (including recurring bookings), adding teams, and organizing leagues with team assignments. The primary focus is efficient and user-friendly stadium booking management. Technologies used: C#, .NET, SQL Server.",
      Link: "https://github.com/Sror-7/FootballStadium.git",
    },
  ],
};

export default function ProjectsPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const projects = projectData[category as keyof typeof projectData] || [];

  return (
    <Box sx={{ p: 4, paddingTop: 6 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#151515",
            color: "white",
            mr: 1,
            "&:hover": {
              backgroundColor: "#1e1e1e",
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>

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
        {category} Projects
      </Typography>

      {projects.length > 0 ? (
        <Grid container spacing={3} marginTop={3}>
          {projects.map((proj, i) => (
            <ShowProjectCard
              key={i}
              Title={proj.Title}
              Image={proj.Image}
              About={proj.About}
              Link={proj.Link}
            />
          ))}
        </Grid>
      ) : (
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "gray",
            mt: 4,
          }}
        >
          No projects found for this category.
        </Typography>
      )}
    </Box>
  );
}
