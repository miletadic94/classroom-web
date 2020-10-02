import React, { useState, Fragment } from "react";
import BookModal from "./BookModal";

const NoteBookSection = ({ title, data }) => {
  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(0);

  if (!data) return null;

  const handleSelectBook = (event, book) => {
    event.stopPropagation();
    setSelectedBook(book);
  };

  console.log("selectedBook", selectedBook);

  return (
    <div>
      <ul
        onClick={() => {
          setOpen(!open);
          setSelectedBook(null);
        }}
        class="list-group"
      >
        <li class="cursor-pointer list-group-item d-flex justify-content-between align-items-center">
          {title}
          <span class="badge badge-primary badge-pill">{data.length}</span>
        </li>
        <ul class="list-group list-group-flush">
          {open &&
            data.length > 0 &&
            data.map((item) => (
              <Fragment>
                <BookModal
                  id={item.idnotebook || item.idbook}
                  book={selectedBook}
                  handleClose={() => setSelectedBook(null)}
                />
                <li
                  onClick={(e) => handleSelectBook(e, item)}
                  data-toggle="modal"
                  data-target={`#modal_id${item.idnotebook || item.idbook}`}
                  data-whatever="@getbootstrap"
                  class="cursor-pointer list-group-item"
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
