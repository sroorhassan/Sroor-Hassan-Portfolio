import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function ClosingSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Box sx={{ textAlign: "center", mt: 18 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          What These Activities Built
        </Typography>

        <Typography sx={{ opacity: 0.7 }}>
          Discipline · Endurance · Focus · Long-term thinking
        </Typography>

        <Typography sx={{ mt: 2, opacity: 0.35, fontSize: 14 }}>
          Results follow structure.
        </Typography>
      </Box>
    </motion.div>
  );
}
