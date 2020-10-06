import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Subjects = ({ subjects }) => {
  if (!subjects || subjects.length === 0) return "No Subjects Was Found!";

  return (
    <Fragment>
      {subjects.map((subject) => (
        <div className="jumbotron">
          <h1 className="display-4">{subject.subjectname}</h1>
          <p className="lead">{subject.description}</p>
          <hr className="my-4" />
          <p className="lead">
            <Link
              className="btn btn-primary btn-lg"
              to={`/subject/${subject.idsubject}`}
            >
              Learn more
            </Link>
          </p>
        </div>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  subjects: state.subjects,
});

export default connect(mapStateToProps, null)(Subjects);
