import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Dialog,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Sror1 from '../imgs/Sror 1.webp';
import Sror2 from "../imgs/Sror 2.webp";
import Sror3 from "../imgs/Sror 3.webp";
import Sror4 from "../imgs/Sror 4.webp";
import Sror5 from "../imgs/Sror 5.webp";
import Sror6 from "../imgs/Sror 6.webp";
import Masonry from "@mui/lab/Masonry";

const allImages = [
  { src: Sror1, category: "fitness", shootedBy: "iPhone 14 Pro Max" },
  { src: Sror2, category: "modeling", shootedBy: "iPhone 16 Pro Max" },
  { src: Sror3, category: "modeling", shootedBy: "iPhone 13 Pro Max" },
  { src: Sror4, category: "modeling", shootedBy: "S23 Ultra" },
  { src: Sror5, category: "modeling", shootedBy: "iPhone 16 Pro Max" },
  { src: Sror6, category: "modeling", shootedBy: "iPhone 16 Pro Max" },
];

export default function Gallery() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    filter === "all"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  return (
    <Box sx={{ p: 4, paddingTop: 6 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#151515",
            color: "white",
            mr: 1,
            "&:hover": {
              backgroundColor: "#1e1e1e",
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Box>

      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 200,
          textAlign: "center",
          fontFamily: "Playfair",
          textTransform: "uppercase",
        }}
      >
        Gallery
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <ToggleButtonGroup
          color="primary"
          style={{ backgroundColor: "#dbdbdb" }}
          exclusive
          value={filter}
onChange={(_, newValue) => newValue && setFilter(newValue)}
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="modeling">Modeling</ToggleButton>
          <ToggleButton value="fitness">Fitness</ToggleButton>
          <ToggleButton value="random">Random</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box sx={{ width: "100%", minHeight: 829, marginLeft: "10px" }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {filteredImages.map((item) => (
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                cursor: "pointer",
                "&:hover .overlay": {
                  opacity: 1,
                },
              }}
            >
              <img
                srcSet={`${item.src}?w=162&auto=format&dpr=2 2x`}
                src={`${item.src}?w=162&auto=format`}
                alt={item.category}
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  borderRadius: "8px",
                  transition: "transform 0.4s ease",
                }}
              />

              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(to top, rgba(255, 255, 255, 0.27) 0%, transparent 30%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500px",
                }}
              >
                <Box marginBottom={"15px"}>{item.shootedBy} </Box>
              </Box>
            </Box>
          ))}
        </Masonry>
      </Box>

      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={selectedImage || ""}
            alt="preview"
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              display: "block",
              margin: "auto",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Dialog>
    </Box>
    // <Box sx={{ p: 4, paddingTop: 6 }}>
    //   <IconButton onClick={() => navigate(-1)} sx={{ mb: 2 }}>
    //     <ArrowBackIcon />
    //   </IconButton>

    //   <Typography
    //     variant="h4"
    //     sx={{
    //       mb: 4,
    //       fontWeight: 200,
    //       textAlign: "center",
    //       fontFamily: "Playfair",
    //       textTransform: "uppercase",
    //     }}
    //   >
    //     Gallery
    //   </Typography>

    //   {/* 🧭 الفلترة */}
    //   <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
    //     <ToggleButtonGroup
    //       color="primary"
    //       style={{ backgroundColor: "#dbdbdb" }}
    //       exclusive
    //       value={filter}
    //       onChange={(e, newValue) => newValue && setFilter(newValue)}
    //     >
    //       <ToggleButton value="all">All</ToggleButton>
    //       <ToggleButton value="club">Club</ToggleButton>
    //       <ToggleButton value="modeling">Modeling</ToggleButton>
    //       <ToggleButton value="sessions">Sessions</ToggleButton>
    //     </ToggleButtonGroup>
    //   </Box>

    //   <Box sx={{ p: 8, paddingTop: 6 }}>
    //     <Grid container sx={{ display: "block", gap: "15px", columns: 3 }}>
    //       {filteredImages.map((img, i) => (
    //         <ShowImageCard key={i} Image={img.src} />
    //       ))}
    //     </Grid>
    //   </Box>

    //   <Dialog
    //     open={!!selectedImage}
    //     onClose={() => setSelectedImage(null)}
    //     maxWidth="lg"
    //   >
    //     <Box sx={{ position: "relative" }}>
    //       <IconButton
    //         onClick={() => setSelectedImage(null)}
    //         sx={{
    //           position: "absolute",
    //           top: 10,
    //           right: 10,
    //           color: "white",
    //           backgroundColor: "rgba(0,0,0,0.5)",
    //           "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
    //         }}
    //       >
    //         <CloseIcon />
    //       </IconButton>
    //       <Box
    //         component="img"
    //         src={selectedImage || ""}
    //         alt="preview"
    //         sx={{
    //           maxWidth: "90vw",
    //           maxHeight: "90vh",
    //           display: "block",
    //           margin: "auto",
    //           borderRadius: "10px",
    //         }}
    //       />
    //     </Box>
    //   </Dialog>
    // </Box>
  );
}
