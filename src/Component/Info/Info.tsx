import { Box, Container } from "@mui/material";
import Business from "./Business";
import Categories from "./Categories";

export default function Info() {
  return (
    <Box
      sx={{
        backgroundImage: `url(backGroundInfo.svg)`,
        marginBottom: "50px",
      }}
    >
      <Container
        sx={{
          maxWidth: "1150px",
          marginTop: "50px",
          display: "flex",
          paddingTop: "20px",
        }}
      >
        <Categories />
        <Business />
      </Container>
    </Box>
  );
}
