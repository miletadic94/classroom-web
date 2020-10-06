import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSubjectAction } from "../../redux/actions/subjectActions";
import { enrollStudentAction } from "../../redux/actions/studentActions";
import { history } from "../../store";
import NoteBookSection from "./NoteBookSection";
import NoteSection from "./NoteSection";
import { isStudent } from "../../services/localStorageService";
import { Link } from "react-router-dom";

const SingleSubject = ({
  getSubjectAction,
  enrollStudentAction,
  subject,
  match,
}) => {
  useEffect(() => {
    getSubjectAction(match.params.id);
  }, []);

  if (!subject) return "We Couldn't Find any Subjects!";

  const studentRole = isStudent();

  return (
    <div className="card text-center">
      <div className="card-header">
        prof. {subject.Professor}
        {!studentRole && (
          <span
            onClick={() => history.push(`/subject/edit/${match.params.id}`)}
            className="cursor-pointer float-right"
          >
            <i className="fas fa-edit"></i>
          </span>
        )}
      </div>
      <div className="card-body">
        <h2 className="card-title">{subject?.Subject?.subjectname}</h2>
        <p className="card-text">{subject?.Subject?.description}</p>
      </div>
      <NoteBookSection title="Books" data={subject?.Book} />
      <NoteBookSection title="Notebooks" data={subject?.Notebooks} />
      <NoteSection data={subject?.Notes} />
      <hr />
      {!studentRole && (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to={`/subject/${match.params.id}/add-book`}>
              <i className="fas fa-plus mr-2" /> Add Book
            </Link>
          </li>
          <li className="list-group-item">
            <Link to={`/subject/${match.params.id}/add-notebook`}>
              <i className="fas fa-plus  mr-2" /> Add Notebook
            </Link>
          </li>
          <li className="list-group-item">
            <Link to={`/subject/${match.params.id}/add-note`}>
              <i className="fas fa-plus" /> Add Note
            </Link>
          </li>
        </ul>
      )}
      <div className="card-footer text-muted">
        {studentRole ? (
          <button
            disabled={subject?.IsEnrolled}
            onClick={() => enrollStudentAction(match.params.id)}
            className={`btn btn-${
              !subject?.IsEnrolled ? "primary" : "disabled"
            } mr-3`}
          >
            Enroll
          </button>
        ) : (
          <button
            onClick={() => history.push(`/subject/${match.params.id}/students`)}
            className="btn btn-primary mr-3"
          >
            See Students
          </button>
        )}
        <button onClick={() => history.push("/")} className="btn btn-secondary">
          Go Back
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  subject: state.subject,
});

const mapDispatchToProps = {
  getSubjectAction,
  enrollStudentAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSubject);
