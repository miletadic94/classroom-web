import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getStudentOnSubject,
  updateStudentOnSubjectAction,
} from "../../../../redux/actions/subjectActions";
import StudentForm from "./StudentForm";

const EditStudentOnSubject = ({
  student,
  getStudentOnSubject,
  updateStudentOnSubjectAction,
  match,
}) => {
  useEffect(() => {
    const { subjectId, studentId } = match.params;
    getStudentOnSubject(subjectId, studentId);
  }, []);

  const handleSubmit = (data) => {
    console.log("upad", data);
    const { subjectId, studentId } = match.params;
    updateStudentOnSubjectAction(subjectId, studentId, data);
  };

  if (!student) return null;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row align-items-center">
                <div className="col-lg-6 d-none d-lg-block bg-student-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Edit {student.Student}!
                      </h1>
                    </div>
                    <hr />
                    <StudentForm
                      onSubmit={handleSubmit}
                      initialValues={student.Remarks}
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
  student: state.student,
});

const mapDispatchToProps = {
  getStudentOnSubject,
  updateStudentOnSubjectAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStudentOnSubject);
