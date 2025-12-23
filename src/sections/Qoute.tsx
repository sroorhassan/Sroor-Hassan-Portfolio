import {
  Box,
  Avatar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import img from "../assets/Images/Qoutes/David-Goggins.webp"
export default function QuoteSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        mt: 8,
        py: 6,
        borderTop: "1px solid #2a2a2a",
        borderBottom: "1px solid #2a2a2a",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Avatar */}
          <Avatar
            src={img}
            alt="David Goggins"
            sx={{
              width: { xs: 120, md: 140 },
              height: { xs: 120, md: 140 },
              borderRadius: 3,
              flexShrink: 0,
              filter: "grayscale(100%)",
            }}
          />

          {/* Text */}
          <Box sx={{ maxWidth: 720 }}>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 20 },
                fontWeight: 600,
                lineHeight: 1.6,
              }}
            >
              “You are in danger of living a life so comfortable and soft that you
              will die without ever realizing your true potential.”
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                opacity: 0.6,
                fontSize: 15,
              }}
            >
              — David Goggins
            </Typography>

            <Button
              variant="text"
              onClick={() => navigate("/quotes")}
              sx={{
                mt: 3,
                px: 0,
                textTransform: "none",
                fontSize: 15,
                fontWeight: 600,
                color: "inherit",
                opacity: 0.7,
                "&:hover": {
                  opacity: 1,
                  backgroundColor: "transparent",
                },
              }}
            >
              View more quotes →
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
