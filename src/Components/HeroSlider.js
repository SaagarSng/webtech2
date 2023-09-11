import React, { useState, useEffect } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/system";
import img2 from "../images/slider1.jpg";
import homeImage from "../images/slider2.jpg";

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontFamily: "Arial",
  fontSize: "48px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
}));

const HeroSlider = () => {
  const slides = [
    {
      title: "Welcome to Synergy",
      description: "transforming Your Business with IT Excellence",
      buttonLabel: "Explore Services",
      buttonLink: "/services",
      image: homeImage,
    },
    {
      title: "Synergy",
      description: "Your Partner in Tech Excellence",
      buttonLabel: "View Portfolio",
      buttonLink: "/portfolio",
      image: img2,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); // Change the duration (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slides[activeSlide].image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-250px",
        textAlign: "center",
      }}
    >
      <Container>
        <ResponsiveTypography variant="h2" gutterBottom>
          {slides[activeSlide].title}
        </ResponsiveTypography>
        <ResponsiveTypography variant="body1" paragraph>
          {slides[activeSlide].description}
        </ResponsiveTypography>
        <Button
          variant="contained"
          color="primary"
          component="a"
          href={slides[activeSlide].buttonLink}
          sx={{
            marginTop: "16px",
            "@media (max-width: 600px)": {
              marginTop: "8px",
              "&:hover": {
                backgroundColor: "#2196f3",
                color: "#fff",
              },
              "&:not(:hover)": {
                backgroundColor: "#fff",
                color: "#2196f3",
              },
            },
          }}
        >
          {slides[activeSlide].buttonLabel}
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSlider;
