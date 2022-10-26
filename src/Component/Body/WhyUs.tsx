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
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "265px",
        }}
      >
        {icon}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontWeight: 700,
            lineHeight: "24px",
          }}
        >
          <Typography
            variant="subtitle2"
            display="block"
            gutterBottom
            sx={{
              fontSize: { xs: "8px", sm: "12px", lg: "16px" },
            }}
          >
            {tittle}
          </Typography>
          <Typography
            variant="subtitle2"
            display="block"
            gutterBottom
            sx={{ fontSize: { xs: "8px", sm: "12px", lg: "16px" } }}
          >
            {subTittle}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
