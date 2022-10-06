import { Box, Grid, Typography } from "@mui/material";
import BookReaderIcon from "../Icon_Logo/BookReaderIcon";
import GiftIcon from "../Icon_Logo/GiftIcon";
import RocketIcon from "../Icon_Logo/RocketIcon";
import GraduationCapIcon from "../Icon_Logo/GraduationCapIcon";
import WhyUs from "./WhyUs";
import CustomColorButton from "../CustomButton/CustomColorButton";
import CoursesList from "./CoursesList";

export default function Display() {
  const dataWhyUs = [
    {
      icon: <GraduationCapIcon />,
      tittle: "1000+",
      subTittle: "Online Courses",
    },
    {
      icon: <BookReaderIcon />,
      tittle: "800+",
      subTittle: "Expert Instructors",
    },
    {
      icon: <RocketIcon />,
      tittle: "100k+",
      subTittle: "Active Students",
    },
    {
      icon: <GiftIcon />,
      tittle: "400+",
      subTittle: "Free Resources",
    },
  ];
  return (
    <Box sx={{ padding: "0 10% 0 10%", marginTop: "50px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {dataWhyUs.map((item) => (
            <WhyUs
              icon={item.icon}
              tittle={item.tittle}
              subTittle={item.subTittle}
            ></WhyUs>
          ))}
        </Grid>
      </Box>
      <Box>
        <CoursesList coursesName={"Popular Courses"} />
      </Box>
    </Box>
  );
}