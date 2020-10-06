import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStudentsOnSubject } from "../../../../redux/actions/subjectActions";
import { history } from "../../../../store";

const StudentsOnSubject = ({ getStudentsOnSubject, students, match }) => {
  useEffect(() => {
    getStudentsOnSubject(match.params.subjectId);
  }, []);
  if (!students || students.length === 0) return "No Students on this Subject!";

  return (
    <ul className="list-group list-group-flush">
      {students.map((item) => (
        <li
          key={item.userid}
          onClick={() => {
            history.push(
              `/subject/${match.params.subjectId}/edit-student/${item.idstudent}`
            );
          }}
          style={{ borderBottom: "2px solid #33FFF0" }}
          className="cursor-pointer list-group-item"
        >
          <div className="row">
            <div className="col-md-6">
              <h3>
                {item.name} {item.surname}
              </h3>
              <span>{item.address}</span>
              <br />
              <span>{item.phonenumber}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  students: state.students,
});

const mapDispatchToProps = {
  getStudentsOnSubject,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsOnSubject);
