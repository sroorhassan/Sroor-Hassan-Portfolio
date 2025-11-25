import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography, Button } from "@mui/material";
import Sror3Img from "../imgs/Sror 3.png";
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

          <Box sx={{ maxWidth: { xs: "100%", md: "500px" } }}>
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
            <Typography variant="body1" sx={{ mb: 3, color: "text.secondary",fontSize:"15px" }}>
              Hello! I'm Sror Hassan, Ia passionate Backend Developer .NET / SQL Server with strong experience in building both web and desktop applications.
Through self-learning and practical projects, I’ve developed solid skills in C#, ASP.NET Core, SQL Server, and a good understanding of React, HTML, CSS, and JavaScript, enabling me to deliver complete and well-structured solutions.
I enjoy solving problems, optimizing backend performance, and learning new technologies to write clean, scalable, and maintainable code.
I’m looking for opportunities where I can contribute to real-world software projects, collaborate with experienced teams, and grow as a developer.
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
