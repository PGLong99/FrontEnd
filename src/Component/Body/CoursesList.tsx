import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomColorButton from "../CustomButton/CustomColorButton";

interface propsCourses {
  coursesName: string;
  // courses: [index: Courses];
}
interface Courses {
  viewNumber: number;
  rateNumber: number;
  tittle: string;
  tag: [index: number];
  star: number;
  learning: string;
}
export default function CoursesList(props: propsCourses) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography variant="h6" gutterBottom>
        {props.coursesName}
      </Typography>
      <CustomColorButton
        variant="outlined"
        color="#44417A"
        text="View More"
        sx={{}}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* {dataWhyUs.map((item) => (
            <WhyUs
              icon={item.icon}
              tittle={item.tittle}
              subTittle={item.subTittle}
            ></WhyUs>
          ))} */}
        </Grid>
      </Box>
    </Box>
  );
}
