// Activities Page – React + MUI (TypeScript Ready)
// Strong, dark, minimal, with images support

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { motion, cubicBezier } from "framer-motion";
import type { Variants } from "framer-motion";
import run1 from "../assets/Images/Running/1.webp";
import run2 from "../assets/Images/Running/2.webp";
import run3 from "../assets/Images/Running/3.webp";
const images = [run1, run2, run3];
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

export default function Activities() {
  return (
    <Box
      sx={{
        backgroundColor: "#0f0f0f",
        color: "#ffffff",
        minHeight: "100vh",
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero */}
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <Box sx={{ mb: 12 }}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Activities
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.6 }}>
              Discipline beyond the screen.
            </Typography>
          </Box>
        </motion.div>

        {/* Running Section */}
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <Box sx={{ mb: 14 }}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Running · The Long Game
            </Typography>
            <Typography sx={{ opacity: 0.6, mb: 6 }}>
              Progress is measured in silence.
            </Typography>

            <Grid container spacing={6}>
              {/* Timeline */}
              <Grid size={{xs:12, md:7}}>
                <Grid container spacing={3}>
                  {[
                    "10 km non-stop",
                    "20 km milestone",
                    "28 km personal record",
                    "500+ km total distance",
                  ].map((item, index) => (
                    <Grid size={{xs:12, sm:6}} key={index}>
                      <Card
                        sx={{
                          backgroundColor: "#161616",
                          borderRadius: 3,
                          height: "100%",
                          borderLeft: "3px solid #b8100a",
                        }}
                      >
                        <CardContent>
                          <Typography fontWeight={600}>{item}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Typography sx={{ mt: 4, opacity: 0.5 }}>
                  Same effort. Longer distance.
                </Typography>
              </Grid>

              {/* Images */}
              <Grid size={{xs:12, md:5}}>
                <Grid container spacing={2}>
                  {images.map((img) => (
                    <Grid size={{xs:12}} key={img}>
                      <Box
                        component="img"
                        src={img}
                        loading="lazy"
                        sx={{
                          width: "100%",
                          borderRadius: 3,
                          opacity: 0.85,
                          transition: "0.3s",
                          '&:hover': {
                            opacity: 1,
                            transform: 'scale(1.02)',
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        <Divider sx={{ backgroundColor: "#222", mb: 12 }} />

        {/* Books Section */}
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <Box sx={{ mb: 14 }}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Books · Quiet Influence
            </Typography>
            <Typography sx={{ opacity: 0.6, mb: 5 }}>
              I don’t collect books. I extract ideas.
            </Typography>

            <Grid container spacing={3}>
              {[
                "Atomic Habits — Consistency compounds",
                "Deep Work — Focus is leverage",
                "Thinking, Fast and Slow — Awareness matters",
              ].map((book, index) => (
                <Grid size={{xs:12, md:4}} key={index}>
                  <Card sx={{ backgroundColor: "#161616", borderRadius: 3 }}>
                    <CardContent>
                      <Typography fontWeight={500}>{book}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography sx={{ mt: 4, opacity: 0.5 }}>
              Ideas don’t fade. They compound.
            </Typography>
          </Box>
        </motion.div>

        <Divider sx={{ backgroundColor: "#222", mb: 12 }} />

        {/* Chess Section */}
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <Box sx={{ mb: 14 }}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Chess · Thinking Ahead
            </Typography>
            <Typography sx={{ opacity: 0.6, mb: 3 }}>
              Every move has a cost.
            </Typography>

            <Typography sx={{ opacity: 0.8 }}>• Long-term positioning over quick wins</Typography>
            <Typography sx={{ opacity: 0.8 }}>• Pattern recognition</Typography>
            <Typography sx={{ opacity: 0.8 }}>• Calm decisions under pressure</Typography>

            <Typography sx={{ mt: 4, opacity: 0.5 }}>
              Impatience loses games.
            </Typography>
          </Box>
        </motion.div>

        {/* Closing */}
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
          <Box sx={{ textAlign: "center", mt: 16 }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              What These Activities Built
            </Typography>
            <Typography sx={{ opacity: 0.7 }}>
              Discipline · Patience · Focus · Long-term thinking
            </Typography>
            <Typography sx={{ mt: 2, opacity: 0.4 }}>
              Results follow structure.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
