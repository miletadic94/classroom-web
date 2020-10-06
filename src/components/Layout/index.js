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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        ClassRoom
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-subjects">
              My Subjects
            </Link>
          </li>
        </ul>
        <div className="position-relative mr-5">
          <span
            style={{ color: "white" }}
            className="cursor-pointer nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {currentUser.name} {currentUser.surname}
          </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/user-profile" className="dropdown-item" href="#">
              My Profile
            </Link>
            <div className="dropdown-divider"></div>
            <span className="dropdown-item" onClick={logoutAction}>
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
