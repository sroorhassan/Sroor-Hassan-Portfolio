import { Box, Container, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Instagram, Email } from "@mui/icons-material";

export default function Footer() {
  const iconStyle = {
    color: "white",
    transition: "0.3s",
    padding: "10px",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.15)",
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#111",
        color: "white",
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <IconButton
            component="a"
            href="https://github.com/sroorhassan"
            target="_blank"
            sx={iconStyle}
          >
            <GitHub />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/sroorhassan"
            target="_blank"
            sx={iconStyle}
          >
            <LinkedIn />
          </IconButton>

          <IconButton
            component="a"
            href="https://instagram.com/sroor.hs"
            target="_blank"
            sx={iconStyle}
          >
            <Instagram />
          </IconButton>

          <IconButton
            component="a"
            href="mailto:sroorhassan.dev@gmail.com"
            sx={iconStyle}
          >
            <Email />
          </IconButton>
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          © 2025 Sroor Hassan — All Rights Reserved.
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.5)",
            mt: 0.5,
          }}
        >
          Built with ❤️ using React & MUI
        </Typography>
      </Container>
    </Box>
  );
}
