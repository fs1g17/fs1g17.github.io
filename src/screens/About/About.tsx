import React, { FC } from "react";

import {
  Typography,
  TypographyProps,
  styled,
  Box,
  BoxProps,
  Button,
  ButtonProps,
} from "@mui/material";

import about1 from "../../static/images/about_1.png";
import about2 from "../../static/images/about_2.png";

const WhiteText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: "#FFFFFF",
}));

const RedText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const CenteredBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 200,
  marginLeft: "auto",
  marginRight: "auto",
  alignItems: "center",
}));

const InfoBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: 100,
  marginLeft: "auto",
  marginRight: "auto",
  alignItems: "flex-end",
}));

const RedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 22,
  backgroundColor: theme.palette.secondary.main,
  marginTop: 48,
}));

const About: FC = () => {
  return (
    <>
      <CenteredBox>
        <WhiteText variant="h1">Revolutionise your life.</WhiteText>
        <WhiteText variant="h1">Permanentely.</WhiteText>
      </CenteredBox>
      <CenteredBox>
        <InfoBox>
          <img src={about1} alt="Adam Mikietinski" height={734} width={568} />
          <Box
            display="flex"
            flexDirection="column"
            width={544}
            marginLeft="64px"
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
        </InfoBox>
      </CenteredBox>
      <CenteredBox>
        <RedText variant="h2">Workout. Nutrition. Motivation.</RedText>
      </CenteredBox>
      <CenteredBox marginBottom="200px">
        <InfoBox>
          <Box
            display="flex"
            flexDirection="column"
            width={730}
            marginRight="64px"
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
          <img src={about2} alt="Adam Mikietinski" width={394} height={819} />
        </InfoBox>
        <CenteredBox>
          <WhiteText variant="h1">Are you ready?</WhiteText>
        </CenteredBox>
        <RedButton>
          <WhiteText variant="h3" marginX="48px">
            LEARN MORE
          </WhiteText>
        </RedButton>
      </CenteredBox>
    </>
  );
};

export default About;
