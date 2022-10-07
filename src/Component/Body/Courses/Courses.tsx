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
import Learning from "./Learning";
import Rate from "./Rate";

export interface ICourses {
  viewNumber: string;
  rateNumber: string;
  tittle: string;
  tag: string[];
  star: number;
  learingState: string;
  image: string;
}
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
  return (
    <Grid item xs={6} md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Box sx={{ position: "relative" }}>
            <CardMedia component="img" image="image.png" alt="green iguana" />
            <Learning
              state={courses.learingState}
              viewNumber={courses.viewNumber}
            />
            <Rate rateNumber={courses.rateNumber} rateStar={courses.star} />
          </Box>
          <CardContent>
            <TypographyTittle className="coursesTittle">
              {courses.tittle}
            </TypographyTittle>
            {courses.tag.map((item) => (
              <TypographyTag className="coursesTag">{item}</TypographyTag>
            ))}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
