import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { register } from "../../../Utils/Auth";
import { AuthContext } from "../../../Context/authContext";
import { propsModal } from "./ModalLogin";
import { validateEmail } from "../../../Utils/Validate";

export default function ModalSignUp({ open, setOpen }: propsModal) {
  const [email, setEmail] = useState("long@mail.com");
  const [mailValid, setMailValid] = useState({ valid: false, helpText: "" });
  const [name, setName] = useState("long");
  const [password, setPassword] = useState("longbmt1");
  const [confirmPass, setComfirmPass] = useState("longbmt1");
  const handleClose = () => setOpen(false);
  const { setTrue, setFalse } = useContext(AuthContext);
  const [snackBarState, setSnackBarState] = useState(false);

  const handleSignUp = async () => {
    if (validateEmail(email)) {
      setMailValid({ valid: false, helpText: "" });
      let res = await register(name, email, password, confirmPass);
      sessionStorage.setItem("token", res.data.accessToken);
      res.success ? setTrue() && setOpen(false) : setFalse();
    } else {
      setMailValid({ valid: true, helpText: "Error Email" });
    }
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
            helperText={mailValid.helpText}
            error={mailValid.valid}
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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackBarState}
        // onClose={handleClose}
        message="Register success"
      />
    </Dialog>
  );
}
