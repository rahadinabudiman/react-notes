import React from "react";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";

function NotesBody({ id, notes, onDelete, onArchive, addNote }) {
  return (
    <div className="note-app__body">
      <NotesInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NotesList
        id={id}
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NotesBody;
