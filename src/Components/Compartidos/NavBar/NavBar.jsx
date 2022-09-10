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
  