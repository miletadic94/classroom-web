import React, { useState, Fragment } from "react";
import BookModal from "./BookModal";
import { isStudent } from "../../../services/localStorageService";

const NoteBookSection = ({ title, data }) => {
  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(0);

  if (!data) return null;

  const studentRole = isStudent();

  const handleSelectBook = (event, book) => {
    event.stopPropagation();
    setSelectedBook(book);
  };

  return (
    <div>
      <ul
        onClick={() => {
          setOpen(!open);
          setSelectedBook(null);
        }}
        className="list-group"
      >
        <li className="cursor-pointer list-group-item d-flex justify-content-between align-items-center bg-blue">
          {title}
          <span className="badge badge-primary badge-pill">{data.length}</span>
        </li>
        <ul className="list-group list-group-flush">
          {open &&
            data.length > 0 &&
            data.map((item) => (
              <Fragment>
                <BookModal
                  id={item.idnotebook || item.idbook}
                  isNotebook={!!item.idnotebook}
                  book={selectedBook}
                  handleClose={() => setSelectedBook(null)}
                />
                <li
                  onClick={(e) => handleSelectBook(e, item)}
                  data-toggle="modal"
                  data-target={`#modal_id${item.idnotebook || item.idbook}`}
                  data-whatever="@getbootstrap"
                  className="cursor-pointer list-group-item"
                >
                  {item.name}
                </li>
              </Fragment>
            ))}
        </ul>
      </ul>
    </div>
  );
};

export default NoteBookSection;
