import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  LinearProgress,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
// import GermanyCertificate from "../../certificates/languages/Germany.png";
const languagesData = [
  {
    id: 1,
    name: "Kurdish",
    level: 100,
    languageLevel: "Native",
    certificateAvailable: false,
    certificateImage: "",
  },
  {
    id: 2,
    name: "Arabic",
    level: 100,
    languageLevel: "Fluent",
    certificateAvailable: false,
    certificateImage: "",
  },
  {
    id: 3,
    name: "English",
    level: 60,
    languageLevel: "B1",
    certificateAvailable: false,
    certificateImage: "",
  },
  {
    id: 4,
    name: "German",
    level: 50,
    languageLevel: "B1",
    certificateAvailable: true,
    certificateImage: "",
  },
];

const LanguagesPage = () => {
  const navigate = useNavigate();

  const [openCertificate, setOpenCertificate] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState("");

  const handleOpenCertificate = (image: string) => {
    setSelectedCertificate(image);
    setOpenCertificate(true);
  };

  const handleCloseCertificate = () => {
    setOpenCertificate(false);
    setSelectedCertificate("");
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* زر الرجوع */}
      <IconButton onClick={() => navigate("/")} sx={{ mb: 3, color: "#fff" }}>
        <ArrowBackIcon />
        <Typography variant="body1" sx={{ ml: 1 }}>
          Back
        </Typography>
      </IconButton>

      <Typography
        variant="h4"
        sx={{
          mb: 4,
          color: "#fff",
          fontFamily: "Playfair",
          textAlign: "center",
        }}
      >
        Languages & Certificates
      </Typography>

      <Grid container spacing={3}>
        {languagesData.map((lang) => (
          <Grid size={{ xs: 12 }} key={lang.id}>
            <Card
              sx={{
                p: 3,
                backgroundColor: "#1a1a1a",
                color: "#fff",
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                {lang.name} - ({lang.level}%)
              </Typography>
              <LinearProgress
                variant="determinate"
                value={lang.level}
                sx={{ height: 10, borderRadius: 5, mb: 1 }}
              />
              <Typography variant="body2" color="gray" sx={{ mb: 2 }}>
                Level: {lang.languageLevel}
              </Typography>

              {lang.certificateAvailable ? (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleOpenCertificate(lang.certificateImage)}
                >
                  View Certificate
                </Button>
              ) : (
                <Typography variant="body2" color="gray">
                  Certificate not available
                </Typography>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog لعرض الشهادة */}
      <Dialog
        open={openCertificate}
        onClose={handleCloseCertificate}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Certificate</DialogTitle>
        <DialogContent>
          <Box
            component="img"
            src={selectedCertificate}
            alt="Certificate"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCertificate} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LanguagesPage;
