import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NotesAction({ id, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />{" "}
      <ArchiveButton id={id} onArchive={onArchive} />{" "}
    </div>
  );
}

export default NotesAction;
