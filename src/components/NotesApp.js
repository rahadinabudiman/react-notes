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
      search: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
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
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const daftarNotes = notes.filter((note) => {
      return note.archived === false;
    });
    const archivedNotes = notes.filter((note) => {
      return note.archived === true;
    });
    return (
      <div className="note-app">
        <NotesHeader
          search={this.state.search}
          onSearch={this.onSearchHandler}
        />
        <NotesBody
          notes={daftarNotes}
          onDelete={this.onDeleteHandler}
          addNote={this.onAddNotesHandler}
          onArchive={this.onArchiveHandler}
        />
        <ArchiveList
          notes={archivedNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
