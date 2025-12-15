import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import HeroSectionImg from "../imgs/Sror 8.webp";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import ResponsiveAppBar from "../components/home/AppBar";

function Landing() {
  return (
    <Box
      id={"Home"}
      sx={{
        backgroundImage: `url(${HeroSectionImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Box
        style={{
          position: "absolute",
          zIndex: "1000",
          left: "50%",
          top: "0",
          transform: "translateX(-50%)",
          padding: 0,
        }}
      >
        <ResponsiveAppBar></ResponsiveAppBar>
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "auto",
          marginBottom: "50px",
        }}
      >
        <Box
          sx={{
            zIndex: 2,
            textAlign: "center",
            color: "text.primary",
          }}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 200,
                textAlign: "center",
                fontFamily: "Playfair",
                fontSize: {
                  xs: "40px",
                  sm: "50px",
                  md: "60px",
                },
                textTransform: "uppercase",
              }}
            >
              Sror Hassan
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontSize: {
                  xs: "10px",
                  sm: "13px",
                  md: "15px",
                },
                fontWeight: "500",
                textAlign: "center",
                fontFamily: "Playfair",
                textTransform: "uppercase",
              }}
            >
              I turn ideas into clean, functional experiences
            </Typography>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ fontSize: "12px" }}
              onClick={() => {
                const section = document.getElementById("Projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Projects
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Landing;
