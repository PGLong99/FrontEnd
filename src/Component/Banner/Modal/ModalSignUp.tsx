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
import { register } from "../../../Utils/Auth";
import { AuthContext } from "../../../Context/authContext";

interface propsModalSignUp {
  open: boolean;
  setOpen: any;
}
export default function ModalSignUp({ open, setOpen }: propsModalSignUp) {
  const [email, setEmail] = useState("long@mail.com");
  const [name, setName] = useState("long");
  const [password, setPassword] = useState("longbmt1");
  const [confirmPass, setComfirmPass] = useState("longbmt1");
  const handleClose = () => setOpen(false);
  const { setTrue, setFalse } = useContext(AuthContext);

  const handleSignUp = async () => {
    let res = await register(name, email, password, confirmPass);
    //await login(email, password);
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
            label="Name"
            variant="outlined"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            fullWidth
            value={confirmPass}
            onChange={(e) => setComfirmPass(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSignUp}>Sign Up</Button>
      </DialogActions>
    </Dialog>
  );
}
