import AfitLogo from "../Icon_Logo/AfitLogo";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import LearningLogo from "../Icon_Logo/LearningLogo";
import CustomColorButton from "../CustomButton/CustomColorButton";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ModalSignUp from "./Modal/ModalSignUp";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [openSignUp, setOpenSignUp] = useState(false);
  const handleOpenSignUp = () => setOpenSignUp(true);
  const CustomButton = styled(Button)({
    color: "#000000",
  });
  const pages = ["HOME", "ABOUT", "COURSES", "CONTACT"];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        padding: "30px",
        borderRadius: "0 0 20px 20px",
        maxHeight: "75px",
        flexGrow: 1,
        width: "100%",
      }}
    >
      <AfitLogo />
      <LearningLogo />
      <Box
        sx={{
          textAlign: "right",
          flexGrow: 1,
          display: { xs: "none", md: "block" },
        }}
      >
        {pages.map((page, index) => (
          <CustomButton variant="text" key={index}>
            {page}
          </CustomButton>
        ))}
        <CustomColorButton
          variant="outlined"
          color="#44417A"
          text="Login"
          sx={{ margin: "0 10px 0 10px" }}
        />
        <CustomColorButton
          variant="contained"
          color="#44417A"
          text="Sign Up"
          sx={{ margin: "0 10px 0 10px" }}
          onClick={handleOpenSignUp}
        />
      </Box>

      {/* Reponsive */}
      <Box
        sx={{
          textAlign: "right",
          flexGrow: 1,
          display: { xs: "block", md: "none" },
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">SIGN UP</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">LOGIN</Typography>
          </MenuItem>
        </Menu>
      </Box>
      <ModalSignUp open={openSignUp} setOpen={setOpenSignUp} />
    </Box>
  );
}
