import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Learning from "./Learning";

export default function Courses() {
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
    <Grid item xs={6} md={3} sx={{ maxWidth: "265px", padding: "10px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" image="image.png" alt="green iguana" />
          <Learning state="DONE" viewNumber="200k" />
          <CardContent>
            <TypographyTittle className="coursesTittle">
              2020 Complete Python Bootcamp From Zero to Hero...
            </TypographyTittle>
            <TypographyTag className="coursesTag">
              #Onboarding training
            </TypographyTag>
            <TypographyTag className="coursesTag">#Basic</TypographyTag>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
