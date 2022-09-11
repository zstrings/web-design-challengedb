import React from "react"; //, { useRef, useState } //useEffect,
import {
  AppBar,
  CssBaseline,
  Link,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import logo from "./../../../static/Logo/logo.svg";
import "../../../Styles/NavBar.scss";
const avatarUrl = "https://picturepan2.github.io/spectre/img/avatar-2.png";

const navBarStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: { flexGrow: 1 },
  growmid: { flexGrow: 0.05 },
}));

const logoStyles = makeStyles((theme) => ({
  largeLogo: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const NavBar = (props) => {
  const { navegacion } = props;
  const classes = logoStyles();
  const classesNavBar = navBarStyles();

  const redirect = (path) => {
    //window.location.replace("/jp");
    console.log("Redicreccion desde NavBar");
    props.history.push(`${path}`);
  };
  const onNavigateHome = () => {
    window.location.replace("/");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickAvatarMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAvatarMenu = () => {
    setAnchorEl(null);
  };
  const listaNavegacionLocal = navegacion 