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

// import runningImage from "../../../assets/Images/Running/2.webp";
import Sroor from "../../../imgs/Sror 2.webp";
// import runningImage from "../assets/Images/Running/main.webp";

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

export default function RunningSection() {
  return (
    <Box sx={{ mb: 18 }}>
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
              Mental Load Conditioning
            </Typography>

            <Typography sx={{ opacity: 0.7, mb: 3 }}>
              Running is where fatigue removes excuses.  
              What remains is discipline.
            </Typography>

            <Typography sx={{ opacity: 0.4 }}>
              Long distances · Controlled pace · Silent work
            </Typography>
          </Grid>

          {/* Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={Sroor}
              alt="Running"
              loading="lazy"
              sx={{
                width: "85%",
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

      {/* ===== STATS CARDS ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Grid container spacing={4}>
          {/* Card 1 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              value="28"
              unit="km"
              title="Longest continuous run"
              note="Endurance under control"
            />
          </Grid>

          {/* Card 2 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              value="49"
              unit="min"
              title="Fastest 10K time"
              note="Pace discipline"
            />
          </Grid>

          {/* Card 3 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              value="500+"
              unit="km"
              title="Total distance covered"
              note="Consistency over time"
            />
          </Grid>
        </Grid>

        <Typography sx={{ mt: 6, opacity: 0.4, textAlign: "center" }}>
          Numbers are not the point. Repetition is.
        </Typography>
      </motion.div>
    </Box>
  );
}

/* ===== STAT CARD COMPONENT ===== */

type StatCardProps = {
  value: string;
  unit: string;
  title: string;
  note: string;
};

function StatCard({ value, unit, title, note }: StatCardProps) {
  return (
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
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ lineHeight: 1 }}
        >
          {value}
          <Typography
            component="span"
            sx={{ fontSize: 16, opacity: 0.5, ml: 1 }}
          >
            {unit}
          </Typography>
        </Typography>

        <Typography sx={{ mt: 2, opacity: 0.7 }}>
          {title}
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.4, fontSize: 14 }}>
          {note}
        </Typography>
      </CardContent>
    </Card>
  );
}
