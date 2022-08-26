import React from "react";
import NotesHeader from "./NotesHeader";
import NotesBody from "./NotesBody";
import { getInitialData } from "../assets/utils/index";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
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
  render() {
    return (
      <div className="note-app">
        <NotesHeader />
        <NotesBody
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          addNote={this.onAddNotesHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
