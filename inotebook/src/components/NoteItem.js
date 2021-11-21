import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const context = useContext(noteContext);
  const { note, updateNote } = props;
  const image = "image";
  return (
    <div
      className={`card text-white bg-${
        note.tag === `Technology`
          ? `dark`
          : note.tag === `Language`
          ? `primary`
          : note.tag === `Shopping`
          ? `success`
          : note.tag === `Other`
          ? `secondary`
          : `info`
      } mb-3`}
    >
      <span
        className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary`}
      >
        {note.tag}
      </span>

      <div className="card-image">{image}</div>
      <div className="card-header">{"by-"}</div>
      <div className="card-body mx-auto">
        <h5 className="card-title text-center my-2 mx-auto">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <button
          onClick={() => {
            updateNote(note);
          }}
          type="button"
          className="me-3 btn btn-outline-warning"
        >
          <i className="me-2 far fa-edit"></i>Edit
        </button>
        <button
          onClick={() => {
            context.deleteNotes(note._id);
          }}
          type="button"
          className="btn btn-outline-danger"
        >
          <i className="me-2 far fa-trash-alt"></i>Delete
        </button>
      </div>
    </div>
  );
}
