import React from "react";
import { isStudent } from "../../../../services/localStorageService";
import { history } from "../../../../store";

const BookModal = ({ id, book, isNotebook, handleClose }) => {
  if (!book) return null;

  const studentRole = isStudent();

  return (
    <div
      className="modal fade"
      id={`modal_id${id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {book.name}
            </h5>
            {!studentRole && (
              <span
                onClick={() =>
                  history.push(
                    `/subject/${book.idsubject}/edit-${
                      isNotebook ? "notebook" : "book"
                    }/${id}`
                  )
                }
                className="cursor-pointer"
              >
                <i className="ml-3 fas fa-edit"></i>
              </span>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {book.author && <p className="text-left">Author: {book.author}</p>}
            <p className="text-justify">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
