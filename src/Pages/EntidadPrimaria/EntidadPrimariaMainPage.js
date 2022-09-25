import React, { useEffect } from 'react';
import {  Route } from "react-router-dom";

import PageWrapper from '../../Components/Compartidos/PageWrapper';
import Institucion from './1-Institucion/Institucion';
import Pacientes from './2-Pacientes/Pacientes';
import Reportes from './3-Reportes/Reportes';

const EntidadPrimariaMainPage =props=> {
    useEffect(()=>{
        document.title="Serenity | Ent. Primara"
    });
        return (
            <PageWrapper {...props}>
                 <Route exact path="/entidad-primaria" component={()=><In