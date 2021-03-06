import React, { useEffect } from "react";
import { connect } from "react-redux";

import NotebookForm from "./NotebookForm";
import {
  getNotebookAction,
  updateNotebookAction,
} from "../../../redux/actions/notebookActions";

const EditNotebook = ({
  initialValues,
  getNotebookAction,
  updateNotebookAction,
  match,
}) => {
  useEffect(() => {
    getNotebookAction(match.params.id);
  }, []);

  const handleSubmit = (data) => {
    updateNotebookAction(match.params.id, {
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
                <div className="col-lg-6 d-none d-lg-block bg-notebook-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Edit Notebook!</h1>
                    </div>
                    <hr />
                    <NotebookForm
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
  initialValues: state.notebook,
});

const mapDispatchToProps = {
  getNotebookAction,
  updateNotebookAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNotebook);
