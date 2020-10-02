import React from "react";
import { connect } from "react-redux";

import UserProfileForm from "./UserProfileForm";
import { updateStudentAction } from "../../redux/actions/studentActions";
import { getRoleId } from "../../services/localStorageService";

const UserProfile = ({ initialValues, updateStudentAction }) => {
  const handleSubmit = (data) => {
    const userId = getRoleId();
    updateStudentAction(userId, data);
  };
  if (!initialValues) return null;
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row align-items-center">
                <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">
                        Welcome, {initialValues.name} {initialValues.surname}
                      </h1>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
