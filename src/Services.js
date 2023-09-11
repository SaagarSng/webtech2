import React from "react";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

import digitalMarketingImage from "./images/digitalMarketing.png";
import webDesignImage from "./images/WebDevelopment.png";
import graphicDesignImage from "./images/graphicDesigner.jpg";
import marketAnalysisImage from "./images/market analysis.jpg";

const StyledCard = styled(Card)`
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardContent = styled(CardContent)`
  padding: 24px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 16px;
  font-weight: bold;
  color: #333;
`;

const StyledDescription = styled(Typography)`
  color: #666;
  line-height: 1.5;
`;

const ServicesData = [
  // Services data here...
  {
    imgsrc: digitalMarketingImage,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum, voluptatibus corrupti sit minima eum. Nisi itaque ullam aliquam quia deleniti nam id consequuntur laboriosam excepturi vitae? Laboriosam sed incidunt debitis rem mollitia ducimus, odio, fuga accusantium suscipit itaque distinctio.",
  },
  {
    imgsrc: webDesignImage,
    title: "Web Design",
    description:
      "TechDecoder provides unique web designs tailored to your requirements. We assess needs, define scope, design sitemaps, wireframes, and content, ensuring a fantastic, smooth, and user-friendly experience. Our expertise in web development meets all your requirements with appealing design and tailored functionality.",
  },
  {
    imgsrc: graphicDesignImage,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum, voluptatibus corrupti sit minima eum. Nisi itaque ullam aliquam quia deleniti nam id consequuntur laboriosam excepturi vitae? Laboriosam sed incidunt debitis rem mollitia ducimus, odio, fuga accusantium suscipit itaque distinctio.",
  },
  {
    imgsrc: marketAnalysisImage,
    title: "Market Analysis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum, voluptatibus corrupti sit minima eum. Nisi itaque ullam aliquam quia deleniti nam id consequuntur laboriosam excepturi vitae? Laboriosam sed incidunt debitis rem mollitia ducimus, odio, fuga accusantium suscipit itaque distinctio.",
  },
  {
    imgsrc: marketAnalysisImage,
    title: "Market Analysis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum, voluptatibus corrupti sit minima eum. Nisi itaque ullam aliquam quia deleniti nam id consequuntur laboriosam excepturi vitae? Laboriosam sed incidunt debitis rem mollitia ducimus, odio, fuga accusantium suscipit itaque distinctio.",
  },
  {
    imgsrc: marketAnalysisImage,
    title: "Market Analysis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum, voluptatibus corrupti sit minima eum. Nisi itaque ullam aliquam quia deleniti nam id consequuntur laboriosam excepturi vitae? Laboriosam sed incidunt debitis rem mollitia ducimus, odio, fuga accusantium suscipit itaque distinctio.",
  },
];

const Services = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {ServicesData.map((val, ind) => (
          <Grid item xs={12} sm={6} md={4} key={ind}>
            <StyledCard>
              <StyledCardContent>
                <img
                  src={val.imgsrc}
                  alt={val.title}
                  style={{ marginBottom: "16px", width: "100%" }}
                />
                <StyledTypography variant="h6" gutterBottom>
                  {val.title}
                </StyledTypography>
                <StyledDescription variant="body2">
                  {val.description}
                </StyledDescription>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
