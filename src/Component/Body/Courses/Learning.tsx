import { Box } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

interface propsLearning {
  state: string;
  viewNumber: string;
}
export default function Learning({ state, viewNumber }: propsLearning) {
  const color =
    state === "DONE"
      ? "#2D9CDB"
      : state === "NEW"
      ? "#64C000"
      : state === "DEPRECATED"
      ? "#97A5AC"
      : "#E79800";
  const fontColor = state === "DEPRECATED" ? "#44417A" : "#FFFFFF";
  return (
    <Box
      sx={{
        position: "absolute",
        top: "15px",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "40px",
          height: "24px",
          backgroundColor: color,
          color: fontColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {state}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginRight: "15px" }}>
        <PermIdentityIcon sx={{ color: "white", marginRight: "5px" }} />
        <p style={{ color: "white" }}>{viewNumber}</p>
      </Box>
    </Box>
  );
}
