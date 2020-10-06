import React, { useEffect } from "react";
import { connect } from "react-redux";

import BookForm from "./BookForm";
import {
  getBookAction,
  updateBookAction,
} from "../../../redux/actions/bookActions";

const EditBook = ({
  initialValues,
  getBookAction,
  updateBookAction,
  match,
}) => {
  useEffect(() => {
    getBookAction(match.params.id);
  }, []);

  const handleSubmit = (data) => {
    updateBookAction(match.params.id, {
      ...data,
      idsubject: match.params.subjectId,
    });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row align-items-center">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Edit Book!</h1>
                    </div>
                    <hr />
                    <BookForm
                      onSubmit={handleSubmit}
                      initialValues={initialValues}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialValues: state.book,
});

const mapDispatchToProps = {
  getBookAction,
  updateBookAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
