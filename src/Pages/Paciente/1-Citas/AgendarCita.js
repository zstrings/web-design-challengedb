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
    let calendarApi = addneweventobj.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (event_title) {
      calendarApi.addEvent({
        id: 10,
        title: event_title,
        className: category_color,
        start: addneweventobj.startStr,
        end: addneweventobj.endStr,
        allDay: addneweventobj.allDay,
      });
    }
    this.setState({ isnewevent: false });
  }

  onupdateModalClose() {
    this.setState({
      iseditdelete: false,
      event_title: "",
    });
  }
  oncreateeventModalClose() {
    this.setState({
      isnewevent: false,
      event_title: "",
    });
  }
  handleEventClick = (clickInfo) => {
    this.setState({
      iseditdelete: true,
      event_title: clickInfo.event.title,
      calenderevent: clickInfo.event,
    });
  };
  removeevent() {
    const { calenderevent } = this.state;
    calenderevent.remove();
    this.setState({ iseditdelete: false });
  }
  clickupdateevent() {
    const { defaultEvents, calenderevent, event_title } = this.state;
    const newArray = defaultEvents;
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === parseInt(calenderevent.id)) {
        newArray[i].title = event_title;
      }
    }
    this.setState({ defaultEvents: newArray, iseditdelete: false });
  }

  handleClick() {
    this.setState({
      show: true,
    });
  }

  componentDidMount() {
    this.props.makeSubtitulo("DISPONIBILIDAD DE MI PSICÓLOGO");
  }

  render() {
    const { defaultEvents } = this.state;
    return (
      <div
        style={{
          padding: "0 6%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ alignSelf: "flex-end" }}>
          <Button color="primary" variant="contained">
            Solicitar Cambio Psicólogo
          </Button>
          <br />
          <br />
        </div>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={this.state.weekendsVisible}
          initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
          select={this.handleDateSelect}
          // eventContent={renderEventContent} // custom render function
          eventClick={(clickInfo) => this.handleEventClick(clickInfo)}
          // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
          /* yo