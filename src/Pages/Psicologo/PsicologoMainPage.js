import React, { useEffect } from 'react';
import PageWrapper from '../../Components/Compartidos/PageWrapper';
import SesionVideoLlamada from '../Paciente/1-Citas/SesionVideoLlamada';
import Agenda from './1-Agenda/Agenda';
import CitasXPaciente from './2-Pacientes/CitasXPaciente';
import DiarioTextoXPaciente from './2-Pacientes/DiarioTextoXPaciente';
import DirarioAudioXPaciente from './2-Pacientes/DirarioAudioXPaciente';
import PerfilXPaciente from './2-Pacientes/PerfilXPaciente';
import PlanDeAccionXPaciente from './2-Pacientes/PlanDeAccionXPaciente';
import GruposDeApoyo from './3-GruposDeApoyo/GruposDeApoyo';
import PacientesXGrupoDeApoyo from './3-GruposDeApoyo/PacientesXGrupoDeApoyo';
import {  Route } from "react-router-dom";

const PsicologoMainPage =props=> {
    const [subtitulo, setSubtitulo] = React.useState(undefined);
    const makeSubtitulo = (_subtitulo) => {
        setSubtitulo(_subtitulo);
    }
    useEffect(()=>{
        document.title="Serenity | Psicólogo"
    });
        return (
            <PageWrapper {...props} subtitulo={subtitulo}>
                <Route exact path="/psicologo" component={(props)=><Agenda {...props} makeSubtitulo={makeSubtitulo}/>} />
                <Route exact path="/psicologo/age