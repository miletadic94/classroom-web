import React, { Fragment } from "react";
import { connect } from "react-redux";

import UserProfileForm from "./UserProfileForm";
import { updateStudentAction } from "../../redux/actions/studentActions";
import { updateProfesorAction } from "../../redux/actions/professorActions";
import { getRoleId, isStudent } from "../../services/localStorageService";

const UserProfile = ({
  initialValues,
  updateStudentAction,
  updateProfesorAction,
}) => {
  const handleSubmit = (data) => {
    const userId = getRoleId();
    const studentRole = isStudent();
    if (studentRole) {
      updateStudentAction(userId, data);
    } else {
      updateProfesorAction(userId, data);
    }
  };
  if (!initialValues) return null;

  const studentRole = isStudent();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row align-items-center">
                <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Welcome, {initialValues.name} {initialValues.surname}
                      </h1>
                      {!studentRole && (
                        <Fragment>
                          <span>{initialValues.professortitle}</span>
                          <hr />
                          <span>{initialValues.faculty}</span>
                        </Fragment>
                      )}
                    </div>
                    <hr />
                    <UserProfileForm
                      initialValues={initialValues}
                      onSubmit={handleSubmit}
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
  initialValues: state.currentUser,
});

const mapDispatchToProps = {
  updateStudentAction,
  updateProfesorAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
