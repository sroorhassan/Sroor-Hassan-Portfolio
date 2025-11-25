import { Box, Typography, Grid } from "@mui/material";
import code from "../imgs/code2.webp";
import SkillBox from "../components/Skills/SkillBox";
import {
  Code as CodeIcon,
  Javascript as JavascriptIcon,
  Html as HtmlIcon,
  Css as CssIcon,
  DataObject as DataObjectIcon,
  Storage as StorageIcon,
  Source as SourceIcon,
  Settings as SettingsIcon,
  Hub as HubIcon,
  PrecisionManufacturing as PrecisionIcon,
  Lan as LanIcon,
  Psychology as PsychologyIcon,
  Schema as SchemaIcon,
  GitHub as GitHubIcon,
  IntegrationInstructions as IntegrationIcon,
  Construction as ConstructionIcon,
} from "@mui/icons-material";
function Skills() {
  const programmingSkills = [
    // 🧠 Programming Languages
    { name: "C++", icon: <CodeIcon fontSize="small" /> },
    { name: "C#", icon: <DataObjectIcon fontSize="small" /> },
    { name: "JavaScript", icon: <JavascriptIcon fontSize="small" /> },
    { name: "TypeScript", icon: <IntegrationIcon fontSize="small" /> },
    { name: "HTML", icon: <HtmlIcon fontSize="small" /> },
    { name: "CSS", icon: <CssIcon fontSize="small" /> },

    // ⚙️ Frameworks & Libraries
    { name: "React", icon: <HubIcon fontSize="small" /> },
    { name: ".NET", icon: <LanIcon fontSize="small" /> },
    { name: "Bootstrap", icon: <ConstructionIcon fontSize="small" /> },

    // 🧩 Preprocessors & Tools
    { name: "SASS", icon: <SettingsIcon fontSize="small" /> },
    { name: "Pug.js", icon: <PrecisionIcon fontSize="small" /> },
    { name: "Gulp.js", icon: <SourceIcon fontSize="small" /> },
    { name: "Windows Services", icon: <LanIcon fontSize="small" /> },
    { name: "Git", icon: <GitHubIcon fontSize="small" /> },

    // 🗄️ Database
    { name: "SQL Server", icon: <StorageIcon fontSize="small" /> },

    // 💡 Concepts & Others
    { name: "OOP", icon: <SchemaIcon fontSize="small" /> },
    { name: "Problem Solving", icon: <PsychologyIcon fontSize="small" /> },
    { name: "Algorithms", icon: <SchemaIcon fontSize="small" /> },
    { name: "Data Structures", icon: <SchemaIcon fontSize="small" /> },
    { name: "RESTful APIs", icon: <IntegrationIcon fontSize="small" /> },
  ];

  return (
    <Box sx={{ p: 4, paddingTop: 6 }} id={"Skills"}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "200",
          textAlign: "center",
          fontFamily: "Playfair",
          textTransform: "uppercase",
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={3} justifyContent={"center"}>
        <SkillBox
        skillTitle={"Programming"}
          pageURL={"skills/programmingskills"}
          image={code}
        />
      </Grid>
    </Box>
  );
}

export default Skills;
