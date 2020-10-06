import React from "react";
import { connect } from "react-redux";

import NoteForm from "./NoteForm";
import { createNoteAction } from "../../../redux/actions/noteActions";

const CreateNote = ({ createNoteAction, match }) => {
  const handleSubmit = (data) => {
    createNoteAction({ ...data, idsubject: match.params.subjectId });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row align-items-center">
                <div className="col-lg-6 d-none d-lg-block bg-note-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Create Note!</h1>
                    </div>
                    <hr />
                    <NoteForm onSubmit={handleSubmit} />
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  createNoteAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
