import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  percent: number;
  skill: string;
}

export default function SkillBar({ percent, skill }: SkillBarProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ width: "100%" }} ref={ref} mb={2}>
      <Typography
        sx={{
          fontSize: "12px",
          color: "#ffffff",
          mb: "2px",
        }}
      >
        {skill}
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: "15px",
          backgroundColor: "#6b0f1a",
          border: "2px solid #6b0f1a",
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden",

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,

            width: inView ? `${percent}%` : "0%",
            transition: "width 1.5s ease",

            height: "100%",
            backgroundColor: "rgba(125, 93, 93, 0.58)",
            borderRadius: 2,
          },

        //   "&::after": {
        //     content: `"${percent}%"`,
        //     position: "absolute",
        //     top: -2,
        //     right: "-37px",
        //     color: "white",
        //     fontSize: "13px",
        //     fontWeight: "bold",
        //   },
        }}
      />
    </Box>
  );
}
