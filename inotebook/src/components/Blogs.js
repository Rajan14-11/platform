import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import "./Blogs.css";
const Blogs = () => {
  const context = useContext(noteContext);
  const [addNote, setAddNote] = useState({
    id: "",
    title: "",
    description: "",
    tag: "",
  });
  const updateNote = (currentNote) => {
    refOpen.current.click();
    setAddNote({
      id: currentNote._id,
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag,
    });
  };
  const refOpen = useRef(null);
  const refClose = useRef(null);

  const handleUpdateOnClick = (e) => {
    context.editNote(
      addNote.id,
      addNote.title,
      addNote.description,
      addNote.tag
    );
    setAddNote({ id: "", title: "", description: "", tag: "" });
    refClose.current.click();
  };
  const handleOnChange = (e) => {
    setAddNote({ ...addNote, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <button
        ref={refOpen}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="col-sm-2 col-form-label">
                    Title
                  </label>
                  <div className="col-sm-12">
                    <input
                      placeholder="Title should be greater than 3 characters"
                      onChange={handleOnChange}
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={addNote.title}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="description"
                    className="col-sm-2 col-form-label"
                  >
                    Content
                  </label>
                  <div className="col-sm-12">
                    <input
                      placeholder="Description should be greater than 3 characters"
                      onChange={handleOnChange}
                      type="description"
                      className="form-control"
                      id="description"
                      name="description"
                      value={addNote.description}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="col-sm-2 col-form-label">
                    Tag
                  </label>
                  <div className="col-sm-12">
                    <input
                      onChange={handleOnChange}
                      type="text"
                      className="form-control"
                      id="tag"
                      name="tag"
                      value={addNote.tag}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  addNote.title.length <= 3 || addNote.description.length <= 5
                }
                onClick={handleUpdateOnClick}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container fluid">
        <h1 className="my-5 text-center">Your Blogs</h1>
        {context.notes.length === 0 &&
          `No Blogs available 
        START NOW....`}
        <div className="col-md-10 col-sm-12 mx-auto">
          {context.notes.map((note) => {
            return (
              <div key={note._id} className="col-md-12">
                <NoteItem updateNote={updateNote} note={note} />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
