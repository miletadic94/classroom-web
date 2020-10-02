import React, { useState } from "react";

const NoteSection = ({ data }) => {
  const [open, setOpen] = useState(false);

  if (!data) return null;

  return (
    <div>
      <ul onClick={() => setOpen(!open)} class="list-group">
        <li class="cursor-pointer list-group-item d-flex justify-content-between align-items-center bg-blue">
          Notes
          <span class="badge badge-primary badge-pill">{data.length}</span>
        </li>
        <ul class="list-group list-group-flush">
          {open &&
            data.length > 0 &&
            data.map((item) => (
              <div class="card">
                <div class="card-body">{item.text}</div>
              </div>
            ))}
        </ul>
      </ul>
    </div>
  );
};

export default NoteSection;
