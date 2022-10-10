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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => setOpen(false);
  const handleSignUp = () => {
    axios
      .post("http://localhost:3000/register", {
        name: name,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
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
