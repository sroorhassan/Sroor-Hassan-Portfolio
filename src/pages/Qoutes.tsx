import { Container, Grid, Typography, Box, CssBaseline, IconButton, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import img1 from "/Qoutes/David Goggins 1.jpg";
import img2 from "/Qoutes/Steve Jobs 1.png";
import img3 from "/Qoutes/Muhamed Ali 1.jpeg";
import img4 from "/Qoutes/Albert Einstein 1.jpeg";

const quotes = [
    {
        author: "David Goggins",
        text: "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.",
        img: img1,
    },
    {
        author: "Steve Jobs",
        text: "Your time is limited, so don’t waste it living someone else’s life.",
        img: img2
    },
    {
        author: "Muhammad Ali",
        text: "Don’t count the days, make the days count.",
        img: img3
    },
    {
        author: "Albert Einstein",
        text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        img: img4
    },
];

export default function QuotesPage() {
    const navigate = useNavigate();
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 6 }}>
                    <Button sx={{
                        backgroundColor: "#151515",
                        color: "white",
                        mr: 1,
                        "&:hover": {
                            backgroundColor: "#1e1e1e",
                        },
                    }} onClick={() => navigate("/")}
                    >Go to home</Button>
                </Box>
                <Grid container spacing={10}>
                    {quotes.map((q, idx) => {
                        const isReversed = idx % 2 === 1;

                        return (
                            <Grid size={{ xs: 12 }} key={idx}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: isReversed ? "row-reverse" : "row",
                                        alignItems: "center",
                                        gap: 5,
                                        flexWrap:"wrap"
                                    }}
                                >
<Box
  component="img"
  src={q.img}
  alt={q.author}
  sx={{
    width: { xs: "100%", sm: "45%" },
    height: 300,
    objectFit: "cover",
    borderRadius: 3,
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  }}
/>


                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 300, lineHeight: 1.6, fontSize: "20px",textAlign:"center" }}>
                                            “{q.text}”
                                        </Typography>
                                        <Typography variant="h6" sx={{ mt: 2, opacity: 0.7, fontWeight: 100, fontSize: "15px",textAlign:"center" }}>
                                            — {q.author}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
}