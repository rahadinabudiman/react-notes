import React from "react";

function NotesSearch({ search, onSearch }) {
  return (
    <div className="notes-search">
      <input
        type="text"
        placeholder="Masukan Judul catatan..."
        value={search}
        onChange={onSearch}
      />
    </div>
  );
}

export default NotesSearch;
