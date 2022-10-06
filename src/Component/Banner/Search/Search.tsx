import { Box, styled, Typography } from "@mui/material";
import React from "react";
import InputSearch from "./InputSearch";

export default function Search() {
  const CustomTyp = styled(Typography)({
    color: "#FFF",
    textAlign: "center",
  });
  return (
    <Box
      sx={{
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CustomTyp variant="h4" gutterBottom>
        Learn new skills gain more experience
      </CustomTyp>
      <CustomTyp variant="subtitle1" gutterBottom>
        Our mission is to spread education that can learn by everyone on
        wherever to go and can be access anywhere.
      </CustomTyp>
      <InputSearch />
    </Box>
  );
}
