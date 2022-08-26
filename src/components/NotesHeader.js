import React from "react";

function NotesHeader() {
  return (
    <div className="note-app__header">
      <h1 className="note-input__title"> R4HA Notes </h1>{" "}
      <input
        type="text"
        className="note-app"
        placeholder="Masukan Judul Catatan......"
      />
    </div>
  );
}

export default NotesHeader;
