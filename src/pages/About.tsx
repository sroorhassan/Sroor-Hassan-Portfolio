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
.NET Backend Developer experienced in building reliable and maintainable applications using ASP.NET Core, 
C#, and SQL Server. Skilled in developing structured solutions using a 3-layer architecture, implementing 
RESTful APIs, and working with relational databases. Seeking to grow in a backend-focused environment and 
contribute to real-world production systems. 
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
