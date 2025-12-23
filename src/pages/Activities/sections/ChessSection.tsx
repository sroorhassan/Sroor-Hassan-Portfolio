import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { motion, cubicBezier } from "framer-motion";
import type { Variants } from "framer-motion";

import chessImage from "../../../assets/Images/Chess/chess.webp";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.25, 0.1, 0.25, 1),
    },
  },
};

const lessons = [
  "Thinking before moving",
  "Learning from losses",
  "Recognizing patterns",
  "Patience over speed",
];

export default function ChessSection() {
  return (
    <Box sx={{ mb: 18 }}>
      {/* ===== HEADER ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={8} alignItems="center">
          {/* TEXT LEFT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Chess · Beginner on a Mission
            </Typography>

            <Typography sx={{ opacity: 0.7, mb: 3 }}>
              Current rating: 800.  
              Goal: 1500.  
              Every game is a lesson. Thinking over impulsiveness.
            </Typography>

            <Typography sx={{ opacity: 0.4 }}>
              Discipline · Patience · Mental training
            </Typography>
          </Grid>

          {/* IMAGE RIGHT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={chessImage}
              alt="Chess"
              loading="lazy"
              sx={{
                width: "100%",
                borderRadius: 4,
                opacity: 0.9,
                transition: "0.4s",
                "&:hover": {
                  opacity: 1,
                  transform: "scale(1.015)",
                },
              }}
            />
          </Grid>
        </Grid>
      </motion.div>

      <Divider sx={{ backgroundColor: "#222", my: 8 }} />

      {/* ===== LESSON CARDS ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={4}>
          {lessons.map((lesson) => (
            <Grid size={{ xs: 12, md: 3 }} key={lesson}>
              <Card
                sx={{
                  backgroundColor: "#161616",
                  borderRadius: 4,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    backgroundColor: "#1b1b1b",
                  },
                }}
              >
                <CardContent>
                  <Typography fontWeight={600}>{lesson}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography sx={{ mt: 6, opacity: 0.4, textAlign: "center" }}>
          Skill comes later. Discipline comes first. Rating will follow.
        </Typography>
      </motion.div>
    </Box>
  );
}
