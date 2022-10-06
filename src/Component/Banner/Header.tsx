import React from "react";
import AfitLogo from "../Icon_Logo/AfitLogo";
import { Box, Button, styled } from "@mui/material";
import LearningLogo from "../Icon_Logo/LearningLogo";
import CustomColorButton from "../CustomButton/CustomColorButton";

export default function Header() {
  const CustomButton = styled(Button)({
    color: "#000000",
  });
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        padding: "30px",
        borderRadius: "0 0 20px 20px",
        margin: "0 10% 0 10%",
        maxHeight: "75px",
        flexGrow: 1,
        maxWidth: "1440px",
        width: "100%",
      }}
    >
      <AfitLogo />
      <LearningLogo />
      <Box sx={{ textAlign: "right", flexGrow: 1 }}>
        <CustomButton variant="text">Home</CustomButton>
        <CustomButton variant="text">About</CustomButton>
        <CustomButton variant="text">Source</CustomButton>
        <CustomButton variant="text">Blog</CustomButton>
        <CustomButton variant="text">Contact</CustomButton>
        <CustomColorButton
          variant="outlined"
          color="#44417A"
          text="Login"
          sx={{ margin: "0 10px 0 10px" }}
        />
        <CustomColorButton
          variant="contained"
          color="#44417A"
          text="Sign Up"
          sx={{ margin: "0 10px 0 10px" }}
        />
        {/* <ThemeProvider theme={theme}>
          <Button
            color="primary"
            variant="outlined"
            sx={{ margin: "0 10px 0 10px" }}
          >
            Login
          </Button>
          <Button
            color="primary"
            variant="contained"
            sx={{ margin: "0 10px 0 10px" }}
          >
            Sign Up
          </Button>
        </ThemeProvider> */}
      </Box>
    </Box>
  );
}
