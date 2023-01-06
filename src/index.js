
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import MainApp from './MainApp';
import * as dotenv from "dotenv";
import {
  EstadoInicialUser,
  EstadoInicialDialog,
  EstadoInicialMultiDialog,
  EstadoInicialBackDrop,
} from "./redux/estadoInicial";
import { UserProvider } from "./redux/Sesion";
import sesionReducer from "./redux/reducers/sesionReducer";
import { MultiDialogProviderSSJ } from "./redux/multidialog";
import { DialogProviderSSJ } from "./redux/dialog";
import openDialogReducer from "./redux/reducers/openDialogReducer";
import openMultiDialogReducer from "./redux/reducers/openMultiDialogReducer";
import { BackDropProvider } from "./redux/backdrop";
import openBackDropReducer from "./redux/reducers/openBackDropReducer";
import axios from "axios";

dotenv.config();
//Definimos la base URL
axios.defaults.baseURL=process.env.REACT_APP_MAIN_SERVER;

ReactDOM.render(
  <React.StrictMode>
    
    <UserProvider initialState={EstadoInicialUser} reducer={sesionReducer}>