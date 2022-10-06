import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import Search from "./Search/Search";

export default function Banner() {
  return (
    <Box
      className="Banner"
      sx={{
        backgroundColor: "#44417A",
        height: "560px",
        backgroundImage: `url(backGround.svg)`,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          height: "100%",
          maxWidth: "1150px",
        }}
      >
        <Header />
        <Search />
      </Container>
    </Box>
  );
}
