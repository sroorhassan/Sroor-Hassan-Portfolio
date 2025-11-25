import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaGitAlt,
  FaWindows,
  FaCode,
  FaBrain,
  FaProjectDiagram,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiTypescript,
  SiDotnet,
  SiBootstrap,
  SiSass,
  SiPug,
  SiGulp,
} from "react-icons/si";

const programmingData = [
  {
    id: 1,
    title: "C++",
    date: "2023",
    category: "Programming Language",
    type: "Desktop / System",
    certificatesSources: ["/certificates/prgrammingSkills/certificate-of-completion-for-introduction-to-programming-using-c-level-2.pdf"],
    icon: <SiCplusplus size={40} color="#00599C" />,
  },
  {
    id: 2,
    title: "C#",
    date: "2023",
    category: "Programming Language",
    type: "Backend / Desktop",
    certificatesSources: ["/certificates/prgrammingSkills/certificate-of-completion-for-14-c-level-1 (2).pdf","/certificates/prgrammingSkills/certificate-of-completion-for-18-c-database-connectivity.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-20-c-programming-level-2.pdf"],
    icon: <FaWindows size={40} color="#68217A" />,
  },
  {
    id: 3,
    title: "JavaScript",
    date: "2023",
    category: "Programming Language",
    type: "Frontend",
    certificatesSources: [],
    icon: <FaJs size={40} color="#f7df1e" />,
  },
  {
    id: 4,
    title: "TypeScript",
    date: "2024",
    category: "Programming Language",
    type: "Frontend / Backend",
    certificatesSources: [],
    icon: <SiTypescript size={40} color="#3178c6" />,
  },
  {
    id: 5,
    title: "HTML5 & CSS3",
    date: "2022",
    category: "Programming Language",
    type: "Frontend",
    certificatesSources: ["/certificates/prgrammingSkills/certificate-of-completion-for-html-deep-dive.pdf"],
    icon: <FaHtml5 size={40} color="#e34c26" />,
  },

  {
    id: 6,
    title: "React",
    date: "2023",
    category: "Framework / Library",
    type: "Frontend",
    certificatesSources: [],
    icon: <FaReact size={40} color="#61dafb" />,
  },
  {
    id: 7,
    title: ".NET",
    date: "2023",
    category: "Framework / Library",
    type: "Backend",
    certificatesSources: ["/certificates/prgrammingSkills/certificate-of-completion-for-14-c-level-1 (2).pdf"],
    icon: <SiDotnet size={40} color="#512BD4" />,
  },
  {
    id: 8,
    title: "Bootstrap",
    date: "2022",
    category: "Framework / Library",
    type: "Frontend",
    certificatesSources: [],
    icon: <SiBootstrap size={40} color="#7952B3" />,
  },


  {
    id: 9,
    title: "SASS",
    date: "2022",
    category: "Tool",
    type: "Preprocessor",
    certificatesSources: [],
    icon: <SiSass size={40} color="#CC6699" />,
  },
  {
    id: 10,
    title: "Pug.js",
    date: "2022",
    category: "Tool",
    type: "Template Engine",
    certificatesSources: [],
    icon: <SiPug size={40} color="#A86454" />,
  },
  {
    id: 11,
    title: "Gulp.js",
    date: "2022",
    category: "Tool",
    type: "Build Tool",
    certificatesSources: [],
    icon: <SiGulp size={40} color="#CF4647" />,
  },
  {
    id: 12,
    title: "Git",
    date: "2023",
    category: "Tool",
    type: "Version Control",
    certificatesSources: [],
    icon: <FaGitAlt size={40} color="#F05032" />,
  },
  {
    id: 13,
    title: "Windows Services",
    date: "2024",
    category: "Tool",
    type: "System Service",
    certificatesSources: [],
    icon: <FaWindows size={40} color="#0078D6" />,
  },

  {
    id: 14,
    title: "SQL Server",
    date: "2023",
    category: "Database",
    type: "Backend",
    certificatesSources: ["/certificates/prgrammingSkills/certificate-of-completion-for-15-database-level-1-sql-concepts-and-practice.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-17-database-sql-projects-practice.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-18-c-database-connectivity.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-21-database-level2-concepts-t-sql.pdf"],
    icon: <FaDatabase size={40} color="#CC2927" />,
  },

  {
    id: 16,
    title: "OOP (Object-Oriented Programming)",
    date: "2023",
    category: "Concept",
    type: "General",
    certificatesSources: ["/certificates/prgrammingSkills/certificate-of-completion-for-10-oop-as-it-should-be-concepts.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-11-oop-as-it-should-be-applications.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-16-oop-as-it-should-be-in-c.pdf"],
    icon: <FaCode size={40} color="#4caf50" />,
  },
  {
    id: 17,
    title: "Problem Solving",
    date: "2023",
    category: "Concept",
    type: "General",
    certificatesSources: ["/certificates/prgrammingSkills/certificate-of-completion-for-algorithms-problem-solving-level-2.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-algorithms-problem-solving-level-3.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-08-algorithms-problem-solving-level-4.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-13-algorithms-problem-solving-level-5.pdf"],
    icon: <FaBrain size={40} color="#ff9800" />,
  },
  {
    id: 18,
    title: "Algorithms",
    date: "2023",
    category: "Concept",
    type: "General",
    certificatesSources: ["/certificates/prgrammingSkills/certificate-of-completion-for-algorithms-problem-solving-level-2.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-algorithms-problem-solving-level-3.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-08-algorithms-problem-solving-level-4.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-13-algorithms-problem-solving-level-5.pdf"],
    icon: <FaProjectDiagram size={40} color="#03a9f4" />,
  },
  {
    id: 19,
    title: "Data Structures",
    date: "2023",
    category: "Concept",
    type: "General",
    certificatesSources: ["/certificates/prgrammingSkills/certificate-of-completion-for-12-data-structures-level1.pdf","/certificates/prgrammingSkills/certificate-of-completion-for-22-data-structures-level-2-in-c.pdf"],
    icon: <FaDatabase size={40} color="#9c27b0" />,
  },
  {
    id: 20,
    title: "RESTful APIs",
    date: "2024",
    category: "Concept",
    type: "Backend",
    certificatesSources: ["/certificates/prgrammingSkills/certificate-of-completion-for-introduction-to-restful-api.pdf"],
    icon: <FaNetworkWired size={40} color="#2196f3" />,
  },
];

const categories = [ "All","Programming Language","Concept","Database","Framework / Library","Tool"];

const ProgrammingSkills = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const filteredCourses = programmingData.filter((course) => {
    const categoryMatch =
      selectedCategory === "All" || course.category === selectedCategory;

    return categoryMatch;
  });


  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedImage("");
  };

  return (
    <Box sx={{ p: 4 }}>
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
        Programming
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 3,
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "contained" : "outlined"}
            color="primary"
            onClick={() => setSelectedCategory(cat)}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              "&:hover": { backgroundColor: "#1976d2" },
              textTransform: "capitalize",
            }}
          >
            {cat}
          </Button>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 4,
          flexWrap: "wrap",
        }}
      >
      </Box>

      <Grid container spacing={3}>
        {filteredCourses.map((course) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={course.id}>
<Card
  sx={{
    p: 3,
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderRadius: 3,
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 20px rgba(255,255,255,0.2)",
    },
  }}
>
  <Box sx={{ mb: 2 }}>{course.icon}</Box>

  <Typography variant="h6" sx={{ mb: 1 }}>
    {course.title}
  </Typography>

  <Typography variant="body2" color="gray" sx={{ mb: 2 }}>
    {course.category} — {course.type}
  </Typography>

  <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
    {course.certificatesSources && course.certificatesSources.length > 0 ? (
      course.certificatesSources.map((url, index) => (
        <Box
          key={index}
          component="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            px: 2,
            py: 0.7,
            borderRadius: 2,
            fontSize: "13px",
            backgroundColor: "#222",
            border: "1px solid #444",
            color: "#ddd",
            textDecoration: "none",
            transition: "0.3s ease",
            "&:hover": {
              backgroundColor: "#333",
              color: "#fff",
              borderColor: "#666",
              transform: "scale(1.05)",
            },
          }}
        >
          Certificate {index + 1}
        </Box>
      ))
    ) : (
      <Typography variant="body2" color="gray">
        No certificates
      </Typography>
    )}
  </Box>
</Card>

          </Grid>
        ))}
      </Grid>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { backgroundColor: "#121212", color: "#fff" },
        }}
      >
        <DialogContent>
          <img
            src={selectedImage}
            alt="Certificate"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            variant="outlined"
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProgrammingSkills;
