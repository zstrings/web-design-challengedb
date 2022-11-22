import { Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import JTableSSJ from "../../../Components/Genericos/JMaterialTable/JTableSSJ";
import { fake_getListaCitas } from "../../../fakeServer/dummyData";
import axios from "axios";

// function setFakeDataTable() {
//     const data = [
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia",estado:1 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia",estado:1 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid",estado:0 },
//     ]
//     return data;
// }

const columns = [
    { title: "Nro.", field: "nro" },
    { title: "Fecha", field: "fecha" },
    { title: "Hora", field: "hora" },
    { title: "Psicólogo", field: "psico" },
    {
        title: "Estado",
        field: "estado",
        render: (rowData) => {
            if (rowData.estado) {
                //const idEval = rowData.idEval;
                return (
                    <Button
                        //href="/dummy"
                     