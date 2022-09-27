import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import logo_nobackgorund from "./../static/Logo/logo_noback.png";
import DialogRecuperarContraseña from "../Components/Genericos/Dialogs/DialogRecuperarContraseña";
import "../Styles/Home.scss";

const llamadaBack = () => {
  return {
    auth: true,
    token: "hgBJHB JKuytvBHJYGVUHJVGJ%$&/(7676457687re",
    rol: "paciente",
  };
};
const Home = (props) => {
  //const classes = useStyles();
  const [usuario, setUsuario] = useState({ email: "", password: "" });
  const [openDialog, setOpenDialog] = useState(false);
  /*  
      const [email, setEmail] = useState(   ""     );
      const [password, setPassword] = useState(   ""    );
  */

  const ingresoDeCorreooo = (event) => {
    //setEmail(event.target.value);

    setUsuario({
      ...usuario,
      ...{ email: event.target.value },
    });
    console.log("login");
  };
  const handleChangePassword = (event) => {
    setUsuario({ ...usuario, ...{ password: event.target.value } });
  };
  useEffect(() => {
    console.log("==>", props.history);
    /*  document.body.classList.add("account-page");
    return document.body.classList.remov