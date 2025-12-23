import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography, Button } from "@mui/material";
import Sror3Img from "../imgs/Sror 3.webp";
import { Link } from "react-router-dom";
function About() {
  return (
    <Box paddingTop={5} id={"About"}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            p: 4,
            flexWrap: "wrap",
          }}
        >
          <Box
            component="img"
            src={Sror3Img}
            alt="Sror Hassan"
            sx={{
              width: { xs: "100%", md: "300px" },
              borderRadius: 2,
            }}
          />

<Box
  sx={{
    maxWidth: { xs: "100%", md: "500px" },
    textAlign: { xs: "center", md: "left" },
  }}
>
  <Typography
    variant="h2"
    sx={{
      fontWeight: 200,
      mb: 2,
      fontFamily: "Playfair",
      textTransform: "uppercase",
    }}
  >
    About Me
  </Typography>

  <Typography
    variant="body1"
    sx={{
      mb: 3,
      color: "text.secondary",
      fontSize: "15px",
    }}
  >
    .NET Backend Developer experienced in building reliable and maintainable
    applications using ASP.NET Core, C#, and SQL Server. Skilled in developing
    structured solutions using a 3-layer architecture, implementing RESTful
    APIs, and working with relational databases. Seeking to grow in a
    backend-focused environment and contribute to real-world production systems.
  </Typography>

<Button variant="contained" color="primary" component={Link} to="/about">
  Read More
</Button>
</Box>



        </Box>
      </Container>
    </Box>
  );
}

export default About;
