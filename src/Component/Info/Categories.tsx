import { Box, Grid, Typography } from "@mui/material";
import Category from "./Category";

export default function Categories() {
  const dataCategory = [
    "Python",
    "Cyber Security",
    "Web Development",
    "Drawing",
    "Machine Learning",
    "UX/UI Design",
    "SQL",
    "AWS Certification",
    "Graphic Design",
    "Financial Analysis",
  ];
  return (
    <Box sx={{ marginLeft: "20px", width: "50%" }}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: { xs: "inherit", sm: "1.5rem", md: "34px" },
          lineHeight: "48px",
          marginBottom: "20px",
        }}
      >
        Top Categories
      </Typography>
      <Grid container spacing={4}>
        {dataCategory.map((item, index) => (
          <Category Text={item} key={index} />
        ))}
      </Grid>
    </Box>
  );
}
