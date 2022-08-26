import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive }) {
  return (
    <>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes?.map((note) => (
            <NotesItem
              key={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
        </div>
      ) : (
        <div className="notes-list">
          <p className="notes-list__empty-message">Tidak ada catatan aktif</p>
        </div>
      )}
    </>
  );
}

export default NotesList;
