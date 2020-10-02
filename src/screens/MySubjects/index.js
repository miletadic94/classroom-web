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
        <div class="jumbotron">
          <h1 class="display-4">{subject.subjectname}</h1>
          <p class="lead">{subject.description}</p>
          <hr class="my-4" />
          <p class="lead">
            <Link
              class="btn btn-primary btn-lg"
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
