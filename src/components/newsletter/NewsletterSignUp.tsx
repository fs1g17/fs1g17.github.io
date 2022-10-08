import React, { useEffect, useState } from "react";

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
import { NameFormFields } from "react-mailchimp-subscribe";

const NewsletterBox = styled(Box)<BoxProps>(({ theme }) => ({
  minWidth: 300,
  [theme.breakpoints.up('xs')]: {
    width: "100vw",
    marginTop: "40px",
  },
  [theme.breakpoints.up('sm')]: {
    width: 400,
  },
  [theme.breakpoints.up('md')]: {
    width: 800,
    marginTop: "100px",
  },
  backgroundColor: "#FFFFFF",
  marginLeft: "auto",
  marginRight: "auto",
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

export interface NewsletterSignUpProps {
  subscribe: (data: NameFormFields) => void;
  status: "error" | "success" | "sending" | null;
  message: string | Error | null;
}

const NewsletterSignUp = ({ subscribe, status, message }: NewsletterSignUpProps) => {
  const theme = useTheme();

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    if (status === 'success') {
      setName('');
      setSurname('');
      setEmail('');
    }
  }, [status]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    email &&
      name &&
      surname &&
      email.indexOf("@") > -1 &&
      subscribe({
        EMAIL: email,
        FNAME: name,
        LNAME: surname
      });
  }

  return (
    <NewsletterBox>
      {window.innerWidth >= 900 && <img src={newsletterimg} alt="Adam Mikietinski" height={"100%"} />}
      <CenteredBox
        sx={{
          '@media (min-width:0px)': {
            marginY: theme.spacing(2),
          },
          '@media (min-width:900px)': {
            marginY: 'auto',
          }
        }}
      >
        <CenteredBox>
          <Typography variant="h2" sx={{ color: theme.palette.secondary.main }}>
            Newsletter
          </Typography>
          <Typography variant="h4" marginTop="10px">
            Never miss another post
          </Typography>
        </CenteredBox>
        <CenteredBox marginTop="8px">
          <Input label="Your Name" variant="standard" type="text" value={name} onChange={e => setName(e.currentTarget.value)} />
          <Input label="Your Surname" variant="standard" type="text" value={surname} onChange={e => setSurname(e.currentTarget.value)} />
          <Input label="Your Email" variant="standard" type="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
          <FormGroup>
            <RedFormControlLabel
              control={<RedCheckbox defaultChecked />}
              label="I want to receive occasional marketing"
            />
          </FormGroup>
          <div>
            {status === "sending" && "Sending"}
            {status === "error" && message !== null && message.toString()}
            {status === "success" && "Success"}
          </div>
        </CenteredBox>
        <CenteredBox marginTop="32px">
          <RedButton sx={{ width: "300px" }} onClick={handleSubmit}>
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
