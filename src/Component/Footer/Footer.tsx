import { Box, Container } from "@mui/material";
import React from "react";
import FootLeft from "./FootLeft";

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
      </Container>
    </Box>
  );
}