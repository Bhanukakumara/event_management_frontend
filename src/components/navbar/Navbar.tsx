import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";

const pages = ["Explore", "CreateEvent"];
const label = { inputProps: { 'aria-label': 'Switch demo' } };

// ---------------------------------------------------------------------
// 1. Add a simple auth flag (replace with your real auth context later)
// ---------------------------------------------------------------------
const IS_LOGGED_IN = false;               // <-- toggle for demo
const USER_NAME = "Remy Sharp";           // <-- optional
const USER_AVATAR = "/static/images/avatar/2.jpg";

// ---------------------------------------------------------------------
// 2. User-menu items when logged in (you can extend this array)
// ---------------------------------------------------------------------
const userSettings = ["Logout"];   // you can add "Profile", "Dashboard", ...

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(e.currentTarget);
  };
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{ background: "white", color: "black" }}
      >
        <Toolbar disableGutters>
          {/* ---------- LOGO (desktop) ---------- */}
          <HomeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Eventily
          </Typography>

          {/* ---------- MOBILE MENU ---------- */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
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
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* ---------- LOGO (mobile) ---------- */}
          <HomeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "1rem"
            }}
          >
            Eventily
          </Typography>

          {/* ---------- PAGE LINKS (desktop) ---------- */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* ---------- AUTH SECTION ---------- */}
          <Box sx={{ flexGrow: 0 }}>
            {IS_LOGGED_IN ? (
              <>
                {/* Avatar + user menu */}
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={USER_NAME} src={USER_AVATAR} />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-user"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {userSettings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                {/* Login & Sign-up buttons */}
                <Button
                  variant="text"
                  size="small"
                  color="inherit"
                  sx={{ color: "black" }}
                  onClick={() => console.log("Login clicked")} // replace with navigation
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ ml: 1, backgroundColor: "black" }}
                  onClick={() => console.log("Sign Up clicked")} // replace with navigation
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>
          <Switch {...label} defaultChecked color="default" />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;