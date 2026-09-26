import AssignmentItem from "./AssignmentItem";
export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      {/* search input, + Group, + Assignment */}
      <input id="wd-search-assignment" type="search" placeholder="Search for Assignments" />
      <button id="wd-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      {/* h3 wd-assignments-title */}
      <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total<button>+</button></h3>
      <ul id="wd-assignment-list">
        {/* at least three AssignmentItems using cid */}
        <li className="wd-assignment-list-item">
            <AssignmentItem 
              cid={cid}
              aid="1"
              title="A1 ENV + HTML"
              details="Multiple Modules | Not Available until May 6 at 12:00am | Due May 13 at 11:59 PM | 100 pts"
            />
        </li>
        <li className="wd-assignment-list-item">
            <AssignmentItem 
              cid={cid}
              aid="2"
              title="A2 CSS + TAILWIND"
              details="Multiple Modules | Not Available until May 13 at 12:00 AM | Due May 20 at 11:59pm | 100 pts"
            />
        </li>
        <li className="wd-assignment-list-item">
            <AssignmentItem 
              cid={cid}
              aid="3"
              title="A3 JS + REACT"
              details="Multiple Modules | Not Available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts"
            />
        </li>
      </ul>
    </div>
  );
}