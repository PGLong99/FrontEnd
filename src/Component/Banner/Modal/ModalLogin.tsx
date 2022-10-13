import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { login } from "../../../Utils/Auth";
import { AuthContext } from "../../../Context/authContext";

export interface propsModal {
  open: boolean;
  setOpen: any;
}
export default function ModalLogin({ open, setOpen }: propsModal) {
  const [email, setEmail] = useState("long@mail.com");
  const [password, setPassword] = useState("longbmt1");
  const handleClose = () => setOpen(false);
  const { setTrue, setFalse } = useContext(AuthContext);

  const handleLogin = async () => {
    let res = await login(email, password);
    sessionStorage.setItem("token", res.data.accessToken);
    res.success ? setTrue() : setFalse();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center" }}>Sign Up</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          autoComplete="off"
        >
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleLogin}>Login</Button>
      </DialogActions>
    </Dialog>
  );
}
