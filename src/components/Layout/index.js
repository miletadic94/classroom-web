import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserAction } from "../../redux/actions/currentUserActions";
import { logoutAction } from "../../redux/actions/authActions";

const Layout = ({ getCurrentUserAction, currentUser, logoutAction }) => {
  useEffect(() => {
    getCurrentUserAction();
  }, []);

  if (!currentUser) return null;
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">
        ClassRoom
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/my-subjects">
              My Subjects
            </Link>
          </li>
        </ul>
        <div className="position-relative mr-5">
          <span
            style={{ color: "white" }}
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {currentUser.name} {currentUser.surname}
          </span>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/user-profile" class="dropdown-item" href="#">
              My Profile
            </Link>
            <div class="dropdown-divider"></div>
            <span class="dropdown-item" onClick={logoutAction}>
              Logout
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = {
  getCurrentUserAction,
  logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
