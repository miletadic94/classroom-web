import React, { useState } from "react";
import { isStudent } from "../../../services/localStorageService";
import { history } from "../../../store";

const NoteSection = ({ data }) => {
  const [open, setOpen] = useState(false);

  if (!data) return null;
  const studentRole = isStudent();

  return (
    <div>
      <ul onClick={() => setOpen(!open)} className="list-group">
        <li className="cursor-pointer list-group-item d-flex justify-content-between align-items-center bg-blue">
          Notes
          <span className="badge badge-primary badge-pill">{data.length}</span>
        </li>
        <ul className="list-group list-group-flush">
          {open &&
            data.length > 0 &&
            data.map((item) => (
              <div className="card">
                <div className="card-body">{item.text}</div>
                {!studentRole && (
                  <i
                    className="cursor-pointer fas fa-edit mb-3"
                    onClick={() =>
                      history.push(
                        `/subject/${item.idsubject}/edit-note/${item.idnote}`
                      )
                    }
                  />
                )}
              </div>
            ))}
        </ul>
      </ul>
    </div>
  );
};

export default NoteSection;
