import { Grid } from "@mui/material";
import BookReaderIcon from "../Icon_Logo/BookReaderIcon";
import GiftIcon from "../Icon_Logo/GiftIcon";
import RocketIcon from "../Icon_Logo/RocketIcon";
import GraduationCapIcon from "../Icon_Logo/GraduationCapIcon";
import WhyUs from "./WhyUs";
import CoursesList from "./Courses/CoursesList";
import { Container } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/authContext";

export interface ICoursesList {
  "Popular Courses": ICourses[];
  "My Courses": ICourses[];
  "My Assignments": ICourses[];
}
export interface ICourses {
  viewNumber: string;
  rateNumber: string;
  tittle: string;
  tag: string[];
  star: number;
  learingState: string;
  image: string;
}
export default function Display() {
  const [dataCourses, setDataCourses] = useState<ICoursesList>({
    "Popular Courses": [],
    "My Courses": [],
    "My Assignments": [],
  });
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    getCourses().then((data: any) => {
      let temp: ICoursesList = {
        "Popular Courses": [],
        "My Courses": [],
        "My Assignments": [],
      };
      data.forEach((item: any) => {
        if (item.type in temp) {
          item.tag = item.tag.split(",");
          temp[item.type as keyof ICoursesList].push(item);
        }
      });
      setDataCourses(temp);
    });
  }, [isAuth]);
  const getCourses = async () => {
    return (
      await axios.get(`${process.env.REACT_APP_BACK_END}/api/data/courses`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
    ).data;
  };
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
    <Container sx={{ maxWidth: "1150px", marginTop: "50px" }}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {dataWhyUs.map((item, index) => (
          <WhyUs
            icon={item.icon}
            tittle={item.tittle}
            subTittle={item.subTittle}
            key={index}
          ></WhyUs>
        ))}
      </Grid>
      {dataCourses["My Assignments"].length !== 0 && (
        <CoursesList
          coursesName={"My Assignments"}
          courses={dataCourses["My Assignments"]}
        />
      )}
      {dataCourses["My Courses"].length !== 0 && (
        <CoursesList
          coursesName={"My Courses"}
          courses={dataCourses["My Courses"]}
        />
      )}
      {dataCourses["Popular Courses"].length !== 0 && (
        <CoursesList
          coursesName={"Popular Courses"}
          courses={dataCourses["Popular Courses"]}
        />
      )}
    </Container>
  );
}
