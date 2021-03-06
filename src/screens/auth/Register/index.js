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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row align-items-center">
                <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome!</h1>
                    </div>
                    <hr />
                    <RegisterForm onSubmit={handleSubmit} />
                    <div className="text-center">
                      <Link className="small" to="/login">
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
