import React from "react";
import AfitLogo from "../AfitLogo";
import LearningLogo from "../LearningLogo";
import { Box, Button, styled } from "@mui/material";
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
        <ThemeProvider theme={theme}>
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
            Login
          </Button>
        </ThemeProvider>
      </Box>
    </Box>
  );
}
