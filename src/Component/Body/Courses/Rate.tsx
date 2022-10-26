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
      {Array.from(Array(rateStar), (item, index) => {
        return <StarIcon key={index} />;
      })}
      {Array.from(Array(5 - rateStar), (item, index) => {
        return <StarOulineIcon key={index} />;
      })}
      <p style={{ color: "#F3AA1B", marginLeft: "5px" }}>{rateNumber}</p>
    </Box>
  );
}
