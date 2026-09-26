import Link from "next/link";
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          {/* Complete on your own — see checklist below */}
          <label htmlFor="wd-group">Assignment Group</label>
          <select id="wd-group" defaultValue="ASSIGN">
            <option value="ASSIGN">ASSIGNMENTS</option>
            <option value="QUIZ">QUIZZES</option>
            <option value="EXAM">EXAMS</option>
            <option value="PROJ">PROJECT</option>
          </select>

          <br />

          <label htmlFor="wd-display-grade-as">Display Grade as</label>
          <select id="wd-display-grade-as" defaultValue="PERC">
            <option value="PERC">PERCENTAGE</option>
            <option value="POINT">POINTS</option>
          </select>

          <br />
          <label htmlFor="wd-submission-type">Submission Type</label>
          <select id="wd-submission-type" defaultValue="ONL">
            <option value="ONL">ONLINE</option>
            <option value="PHYS">PHYSICAL</option>
          </select>
          <br/>
          <input type="checkbox" name="check-sub-type" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
          <br/>
          <input type="checkbox" name="check-sub-type" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
          <br/>
          <input type="checkbox" name="check-sub-type" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
          <br/>
          <input type="checkbox" name="check-sub-type" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
          <br/>
          <input type="checkbox" name="check-sub-type" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>
          <br />
          <div>
            <label htmlFor="wd-assign-to">Assign to</label>
            <select id="wd-assign-to" defaultValue="ALL">
              <option value="ALL">EVERYONE</option>
              <option value="STUD">STUDENT</option>
              <option value="PRIV">PRIVATE</option>
            </select>
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <input type="date" placeholder="2026-09-27" id="wd-due-date"/>
            <br />
            <label htmlFor="wd-available-from">Available from</label>
            <input type="date" placeholder="2026-09-13" id="wd-available-from" />
            <label htmlFor="wd-available-until">Until</label>
            <input type="date" placeholder="2026-09-26" />
          </div>
          <br />
          <Link href="../assignments" id="wd-cancel">Cancel</Link>
          <Link href="../assignments" id="wd-save">Save</Link>
        </tbody>
      </table>
    </div>
  );
}