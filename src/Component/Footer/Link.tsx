import { Grid, Typography } from "@mui/material";

interface propLink {
  text: string;
}
export default function Link({ text }: propLink) {
  return (
    <Grid item xs={6} md={4}>
      <Typography
        sx={{
          color: "#fff",
          fontSize: "14px",
          lineHeight: "36px",
          fontStyle: "Medium",
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
}
