import React from "react";

import {
  Typography,
  TypographyProps,
  styled,
  Box,
  BoxProps,
} from "@mui/material";

import about1 from "../../static/images/about_1.png";
import about2 from "../../static/images/about_2.png";
import { ImageInfo, RedButton } from "../../components";
import MailChimpFormContainer from "../../components/newsletter/MailchimpFormContainer";

const WhiteText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFFFFF",
}));

const RedText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const CenteredBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up('xs')]: {
    marginTop: 110,
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: 160,
  },
  [theme.breakpoints.up('md')]: {
    marginTop: 210,
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: 260,
  },
  marginLeft: "auto",
  marginRight: "auto",
  alignItems: "center",
  width: '100vw'
}));

/*
up to 900 px, I went everything as a column 
only spread out if the width is greater than 900px
*/

const InfoBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    marginLeft: "auto",
    marginRight: "auto",
  },
  alignItems: "flex-end",
}));

const About = () => {
  return (
    <>
      <CenteredBox>
        <WhiteText variant="h1">Revolutionise your life.</WhiteText>
        <WhiteText variant="h1">Permanentely.</WhiteText>
      </CenteredBox>
      <CenteredBox>
        <ImageInfo
          img={about1}
          imgAlt="Adam Mikietinski"
          mdMaxWidth={500}
          lgMaxWidth={600}
        >
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
          >
            <WhiteText variant="h2">ADAM MIKIETINSKI</WhiteText>
            <RedText variant="h3" marginTop="48px">
              Bodybuilder. Coach. Greek God.
            </RedText>
            <WhiteText variant="largeSemibold" marginTop="24px">
              Sematriux Fitness is all about helping you be the best version of
              yourself.
            </WhiteText>
            <WhiteText variant="largeSemibold" marginTop="16px">
              I will help you get where you to be with:
            </WhiteText>
            <ul>
              <li>
                <WhiteText variant="large">Workout plans</WhiteText>
              </li>
              <li>
                <WhiteText variant="large">Nutrition plans</WhiteText>
              </li>
              <li>
                <WhiteText variant="large">1 on 1 coaching</WhiteText>
              </li>
            </ul>
          </Box>
        </ImageInfo>
      </CenteredBox>
      <CenteredBox>
        <ImageInfo
          img={about2}
          imgAlt="Adam Mikietinski"
          mdMaxWidth={400}
          lgMaxWidth={500}
          imageAlignment="right"
        >
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
          >
            <WhiteText variant="largeSemibold" marginTop="16px">
              Do you want to learn what it takes to train like a professional
              athlete and get the results that you always desired?
            </WhiteText>
            <WhiteText variant="largeSemibold" marginTop="16px">
              It takes tremendous amount of discipline and resilience in order
              to adapt and succeed.
            </WhiteText>
            <WhiteText variant="largeSemibold" marginTop="16px">
              How do YOU get there?
            </WhiteText>
            <WhiteText variant="largeSemibold" marginTop="16px">
              No bullshit approach but consistency, hard work (in and outside
              the gym) and smart programming.
            </WhiteText>
            <WhiteText variant="largeSemibold" marginTop="16px">
              Nobody can do the work for you, you get what you put in. This
              being said the journey doesn’t have to be lonely and confusing
              with a professional by your side!
            </WhiteText>
            <WhiteText variant="largeSemibold" marginTop="16px">
              If you want to look like a Greek God, you have to become one.
            </WhiteText>
          </Box>
        </ImageInfo>
      </CenteredBox>
      <CenteredBox marginBottom="40px">
        <MailChimpFormContainer />
      </CenteredBox>
    </>
  );
};

export default About;
