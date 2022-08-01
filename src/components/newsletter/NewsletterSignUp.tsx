import React, { FC } from "react";

import { styled } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/system";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
  FormGroup,
  TextField,
  TextFieldProps,
  Typography,
  useTheme,
} from "@mui/material";

import newsletterimg from "../../static/images/newsletter.png";
import { RedButton } from "../../components";

const NewsletterBox = styled(Box)<BoxProps>(({ theme }) => ({
  width: "800px",
  height: "600px",
  backgroundColor: "#FFFFFF",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "100px",
  display: "flex",
  flexDirection: "row",
}));

const CenteredBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "auto",
  marginRight: "auto",
  alignItems: "center",
}));

const Input = styled(TextField)<TextFieldProps>(({ theme }) => ({
  marginTop: "32px",
  width: "300px",
}));

const RedCheckbox = styled(Checkbox)<CheckboxProps>(({ theme }) => ({
  color: theme.palette.secondary.light,
  "&.Mui-checked": {
    color: theme.palette.secondary.main,
  },
}));

const RedFormControlLabel = styled(FormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    color: theme.palette.secondary.light,
    marginTop: "32px",
  })
);

const NewsletterSignUp: FC = () => {
  const theme = useTheme();

  return (
    <NewsletterBox>
      <img src={newsletterimg} alt="Adam Mikietinski" height={"100%"} />
      <CenteredBox marginY="auto">
        <CenteredBox>
          <Typography variant="h2" sx={{ color: theme.palette.secondary.main }}>
            Newsletter
          </Typography>
          <Typography variant="h4" marginTop="10px">
            Never miss another post
          </Typography>
        </CenteredBox>
        <CenteredBox marginTop="8px">
          <Input label="Your Name" variant="standard" />
          <Input label="Your Surname" variant="standard" />
          <Input label="Your Email" variant="standard" />
          <FormGroup>
            <RedFormControlLabel
              control={<RedCheckbox defaultChecked />}
              label="I want to receive occasional marketing"
            />
          </FormGroup>
        </CenteredBox>
        <CenteredBox marginTop="32px">
          <RedButton sx={{ width: "300px" }}>
            <Typography variant="captionSemibold">Subscribe</Typography>
          </RedButton>
          <Typography variant="smallSemibold" marginTop="8px">
            Unsubscribe at any time
          </Typography>
        </CenteredBox>
      </CenteredBox>
    </NewsletterBox>
  );
};

export default NewsletterSignUp;
