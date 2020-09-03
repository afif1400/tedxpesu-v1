import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import logo from "../assets/TEDxPESU1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbarBox: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: "160px",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    setAnchorEl(null);
    props.history.push(pageURL);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="white"
        elevation={0}
        className={classes.appbar}
      >
        <Toolbar>
          <div className={classes.toolbarBox}>
            <img src={logo} alt="TEDxPESU" className={classes.logo} />
          </div>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
              <MenuItem onClick={() => handleMenuClick("/speakers")}>
                Speakers
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("/sponsors")}>
                Sponsors
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
