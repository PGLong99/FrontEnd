import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

interface propsCustomButton {
  color: string;
  variant: "text" | "outlined" | "contained";
  sx?: any;
  text: string;
  onClick?: any;
}
export default function CustomColorButton(props: propsCustomButton) {
  const theme = createTheme({
    palette: {
      primary: {
        main: props.color,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button
        color="primary"
        variant={props.variant}
        sx={props.sx}
        onClick={props.onClick}
      >
        {props.text}
      </Button>
    </ThemeProvider>
  );
}
