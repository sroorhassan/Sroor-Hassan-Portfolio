import { Box, Avatar, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function QuoteSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        borderRadius: "12px",
        borderTop: "1px solid #666666ff",
        borderBottom: "1px solid #666666ff",
        mt: 3
      }}
    >
      <Container maxWidth="lg">
            <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 3,
        p: 3,
        borderRadius: "12px",
        // backgroundColor: "#f7f7f7",
        mt: 3
      }}
    >
      <Avatar
        src="/Qoutes/David Goggins 1.jpg"
        alt="David Goggins"
        sx={{
          width: 140,
          height: 140,
          borderRadius: "12px",
          objectFit: "cover"
        }}
      />

      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: 1.4
          }}
        >
          “You are in danger of living a life so comfortable and soft that you
          will die without ever realizing your true potential.”
        </Typography>

        <Typography sx={{ mt: 1, opacity: 0.7, fontSize: "16px" }}>
          — David Goggins
        </Typography>

        <Button
          variant="text"
          sx={{
            mt: 2,
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 600
          }}
          onClick={() => navigate("/quotes")}
        >
          Show More →
        </Button>
      </Box></Box>

      </Container>
    </Box>
  );
}
