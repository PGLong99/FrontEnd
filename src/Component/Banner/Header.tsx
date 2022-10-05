import React from "react";
import AfitLogo from "../AfitLogo";
import LearningLogo from "../LearningLogo";
import { Button, styled } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Header() {
  const CustomButton = styled(Button)({
    color: "#000000",
  });
  const theme = createTheme({
  palette: {
    primary: {
      main: "#44417A",
    },   
  },
});
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        height: "75px",
        alignItems: "center",
        padding: "",
      }}
    >
      <AfitLogo />
      <LearningLogo />
      <div style={{ display: "inline-block", marginLeft: "20%" }}>
        <CustomButton variant="text">Home</CustomButton>
        <CustomButton variant="text">About</CustomButton>
        <CustomButton variant="text">Source</CustomButton>
        <CustomButton variant="text">Blog</CustomButton>
        <CustomButton variant="text">Contact</CustomButton>
        <ThemeProvider theme={theme}>
          <Button color="primary" variant="outlined" sx={{ padding: "6px 8px" }}>
            Login
          </Button>
          <Button
            color="primary"
            variant="contained"
            sx={{ padding: "6px 8px" }}
          >
            Login
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}
