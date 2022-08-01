import { Button, ButtonProps, styled } from "@mui/material";

const RedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 22,
  color: "#FFFFFF",
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export default RedButton;
