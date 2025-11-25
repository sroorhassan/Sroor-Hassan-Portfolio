import { Box, Typography, Grid } from "@mui/material";
import code from "../imgs/code2.webp";
import SkillBox from "../components/Skills/SkillBox";
function Skills() {

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
