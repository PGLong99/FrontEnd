import { Box } from "@mui/material";
import React from "react";
import StarIcon from "../../Icon_Logo/StarIcon";
import StarOulineIcon from "../../Icon_Logo/StarOulineIcon";

interface propsRate {
  rateNumber: string;
  rateStar: number;
}

export default function Rate({ rateNumber, rateStar }: propsRate) {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        bottom: "5px",
        justifyContent: "space-around",
        left: "10px",
      }}
    >
      <p className="flex-item" style={{ color: "#F3AA1B", marginRight: "5px" }}>
        {rateStar.toFixed(1)}
      </p>
      {Array.from(Array(rateStar), (e) => {
        return <StarIcon />;
      })}
      {Array.from(Array(5 - rateStar), (e) => {
        return <StarOulineIcon />;
      })}
      <p style={{ color: "#F3AA1B", marginLeft: "5px" }}>(10k)</p>
    </Box>
  );
}
