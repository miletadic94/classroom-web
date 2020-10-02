import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSubjectAction } from "../../redux/actions/subjectActions";
import { enrollStudentAction } from "../../redux/actions/studentActions";
import { history } from "../../store";
import NoteBookSection from "./NoteBookSection";
import NoteSection from "./NoteSection";

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

  return (
    <div class="card text-center">
      <div class="card-header">prof. {subject.Professor}</div>
      <div class="card-body">
        <h2 class="card-title">{subject?.Subject?.subjectname}</h2>
        <p class="card-text">{subject?.Subject?.description}</p>
      </div>
      <NoteBookSection title="Books" data={subject?.Book} />
      <NoteBookSection title="Notebooks" data={subject?.Notebooks} />
      <NoteSection data={subject?.Notes} />
      <div class="card-footer text-muted">
        <button
          disabled={subject?.IsEnrolled}
          onClick={() => enrollStudentAction(match.params.id)}
          class={`btn btn-${
            !subject?.IsEnrolled ? "primary" : "disabled"
          } mr-3`}
        >
          Enroll
        </button>
        <button onClick={() => history.push("/")} class="btn btn-secondary">
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
