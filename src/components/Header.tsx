import { AppBar, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Switch from "@mui/material/Switch";

const GitBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "var(--black)",
  color: "#eeeeee",
  width: "100%",
  height: "80px",
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "none",
  padding: "0rem 1.5rem",
}));

const ModeSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-thumb": {
    backgroundColor: "var(--purple)",
  },

  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "var(--white)",
      "& + .MuiSwitch-track": {
        backgroundColor: "var(--gray-900)",
        opacity: 1,
        border: 0,
      },
    },
  },

  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "var(--white)",
    boxSize: "border-box",
  },
}));

export const Header = () => {
  return (
    <GitBar>
      <Typography variant="h6">Github Profiles</Typography>
      <ModeSwitch />
    </GitBar>
  );
};
