import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSubjectsAction } from "../../redux/actions/subjectActions";

const MySubjects = ({ getSubjectsAction, subjects }) => {
  useEffect(() => {
    getSubjectsAction();
  }, []);

  if (!subjects) return "Something Went Terriblly Wrong!";

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
              role="button"
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

const mapDispatchToProps = {
  getSubjectsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MySubjects);
