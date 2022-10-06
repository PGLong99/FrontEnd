import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Search from "./Search";

export default function Banner() {
  return (
    <Box
      className="Banner"
      sx={{
        backgroundColor: "#44417A",
        height: "570px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundImage: `url(backGround.svg)`,
      }}
    >
      <Header />
      <Search />
    </Box>
  );
}
