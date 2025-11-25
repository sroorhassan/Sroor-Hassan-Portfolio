import { Box, Container, Typography, Button } from "@mui/material";
import {

  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import SkillBar from "../components/Global/progressBar";
export default function AboutPage() {
    const navigate = useNavigate();
  return (
    <Box paddingTop={8} paddingBottom={8}>
      <Container maxWidth="md">
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
          variant="h2"
          sx={{
            fontWeight: 300,
            mb: 3,
            fontFamily: "Playfair",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          About Me
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "17px",
            lineHeight: "1.8",
            mb: 4,
          }}
        >
          Hello! I'm Sror Hassan — a passionate Backend Developer specializing
          in .NET, C#, and SQL Server. My journey in programming started through
          self-learning and building real-world projects that helped me
          understand both backend architecture and how the frontend interacts
          with it.
          <br />
          <br />
          I have experience in:
          <br />
          • Building RESTful APIs with ASP.NET Core  
          • Writing optimized SQL queries  
          • Creating desktop apps using .NET  
          • Understanding React, JavaScript, HTML, and CSS  
          <br />
          <br />
          My goal is to join a professional team where I can contribute,
          collaborate, and grow as a developer.
        </Typography>

          <Box sx={{ maxWidth: { xs: "100%", margin:"auto" } }}>
            <Typography
              variant="h2"
              sx={{
                textAlign:"center",
                fontWeight: 200,
                mb: 2,
                fontFamily: "Playfair",
                textTransform: "uppercase",
              }}
            >
Languages
            </Typography>

<Box sx={{width:"70%",margin:"auto", mb:5}}>

<SkillBar percent={100} skill="Kurdish" />
<SkillBar percent={100} skill="Arabic" />
<SkillBar percent={60} skill="English" />
<SkillBar percent={50} skill="Germany" />
</Box>
          </Box>

        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/cv/Sroor Hassan.pdf"
            download
          >
            Download CV
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
