import { Box, Grid, Typography } from "@mui/material";
import AfitLogoWhite from "../Icon_Logo/AfitLogoWhite";
import Link from "./Link";

export default function FootLeft() {
  const linkData = [
    "Pdemy for Business",
    "Teach on Pdemy",
    "Get the app",
    "About us",
    "Contact us",
    "Categories",
    "Careers",
    "Blog",
    "Help and Support",
    "Affiliate",
    "Terms",
    "Privacy policy and cookie",
    "Policy",
    "Sitemap",
    "Featured courses",
  ];
  return (
    <Box sx={{ width: "60%", display: "flex" }}>
      <AfitLogoWhite />
      <Box sx={{ marginLeft: "20px" }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            marginBottom: "50px",
            color: "white",
          }}
        >
          For partnership and business development inquiries, please contact us
          at info@afit.com. Check out our Help and Support center to find quick
          answers to your questions.
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          {linkData.map((item, index) => (
            <Link text={item} key={index} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
