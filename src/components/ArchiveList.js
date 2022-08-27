import React from "react";
import NotesItem from "./NotesItem";

function ArchiveList({ notes, onDelete, onArchive }) {
  return (
    <>
      <div className="note-app__body">
        <h2>Catatan Arsip</h2>

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
            <p className="notes-list__empty-message">Tidak ada catatan arsip</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ArchiveList;
