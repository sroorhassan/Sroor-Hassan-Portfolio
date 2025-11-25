import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface SkillBoxProps {
skillTitle:String;
  pageURL:string;
  image: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({skillTitle, pageURL, image }) => {
const navigate = useNavigate();

  return (
    <Grid
      size={{ lg: 3, md: 6, sm: 12, xs: 12 }}
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 230,
          perspective: "1000px",
          position: "relative",
          transition: "transform 0.25s ease",
          "&:hover": {
            transform: "scale(1.02)",
            cursor:"pointer"
          },
          
        }}
onClick={() => navigate(pageURL)}
      >

        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            transition: "transform 0.8s cubic-bezier(.2,.9,.3,1)",
            transformStyle: "preserve-3d",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={""}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.65) 100%)",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 12,
                left: 12,
                right: 12,
                zIndex: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  fontSize: "16px",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                {skillTitle}
              </Typography>
            </Box>
          </Box>

        </Box>
      </Box>
    </Grid>
  );
};

export default SkillBox;
