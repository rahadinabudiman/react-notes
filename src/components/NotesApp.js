import React from "react";
import NotesHeader from "./NotesHeader";
import NotesBody from "./NotesBody";
import ArchiveList from "./ArchiveList";
import { getInitialData } from "../assets/utils/index";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
  }

  onAddNotesHandler({ id, title, body, createdAt, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({
      notes,
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = true;
      }
      return note;
    });
    this.setState({ notes });
  }

  onArchivedHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = false;
      }
      return note;
    });
    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app">
        <NotesHeader />
        <NotesBody
          notes={this.state.notes.filter((note) => note.archived === false)}
          onDelete={this.onDeleteHandler}
          addNote={this.onAddNotesHandler}
          onArchive={this.onArchiveHandler}
        />
        <ArchiveList
          notes={this.state.notes.filter((note) => note.archived === true)}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchivedHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
