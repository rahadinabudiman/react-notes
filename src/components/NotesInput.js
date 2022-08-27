import React from "react";
import { showFormattedDate } from "../assets/utils/index";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      archived: false,
      createdAt: showFormattedDate,
    };

    this.onTitleChangeHandlerEvent = this.onTitleChangeHandlerEvent.bind(this);
    this.onBodyChangeHandlerEvent = this.onBodyChangeHandlerEvent.bind(this);
    this.onSubmitHandlerEvent = this.onSubmitHandlerEvent.bind(this);
  }

  onTitleChangeHandlerEvent(event) {
    this.setState(() => {
      return {
        title:
          event.target.value.length <= 25
            ? event.target.value
            : event.target.value.substring(0, 25),
      };
    });
  }

  onBodyChangeHandlerEvent(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandlerEvent(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitHandlerEvent}>
        <h2>Buat Catatan</h2>
        <small className="note-input__title__char-limit">
          Limit Karakter : <span>{25 - this.state.title.length}</span>
        </small>
        <input
          className="note-input__title"
          type="text"
          placeholder="Masukan Judul Catatan..."
          value={this.state.title}
          onChange={this.onTitleChangeHandlerEvent}
        />
        <textarea
          type="text"
          placeholder="Masukan Catatan..."
          className="note-input__body"
          maxLength={25}
          value={this.state.body}
          onChange={this.onBodyChangeHandlerEvent}
        />
        <button className="note-input">Simpan Catatan</button>
      </form>
    );
  }
}

export default NotesInput;
