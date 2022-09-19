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
  const { subtitulo } = props;
  const handleClick = () => {};

  /*   const localization = dummyLoation.slice(1);
  const currentPage = dummyLoation[dummyLoation.length - 1];
 */
  /* console.log(
    "localization",
    props.history.location.pathname.split("/").splice(1) || ""
  ); */
  const makeRef = (listPath) => {
    // console.log("makeref ini", listPath);
    let listRef = [];
    let j = 1;
    for (let i = 0; i < listPath.length; i++) {
      let ref = "";
      for (let k = 0; k < j; k++) {
        ref += `/${listPath[k]}`;
      }
      listRef.push({ page: listPath[i], href: ref });
    }
    //console.log("makeref fin", listRef);

    return listRef;
  };
  let listPath;
  let currentPage = "";
  let localization = [];
  if (!props.history) {
    listPath = "";
  } else {
    listPath = props.history.location.pathname.split("/").splice(1);
    const listRef = makeRef(listPath);
    console.log("reff", listRef);
    currentPage 