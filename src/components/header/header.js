import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit">
        News
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
