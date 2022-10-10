import { Box, Container } from "@mui/material";
import React from "react";
import Copyright from "./CopyRight";
import FootLeft from "./FootLeft";
import FootRight from "./FootRight";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#44417A",
      }}
    >
      <Container
        sx={{
          maxWidth: "1150px",
          display: "flex",
          paddingTop: "20px",
        }}
      >
        <FootLeft />
        <FootRight />
      </Container>
      <Copyright />
    </Box>
  );
}
