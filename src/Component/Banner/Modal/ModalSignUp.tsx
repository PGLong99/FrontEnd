import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

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

  const auth = async () => {
    try {
      let token = sessionStorage.getItem("accesstoken");
      let res = await axios.get(
        `${process.env.REACT_APP_BACK_END}/api/auth/authenticated-user-details`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const Login = async () => {
    try {
      let token = sessionStorage.getItem("accesstoken");
      let res = await axios.post(
        `${process.env.REACT_APP_BACK_END}/api/auth/login`,
        {
          email: email,
          password: password,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const register = async () => {
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_BACK_END}/api/auth/register`,
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmPass,
        }
      );
      sessionStorage.setItem("accesstoken", res.data.data.accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignUp = () => {
    //register();
    //auth();
    Login();
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
