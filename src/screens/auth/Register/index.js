import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import RegisterForm from "./RegisterForm";
import { createStudentAction } from "../../../redux/actions/studentActions";

const Register = ({ createStudentAction }) => {
  const handleSubmit = (data) => {
    createStudentAction(data);
  };
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row align-items-center">
                <div class="col-lg-6 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome!</h1>
                    </div>
                    <hr />
                    <RegisterForm onSubmit={handleSubmit} />
                    <div class="text-center">
                      <Link class="small" to="/login">
                        Already have account? Login!
                      </Link>
                    </div>
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
  createStudentAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
