import React, { useEffect } from "react";
import { connect } from "react-redux";

import SubjectForm from "./SubjectForm";
import {
  getSubjectAction,
  updateSubjectAction,
} from "../../../redux/actions/subjectActions";

const EditSubject = ({
  initialValues,
  getSubjectAction,
  updateSubjectAction,
  match,
}) => {
  useEffect(() => {
    getSubjectAction(match.params.id);
  }, []);

  const handleSubmit = (data) => {
    updateSubjectAction(match.params.id, data);
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
                      <h1 className="h4 text-gray-900 mb-4">Edit Subject!</h1>
                    </div>
                    <hr />
                    <SubjectForm
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
  initialValues: state?.subject?.Subject,
});

const mapDispatchToProps = {
  getSubjectAction,
  updateSubjectAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSubject);
