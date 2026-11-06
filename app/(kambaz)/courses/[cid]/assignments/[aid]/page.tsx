"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useAssignmentsStore } from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const existing = assignments.find(
    (a) => a._id === aid && a.course === cid,
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const [title, setTitle] = useState(existing?.title ?? "");
  const [description, setDescription] = useState(existing?.description ?? "");
  const [points, setPoints] = useState(existing?.points ?? 100);
  const [due, setDue] = useState(existing?.due ?? "");
  const [available, setAvailable] = useState(existing?.available ?? "");
  const [availableUntil, setAvailableUntil] = useState(
    existing?.availableUntil ?? "",
  );

  const save = () => {
    const fields = {
      title,
      course: String(cid),
      description,
      points,
      due,
      available,
      availableUntil,
    };
    if (existing) {
      updateAssignment({ ...existing, ...fields });
    } else {
      addAssignment(fields);
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p id="wd-assignment-id">Assignment id: {aid}</p>
      <textarea
        id="wd-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={8}
        className="w-full"
      /> <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                value={due}
                onChange={(e) => setDue(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                value={available}
                onChange={(e) => setAvailable(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available until</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-until"
                value={availableUntil}
                onChange={(e) => setAvailableUntil(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
        Cancel
      </Link>{" "}
      <button type="button" onClick={save} id="wd-save">
        Save
      </button>
    </div>
  );
}
