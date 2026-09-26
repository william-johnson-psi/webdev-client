export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h3>Student Information</h3>
      <label htmlFor="wd-your-firstname">First Name:</label>
      <input type="text" placeholder="William" id="wd-your-firstname" />
      <br />
      <label htmlFor="wd-your-lastname">Last Name:</label>
      <input type="text" placeholder="Johnson" id="wd-your-lastname" />
      <br />
      <label htmlFor="wd-your-username">Username:</label>
      <input type="text" placeholder="wjohnson" id="wd-your-username" />
      <br />
      <label htmlFor="wd-your-password">Password:</label>
      <input type="password" placeholder="secretpassword123" id="wd-your-password" />
      <br />

      <h3>Student Biography</h3>
      <label htmlFor="wd-your-bio">Why are you taking this course?</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={50}
        rows={10}
        placeholder="Learn more about ReactJS, and expand deeper into web dev frameworks!."
      />
      <br />

      <h5 id="wd-your-class-standing-label">Class Standing:</h5>
      <input type="radio" name="wd-your-class-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="wd-your-class-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="wd-your-class-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="wd-your-class-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input type="radio" name="wd-your-class-standing" id="wd-your-graduate" defaultChecked/>
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />

      <h5 id="wd-your-enrollment-label">Enrollment Status:</h5>
      <input type="radio" name="wd-your-enrollment" id="wd-your-fulltime" defaultChecked />
      <label htmlFor="wd-your-fulltime">Full Time</label>
      <br />
      <input type="radio" name="wd-your-enrollment" id="wd-your-parttime" />
      <label htmlFor="wd-your-parttime">Part Time</label>
      <br />

      <h5 id="wd-your-interests-label">Interests:</h5>
      <input type="checkbox" name="wd-your-interests" id="wd-your-interest-web" defaultChecked />
      <label htmlFor="wd-your-interest-web">Web Development</label>
      <br />
      <input type="checkbox" name="wd-your-interests" id="wd-your-interest-ai" />
      <label htmlFor="wd-your-interest-ai">Artificial Intelligence</label>
      <br />
      <input type="checkbox" name="wd-your-interests" id="wd-your-interest-security" />
      <label htmlFor="wd-your-interest-security">Cyber Security</label>
      <br />
      <input type="checkbox" name="wd-your-interests" id="wd-your-interest-databases" />
      <label htmlFor="wd-your-interest-databases">Databases</label>
      <br />

      <h5 id="wd-your-academics-label">Academic Information</h5>
      <label htmlFor="wd-your-college">Current College:</label>
      <br />
      <select id="wd-your-college" defaultValue="NEU">
        <option value="NEU">Northeastern University</option>
        <option value="EC">Endicott College</option>
        <option value="UC">Union College</option>
        <option value="UML">UMass Lowell</option>
        <option value="URI">University of Rhode Island</option>
      </select>
      <br />
      <label htmlFor="wd-your-majors">Current Majors:</label>
      <br />
      <select multiple id="wd-your-majors" defaultValue={["CS", "BA"]}>
        <option value="CS">Computer Science</option>
        <option value="BIO">Biology</option>
        <option value="CE">Computer Engineering</option>
        <option value="MB">Marine Biology</option>
        <option value="BA">Business Administration</option>
      </select>
      <br />

      <label htmlFor="wd-your-email">Email:</label>
      <input type="email" placeholder="johnson.william@northeastern.edu" id="wd-your-email" />
      <br />
      <label htmlFor="wd-your-gradyear">Graduation Year:</label>
      <input type="number" defaultValue="2028" min="2026" max="2034" id="wd-your-gradyear" />
      <br />
      <label htmlFor="wd-your-birthday">Birthday:</label>
      <input
        type="date"
        defaultValue="2003-11-07"
        min="1900-01-01"
        max="2026-09-24"
        id="wd-your-birthday"
      />
      <br />
      <label htmlFor="wd-your-excitement">Course Excitement (0-10):</label>
      <input type="range" defaultValue="10" min="0" max="10" id="wd-your-excitement" />
      <br />

      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
