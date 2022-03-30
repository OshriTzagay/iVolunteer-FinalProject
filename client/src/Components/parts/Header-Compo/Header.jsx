import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./Style-Header.css";
import { useNavigate } from "react-router-dom";
import { height } from "@mui/system";
import { userContext } from "../../../Contexts/user-context";
import Header_admin from "./Header-Admin";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const pages = [
  <i style={{ fontSize: "1.5rem",marginBottom:'3vh' }} className="bi bi-house-door"></i>,
  "Provide assistance",
  "Seeking assistance",
  "volunteers",
  "need volunteers",
];

const navigations = [
  "/home",
  "/addVolPost",
  "/addNeedVolPost",
  "/volPosts",
  "/needVol",
];

const ResponsiveAppBar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.clear();
    setUser({});
    navigate("/");
  };
  
  const { user, setUser } = React.useContext(userContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  const navBarNavigator = (index) => {
    navigate(navigations[index]);
  };
  // const Log_out = () => {
  //   localStorage.clear();
  //   setUser({});
  //   navigate("/");
  // };
  if (user.isAdmin == true) {
    return <Header_admin />;
  }

  return (
    <AppBar className="header-nav" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 30, display: { xs: "none", md: "flex" } }}
          >
            <img src="Media/iVolunteer.png" alt="" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={() => navBarNavigator(index)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              className="our-logo"
              src="Media/iVolunteer.png"
              alt=""
              style={{ width: "auto" }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                className="links"
                key={page}
                onClick={() => navBarNavigator(index)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                <Avatar
                  style={{ width: "60px", height: "60px" }}
                  className="avatar"
                  alt="Remy Sharp"
                  src={user.ProfilePic}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                {open ? (
                  <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <DialogTitle id="responsive-dialog-title">
                      {"Logg-Off From iVolunteer"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                    Hey {user.Email} !
                    We Hope to see you soon again
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                     
                      <Button onClick={handleClose} autoFocus>
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                ) : (
                  <Typography onClick={handleClickOpen} textAlign="center" style={{fontFamily:'Montserrat Alternates", sans-serif'}}>
                    Log-Out
                  </Typography>
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
