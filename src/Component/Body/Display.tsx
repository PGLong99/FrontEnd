import { Grid } from "@mui/material";
import BookReaderIcon from "../Icon_Logo/BookReaderIcon";
import GiftIcon from "../Icon_Logo/GiftIcon";
import RocketIcon from "../Icon_Logo/RocketIcon";
import GraduationCapIcon from "../Icon_Logo/GraduationCapIcon";
import WhyUs from "./WhyUs";
import CoursesList from "./Courses/CoursesList";
import { Container } from "@mui/system";

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
  const dataCoursesList = [
    {
      coursesName: "Popular Courses",
      courses: [
        {
          viewNumber: "200k",
          rateNumber: "10k",
          tittle: "2020 Complete Python Bootcamp From Zero to Hero...",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "NEW",
          image: "image.png",
        },
        {
          viewNumber: "200k",
          rateNumber: "10k",
          tittle: "Python for Data Science and Machine Learning Bootcamp",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "5/10",
          image: "image.png",
        },
        {
          viewNumber: "200k",
          rateNumber: "10k",
          tittle: "The Web Developer Bootcamp 2020",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "NEW",
          image: "image.png",
        },
        {
          viewNumber: "200k",
          rateNumber: "10k",
          tittle: "The Complete JavaScript Course 2020: From Zero to...",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "NEW",
          image: "image.png",
        },
      ],
    },
    {
      coursesName: "My Courses",
      courses: [
        {
          viewNumber: "200k",
          rateNumber: "10k",
          tittle: "React - The Complete Guide (incl Hooks, React Router, ...",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "NEW",
          image: "image.png",
        },
        {
          viewNumber: "200k",
          rateNumber: "10k",
          tittle: "Machine Learning A-Z™: Hands-On Python & R In Data...",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "5/10",
          image: "image.png",
        },
        {
          viewNumber: "200k",
          rateNumber: "10k",
          tittle: "Microsoft Excel - Excel from Beginner to Advanced",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "deprecated".toUpperCase(),
          image: "image.png",
        },
        {
          viewNumber: "200k",
          rateNumber: "10k",
          tittle: "Learn Ethical Hacking From Scratch",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "5/10",
          image: "image.png",
        },
      ],
    },
    {
      coursesName: "My Assignments",
      courses: [
        {
          viewNumber: "200k",
          rateNumber: "10k",
          // eslint-disable-next-line no-script-url
          tittle: "JavaScript: Understanding the Weird Parts",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "5/10",
          image: "image.png",
        },
        {
          viewNumber: "200k",
          rateNumber: "10k",
          tittle: "The Modern JavaScript Bootcamp",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "5/10",
          image: "image.png",
        },
        {
          viewNumber: "200k",
          rateNumber: "10k",
          tittle: "20 Web Projects With Vanilla JavaScript",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "DONE",
          image: "image.png",
        },
        {
          viewNumber: "200k",
          rateNumber: "10k",
          tittle: "JavaScript 2019: JavaScript ES6 Certification Course",
          tag: ["#Onboarding training", "#Basic"],
          star: 4,
          learingState: "5/10",
          image: "image.png",
        },
      ],
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
      {dataCoursesList.map((item, index) => (
        <CoursesList
          coursesName={item.coursesName}
          courses={item.courses}
          key={index}
        />
      ))}
    </Container>
  );
}
