import React, { useState } from "react";
import { Grid, Typography, Box, IconButton, Button } from "@mui/material";
import FlipIcon from "@mui/icons-material/Flip";
interface ShowProjectCardProps {
  Title: string;
  Image: string;
  About: string;
  Link: string;
}

const ShowProjectCard: React.FC<ShowProjectCardProps> = ({
  Title,
  Image,
  About,
  Link,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Grid
      size={{ lg: 4, md: 6, sm: 12, xs: 12 }}
      sx={{
        perspective: "1000px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "300px",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            backgroundColor: "#151515",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            p: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "secondary.main",
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 10,
              "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
            onClick={() => setFlipped(true)}
          >
            <FlipIcon style={{ fontSize: "20px" }} />
          </IconButton>

          <Box
            sx={{
              width: "100%",
              height: "200px",
              borderRadius: "10px",
              mb: 2,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={Image}
              alt={Title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.30)",
              }}
            />
          </Box>

          <Typography
            variant="h6"
            sx={{
              color: "text.primary",
              fontWeight: 600,
              fontSize: "18px",
            }}
          >
            {Title}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            backgroundColor: "#151515",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 2,
            transform: "rotateY(180deg)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,

              color: "secondary.main",
              backgroundColor: "rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
            onClick={() => setFlipped(false)}
          >
            <FlipIcon style={{ fontSize: "20px" }} />
          </IconButton>
          <Box
            sx={{
              overflowY: "auto",
              mt: 5,
              mb: 3,
              pt: 1,
              pb: 1,
              "&::-webkit-scrollbar": {
                width: "6px", // عرض الشريط
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#555", // لون الشريط
                borderRadius: "10px", // حواف ناعمة
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#777", // تأثير hover
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: "14px",
                mb: 2,
              }}
            >
              {About}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="secondary"
            href={Link}
            target="_blank"
          >
            GitHub
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ShowProjectCard;
