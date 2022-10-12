import React from "react";
import { Box, Grid, Typography } from "@mui/material";

interface propWhyUs {
  tittle: string;
  subTittle: string;
  icon: any;
}
export default function WhyUs({ icon, tittle, subTittle }: propWhyUs) {
  return (
    <Grid item xs={6} md={3} sx={{ padding: "10px" }}>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
        <Box
          sx={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}
        >
          <Typography variant="subtitle2" display="block" gutterBottom>
            {tittle}
          </Typography>
          <Typography variant="subtitle2" display="block" gutterBottom>
            {subTittle}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
