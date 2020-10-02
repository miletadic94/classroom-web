import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSubjectAction } from "../../redux/actions/subjectActions";
import { history } from "../../store";
import NoteBookSection from "./NoteBookSection";
import NoteSection from "./NoteSection";

const SingleSubject = ({ getSubjectAction, subject, match }) => {
  useEffect(() => {
    getSubjectAction(match.params.id);
  }, []);

  if (!subject) return "We Couldn't Find any Projects!";

  return (
    <div class="card text-center">
      <div class="card-header">prof. {subject.Professor}</div>
      <div class="card-body">
        <h5 class="card-title">{subject?.Subject?.subjectname}</h5>
        <p class="card-text">{subject?.Subject?.description}</p>
      </div>
      <NoteBookSection title="Books" data={subject?.Book} />
      <NoteBookSection title="Notebooks" data={subject?.Notebooks} />
      <NoteSection data={subject?.Notes} />
      <div class="card-footer text-muted">
        <button class="btn btn-primary mr-3">Enroll</button>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSubject);
