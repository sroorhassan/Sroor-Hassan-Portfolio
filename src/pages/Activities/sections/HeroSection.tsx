import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function HeroSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Box
        sx={{
          mb: 20,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <Typography
          variant="h1"
          fontWeight={800}
          letterSpacing={-1.5}
          gutterBottom
        >
          Activities
        </Typography>

        {/* Main Message */}
        <Typography
          variant="h5"
          sx={{
            opacity: 0.7,
            maxWidth: 680,
            lineHeight: 1.6,
          }}
        >
          What I build outside the screen shapes how I think inside it.
        </Typography>

        {/* Context */}
        <Typography
          sx={{
            mt: 2,
            opacity: 0.4,
            maxWidth: 560,
            fontSize: 15,
          }}
        >
          Discipline, learning, and mental training beyond code.
        </Typography>

        {/* Accent */}
        <Box
          sx={{
            width: 120,
            height: 2,
            background:
              "linear-gradient(90deg, transparent 0%, #b8100a 50%, transparent 100%)",
            mt: 6,
          }}
        />
      </Box>
    </motion.div>
  );
}
