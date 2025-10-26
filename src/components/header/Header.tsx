import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          height: "60vh",
          mt: "3vh",
          borderRadius: 6,
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end", // Align content to the right
          position: "relative",
          p: { xs: 2, md: 3 }, // Inner padding for text safety
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderRadius: 6,
            zIndex: 1,
          },
        }}
      >
        {/* Text Container - Stacked & Right-Aligned */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "70%" },
            textAlign: "right",
            zIndex: 2,
            pr: { xs: 2, md: 4 }, // Extra right padding to avoid edge
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              lineHeight: 1.2,
              mb: 2,
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            Welcome to Eventily
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{
              color: "white",
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.6,
              textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
            }}
          >
            Develop a mini event booking system where users can browse events,
            book seats, and organizers can manage event listings.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;