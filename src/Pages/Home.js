import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import logo_nobackgorund from "./../static/Logo/logo_noback.png";
import DialogRecuperarContraseña from "../Components/Genericos/Dialogs/DialogRecuperarContraseña";
import "../Styles/Home.scss";

const llamadaBack = () => {
  return {
    auth: tru