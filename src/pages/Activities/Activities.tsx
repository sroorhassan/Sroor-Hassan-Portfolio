import { Box, Container, Divider } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import RunningSection from "./sections/RunningSection";
import BooksSection from "./sections/BooksSection";
import ChessSection from "./sections/ChessSection";
import ClosingSection from "./sections/ClosingSection";

export default function Activities() {
  return (
    <Box sx={{ backgroundColor: "#0f0f0f", color: "#fff", minHeight: "100vh", py: 12 }}>
      <Container maxWidth="lg" sx={{textAlign:"center"}}>
        <HeroSection />
        <RunningSection />
        <Divider sx={{ backgroundColor: "#222", mb: 14 }} />
        <BooksSection />
        <Divider sx={{ backgroundColor: "#222", mb: 14 }} />
        <ChessSection />
        <ClosingSection />
      </Container>
    </Box>
  );
}
