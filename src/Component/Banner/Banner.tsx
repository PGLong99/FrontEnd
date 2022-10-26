import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import Search from "./Search/Search";
import "./Banner.css";

export default function Banner() {
  return (
    <Box
      className="Banner"
      sx={{
        backgroundColor: "#44417A",
        height: "560px",
        backgroundImage: `url(backGround.svg)`,
        zIndex: 1,
        position: "relative",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          height: "100%",
          maxWidth: "1150px",
        }}
      >
        <img
          src="rectangle/top-left-1.svg"
          alt=""
          className="image-banner-left-top"
        ></img>
        <img
          src="rectangle/top-left-2.svg"
          alt=""
          className="image-banner-left-top"
        ></img>
        <Header />
        <Search />
      </Container>
      <img
        src="rectangle/bot-right-1.svg"
        alt=""
        className="image-banner-right-bottom"
      ></img>
      <img
        src="rectangle/bot-right-2.svg"
        alt=""
        className="image-banner-right-bottom"
      ></img>
    </Box>
  );
}
