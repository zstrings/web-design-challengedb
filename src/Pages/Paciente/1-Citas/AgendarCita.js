import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
//import "./../../../Styles/Citas.scss";
import { Button } from "@material-ui/core";

class AgendarCita extends Component {
  state = {
    startDate: new Date(),
    show: false,
    iseditdelete: false,
    addneweventobj: null,
    isnewevent: false,
    event_title: "",
    category_color: "",
    weekendsVisible: true,
    currentEvents: [],
    defaultEvents: [
      {
          title: "Manuel T",
          start: Date.now() + 148000000,
          className: "bg-purple",
      },
      {
          title: "Manuel T",
          start: Date.now(),
          end: Date.now(),
          className: "bg-success",
   