import { Grid } from "@mui/material";
import CustomColorButton from "../CustomButton/CustomColorButton";

interface PropsCategory {
  Text: string;
}
export default function Category({ Text }: PropsCategory) {
  return (
    <Grid item md={6} xs={12}>
      <CustomColorButton
        variant="outlined"
        sx={{ width: "100%" }}
        color="#44417A"
        text={Text}
      />
    </Grid>
  );
}
