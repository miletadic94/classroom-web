import React from "react";

const BookModal = ({ id, book, handleClose }) => {
  if (!book) return null;
  console.log(book);

  return (
    <div
      class="modal fade"
      id={`modal_id${id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {book.name}
            </h5>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {book.author && <p class="text-left">Author: {book.author}</p>}
            <p class="text-justify">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
