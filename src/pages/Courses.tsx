import { useParams } from "react-router-dom";
import { Box, Typography, Grid, Card } from "@mui/material";

const certificatesData = {
  programming: [
    {
      id: 1,
      title: "Full Stack Web Development",
      date: "2024",
      image: "/images/cert1.png",
    },
    {
      id: 2,
      title: "React Advanced Course",
      date: "2023",
      image: "/images/cert2.png",
    },
  ],
  languages: [
    {
      id: 3,
      title: "English B2 Certificate",
      date: "2022",
      image: "/images/english-cert.png",
    },
  ],
  design: [
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      date: "2023",
      image: "/images/uiux-cert.png",
    },
  ],
};

const Courses = () => {
  const { fieldId } = useParams();

  if (!fieldId || !(fieldId in certificatesData)) {
    return (
      <Box sx={{ p: 4, textAlign: "center", color: "#fff" }}>
        <Typography variant="h5">Invalid field selected ❌</Typography>
      </Box>
    );
  }

  const certificates =
    certificatesData[fieldId as keyof typeof certificatesData];

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          color: "#fff",
          fontFamily: "Playfair",
          textAlign: "center",
        }}
      >
        {fieldId.charAt(0).toUpperCase() + fieldId.slice(1)} Certificates
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {certificates.map((cert) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cert.id}>
            <Card
              sx={{
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: 3,
                p: 2,
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                },
              }}
            >
              <Box
                component="img"
                src={cert.image}
                alt={cert.title}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  mb: 2,
                  objectFit: "cover",
                }}
              />
              <Typography variant="subtitle1">{cert.title}</Typography>
              <Typography variant="body2" color="gray">
                {cert.date}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
