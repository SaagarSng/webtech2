import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import contactImg from "../src/images/contact.jpg";
import Common from "./Common";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get form data
    const formData = new FormData(e.target);

    // Make an HTTP POST request to the PHP file
    fetch("submit_form.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the PHP file
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <>
      <Common
        name="Welcome to Contact page"
        imgsrc={contactImg}
        visit="/contact"
        btname="Contact Now"
      />
      <Container maxWidth="sm" sx={{ my: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit} action="submit_form.php" method="post">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default ContactPage;
