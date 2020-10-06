import React from "react";
import { connect } from "react-redux";

import SubjectForm from "./SubjectForm";
import { createSubjectAction } from "../../../redux/actions/subjectActions";

const CreateSubject = ({ createSubjectAction }) => {
  const handleSubmit = (data) => {
    createSubjectAction(data);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row align-items-center">
                <div className="col-lg-6 d-none d-lg-block bg-subject-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Create Subject!</h1>
                    </div>
                    <hr />
                    <SubjectForm onSubmit={handleSubmit} />
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

const mapDispatchToProps = {
  createSubjectAction,
};

export default connect(null, mapDispatchToProps)(CreateSubject);
