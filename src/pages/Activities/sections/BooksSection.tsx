import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion, cubicBezier } from "framer-motion";
import type { Variants } from "framer-motion";

import atomic from "../../../assets/Images/Books/atomic-habits.webp";
import surrounded from "../../../assets/Images/Books/surrounded-by-idiots.webp";
import cantHurt from "../../../assets/Images/Books/cant-hurt-me.webp";


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

const books = [
  {
    title: "Atomic Habits",
    subtitle: "Small systems beat motivation",
    image: atomic,
  },
  {
    title: "Surrounded by Idiots",
    subtitle: "Understand behavior patterns",
    image: surrounded,
  },
  {
    title: "Can't Hurt Me",
    subtitle: "Mental callousing",
    image: cantHurt,
  },
];

export default function BooksSection() {
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
          {/* Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Reading · Silent Reprogramming
            </Typography>

            <Typography sx={{ opacity: 0.7, mb: 3 }}>
              Books are tools.  
              I don’t read for comfort. I read to adjust behavior.
            </Typography>

            <Typography sx={{ opacity: 0.4 }}>
              Systems · Psychology · Mental resilience
            </Typography>
          </Grid>

          {/* Visual */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              {[atomic, surrounded, cantHurt].map((img, i) => (
                <Box
                  key={img}
                  component="img"
                  src={img}
                  loading="lazy"
                  sx={{
                    width: 120,
                    borderRadius: 2,
                    transform: `translateY(${i * 12}px)`,
                    opacity: 0.85,
                    transition: "0.3s",
                    "&:hover": {
                      opacity: 1,
                      transform: `translateY(${i * 12 - 6}px) scale(1.03)`,
                    },
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </motion.div>

      {/* ===== BOOK CARDS ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={4} sx={{ mt: 8 }}>
          {books.map((book) => (
            <Grid size={{ xs: 12, md: 4 }} key={book.title}>
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
                  <Box
                    component="img"
                    src={book.image}
                    sx={{
                      width: "100%",
                      borderRadius: 2,
                      mb: 3,
                      opacity: 0.9,
                    }}
                  />

                  <Typography fontWeight={600}>
                    {book.title}
                  </Typography>

                  <Typography sx={{ opacity: 0.5, mt: 1 }}>
                    {book.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography sx={{ mt: 6, opacity: 0.4, textAlign: "center" }}>
          Knowledge compounds when applied.
        </Typography>
      </motion.div>
    </Box>
  );
}
