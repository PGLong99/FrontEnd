import { Box, Grid, Typography } from "@mui/material";
import CustomColorButton from "../CustomButton/CustomColorButton";
import AirbnbLogo from "../Icon_Logo/BusinessLogo/AirbnbLogo";
import FitbitLogo from "../Icon_Logo/BusinessLogo/FitbitLogo";
import GoogleLogo from "../Icon_Logo/BusinessLogo/GoogleLogo";
import AtlassianLogo from "./AtlassianLogo";
import GithubLogo from "./GithubLogo";
import InstagramLogo from "./InstagramLogo";

export default function Business() {
  const listLogo = [
    <FitbitLogo />,
    <GoogleLogo />,
    <AirbnbLogo />,
    <InstagramLogo />,
    <GithubLogo />,
    <AtlassianLogo />,
  ];
  return (
    <Box sx={{ marginLeft: "20px", width: "50%" }}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "34px",
          lineHeight: "48px",
          marginBottom: "20px",
        }}
      >
        AFIT for Business
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "28px",
          marginBottom: "20px",
          color: "#97A5AC",
        }}
      >
        Top instructors from around the world teach millions of students on
        Pdemy. We provide the tools and skills to teach what you love. Get
        unlimited access to 5000+ Pdemy’s top course for your team. Trusted by
        companies of all sizes
      </Typography>
      <CustomColorButton
        variant="contained"
        sx={{}}
        color="#44417A"
        text="Get AFIT for Business"
      />
      <Grid container spacing={4} sx={{ marginTop: "10px" }}>
        {listLogo.map((item, index) => (
          <Grid item md={4} key={index}>
            {item}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
