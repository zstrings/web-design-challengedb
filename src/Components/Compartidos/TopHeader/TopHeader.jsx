import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import React from "react";
import "../../../Styles/TopHeader.scss";
export const dummyLoation = [
  { page: "page 1", href: "" },
  { page: "page 2", href: "" },
  { page: "page 3", href: "" },
  { page: "page 4", href: "" },
  { page: "page 5", href: "" },
  { page: "Current page", href: "" },
];

const TopHeader = (props) => {
  const { subtitulo 