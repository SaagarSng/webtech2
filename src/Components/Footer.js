import * as React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#7091F5",
        padding: "80px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              textAlign: "justify",
              padding: "30px 30px",
            }}
          >
            <h2>Synergy</h2>
            We're a tech-driven company leveraging technology to empower
            businesses. Our mission: tailored solutions for digital success.
            Services include software, web, and app development, plus
            cybersecurity. With a customer focus, we unlock opportunities
            through tech.
            <br />
            <br />
            <IconButton sx={{ color: "#ffffff" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#ffffff" }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: "#ffffff" }}>
              <InstagramIcon />
            </IconButton>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="body1"
            sx={{ color: "#ffffff", padding: "50px,30px" }}
          >
            <h2>Our Services</h2>
            <ul>
              <li>IT Consultancy</li>
              <li>Web Design</li>
              <li>Graphic Design</li>
              <li>Business Analysis</li>
              <li>Market Analysis</li>
              <li>Digital Marketing</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1" sx={{ color: "#ffffff" }}>
            <h2>Contact Information</h2>
            <ul>
              <li>Phone: +1 123-456-7890</li>
              <li>Email: info@techdecodernepal.com</li>
              <li>Address: Koholpur, Banke, Nepal</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
