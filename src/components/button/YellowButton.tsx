import { Button, ButtonProps, styled } from "@mui/material";

const YellowButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 22,
  color: "#000000",
  backgroundColor: "#ffba08",
  "&:hover": {
    backgroundColor: "#c78a00",
  },
}));

export default YellowButton;
