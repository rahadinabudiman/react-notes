import React from "react";
import NotesItemContent from "./NotesItemContent";
import NotesAction from "./NotesAction";
import { showFormattedDate } from "../assets/utils/index";

function NotesItem({ id, title, body, createdAt, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NotesItemContent
        title={title}
        id={id}
        body={body}
        createdAt={showFormattedDate(createdAt)}
      />
      <NotesAction id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NotesItem;
