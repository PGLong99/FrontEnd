import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import { ICourses } from "../Display";
import Learning from "./Learning";
import Rate from "./Rate";

interface CoursesProps {
  courses: ICourses;
}
export default function Courses({ courses }: CoursesProps) {
  const TypographyTittle = styled(Typography)({
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#000000",
  });
  const TypographyTag = styled(Typography)({
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "24px",
    color: "#97a5ac",
  });
  const parseNumber = (n: number) => {
    if (n < 10000) return n.toString();
    else {
      return (n / 1000).toString().split(".")[0] + "k";
    }
  };
  return (
    <Grid item xs={6} md={3}>
      <Card sx={{ height: "100%" }}>
        <CardActionArea sx={{ height: "100%" }}>
          <Box sx={{ position: "relative" }}>
            <CardMedia component="img" image="image.png" alt="" />
            <Learning
              state={courses.learingState}
              viewNumber={parseNumber(courses.view_number)}
            />
            <Rate
              rateNumber={parseNumber(courses.rate_number)}
              rateStar={courses.star}
            />
          </Box>
          <CardContent>
            <TypographyTittle
              className="coursesTittle"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 2,
              }}
            >
              {courses.tittle}
            </TypographyTittle>
            {courses.tag.map((item, index) => (
              <TypographyTag className="coursesTag" key={index}>
                {item}
              </TypographyTag>
            ))}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
