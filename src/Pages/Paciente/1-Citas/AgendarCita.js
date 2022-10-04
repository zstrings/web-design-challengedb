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
      },
      {
          title: "Manuel T",
          start: Date.now() + 168000000,
          className: "bg-info",
      },
      {
          title: "Manuel T",
          start: Date.now() + 338000000,
          className: "bg-primary",
      },
  ],
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleClose = () => {
    this.setState({
      isnewevent: false,
      iseditdelete: false,
      show: false,
    });
  };
  handleEventClick = (clickInfo) => {
    this.setState({
      iseditdelete: true,
      event_title: clickInfo.event.title,
      calenderevent: clickInfo.event,
    });
  };

  handleDateSelect = (selectInfo) => {
    this.setState({
      isnewevent: true,
      addneweventobj: selectInfo,
    });
  };
  addnewevent() {
    const { event_title, category_color, addneweventobj } = this.state;
    let calendarApi = addnewev