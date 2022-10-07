import { Box, Typography } from "@mui/material";
import AfitLogoWhite from "../Icon_Logo/AfitLogoWhite";

export default function FootLeft() {
  return (
    <Box>
      <AfitLogoWhite />
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "26px",
          marginBottom: "20px",
          color: "white",
        }}
      >
        For partnership and business development inquiries, please contact us at
        info@afit.com. Check out our Help and Support center to find quick
        answers to your questions.
      </Typography>
    </Box>
  );
}
