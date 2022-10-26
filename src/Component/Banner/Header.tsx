import AfitLogo from "../Icon_Logo/AfitLogo";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LearningLogo from "../Icon_Logo/LearningLogo";
import CustomColorButton from "../CustomButton/CustomColorButton";
import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ModalSignUp from "./Modal/ModalSignUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../../Context/authContext";
import ModalLogin from "./Modal/ModalLogin";

export default function Header() {
  const [anchorPage, setAnchorPage] = useState<null | HTMLElement>(null);
  const [anchorAccount, setAnchorAccount] = useState<null | HTMLElement>(null);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const { isAuth, setFalse } = useContext(AuthContext);
  const CustomButton = styled(Button)({
    color: "#000000",
  });
  const matches = useMediaQuery(useTheme().breakpoints.down("md"));
  const pages = ["HOME", "ABOUT", "COURSES", "CONTACT"];

  //event
  const handleOpenSignUp = () => {
    setOpenSignUp(true);
    setAnchorAccount(null);
  };
  const handleOpenLogin = () => {
    setOpenLogin(true);
    setAnchorAccount(null);
  };
  const handleOpenPageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorPage(event.currentTarget);
  };
  const handleClosePageMenu = () => {
    setAnchorPage(null);
  };
  const handleOpenAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorAccount(event.currentTarget);
  };
  const handleCloseAccountMenu = () => {
    setAnchorAccount(null);
  };
  const handleClickLogOut = () => {
    sessionStorage.removeItem("token");
    setFalse();
    setAnchorAccount(null);
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
        zIndex: 3,
      }}
    >
      <Box
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenPageMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorPage}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorPage)}
          onClose={handleClosePageMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleClosePageMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ flexGrow: { xs: 1, md: 0 }, textAlign: "center" }}>
        <AfitLogo />
        <LearningLogo />
      </Box>
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
      </Box>
      {!isAuth && (
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <CustomColorButton
            variant="outlined"
            color="#44417A"
            text="Login"
            sx={{ margin: "0 10px 0 10px" }}
            onClick={handleOpenLogin}
          />
          <CustomColorButton
            variant="contained"
            color="#44417A"
            text="Sign Up"
            sx={{ margin: "0 10px 0 10px" }}
            onClick={handleOpenSignUp}
          />
        </Box>
      )}
      {(matches || isAuth) && (
        <Box
          sx={
            {
              // display: { xs: "block", md: "none" },
            }
          }
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenAccountMenu}
            color="inherit"
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorAccount}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorAccount)}
            onClose={handleCloseAccountMenu}
            sx={
              {
                // display: { xs: "block", md: "none" },
              }
            }
          >
            {!isAuth ? (
              <div>
                <MenuItem onClick={handleOpenLogin}>
                  <Typography>LOGIN</Typography>
                </MenuItem>
                <MenuItem onClick={handleOpenSignUp}>
                  <Typography>SIGN UP</Typography>
                </MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem onClick={handleClickLogOut}>
                  <Typography>LOG OUT</Typography>
                </MenuItem>
              </div>
            )}
          </Menu>
        </Box>
      )}

      <ModalSignUp open={openSignUp} setOpen={setOpenSignUp} />
      <ModalLogin open={openLogin} setOpen={setOpenLogin} />
    </Box>
  );
}
