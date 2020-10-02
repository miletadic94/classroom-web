import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Subjects = ({ subjects }) => {
  if (!subjects || subjects.length === 0) return "No Subjects Was Found!";

  return (
    <Fragment>
      {subjects.map((subject) => (
        <div class="jumbotron">
          <h1 class="display-4">{subject.subjectname}</h1>
          <p class="lead">{subject.description}</p>
          <hr class="my-4" />
          <p class="lead">
            <Link
              class="btn btn-primary btn-lg"
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
