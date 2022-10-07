import { Box, Grid, Typography } from "@mui/material";
import CustomColorButton from "../../CustomButton/CustomColorButton";
import Courses, { ICourses } from "./Courses";

interface propsCourses {
  coursesName: string;
  courses: ICourses[];
}

export default function CoursesList(props: propsCourses) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          {props.coursesName}
        </Typography>
        <CustomColorButton
          variant="outlined"
          color="#44417A"
          text="View More"
          sx={{}}
        />
      </Box>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        {props.courses.map((item) => (
          <Courses courses={item} />
        ))}
      </Grid>
    </Box>
  );
}
