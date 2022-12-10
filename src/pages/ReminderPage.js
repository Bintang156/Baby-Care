import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { add_Reminder, remove_Reminder, clear_Reminder } from "../actions";
import picReminder from "../img/reminder.jpg";
import Footer from "../components/Footer";

// function Reminder() {
//   return (
//     <>
//     <div className="reminder">
//       <h2>Fitur Reminder Masih Dalam Tahap Pengembangan</h2>
//     </div>
//     <Footer/>
//     </>
//   );
//}

class Reminder extends Component {
  state = {
    text: "",
    date: new Date(),
  };

  render_Reminders = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div>{reminder.text}</div>
              <div>{moment(new Date(reminder.date)).fromNow()}</div>
              <div
                className="closeIcon btn btn-danger"
                onClick={() => this.props.remove_Reminder(reminder.id)}
              >
                X
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div className="App">
        <img className="logo-reminder" src={picReminder} alt="reminder" />
        <div className="reminder-title">
          <h2>Masukkan Apapun Untuk Pengingat</h2>
        </div>
        <input
          type="text"
          className="input-control form-control"
          placeholder="Masukkan Pengingat"
          onChange={(e) => this.setState({ text: e.target.value })}
          value={this.state.text}
        />
        <DatePicker
          className="input-control form-control"
          placeholderText="Masukkan Tanggal Pengingat"
          value={this.state.date}
          selected={this.state.date}
          onChange={(date) => {
            this.setState({ date });
          }}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />
        <button
          onClick={() => {
            this.props.add_Reminder(this.state.text, this.state.date);
            this.setState({ text: "", date: "" });
          }}
          className="clearReminder btn btn-primary btn-block"
        >
          Tambah Pengingat
        </button>
        {this.render_Reminders()}
        <button
          className="clearReminder btn btn-danger btn-block"
          onClick={() => this.props.clear_Reminder()}
        >
          Bersihkan Pengingat
        </button>
        <Footer />
      </div>
    );
  }
}

export default connect(
  (state) => {
    return { reminders: state };
  },
  { add_Reminder, remove_Reminder, clear_Reminder }
)(Reminder);
