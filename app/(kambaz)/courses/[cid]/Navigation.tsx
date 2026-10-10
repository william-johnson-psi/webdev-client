"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

const links = [
  { label: "Home", path: "home" },
  { label: "Modules", path: "modules" },
  { label: "Piazza", path: "piazza" },
  { label: "Zoom", path: "zoom" },
  { label: "Assignments", path: "assignments" },
  { label: "Quizzes", path: "quizzes" },
  { label: "Grades", path: "grades" },
  { label: "People", path: "people" },
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {links.map(({ label, path }) => {
        const href = `/courses/${cid}/${path}`;
        const isActive = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={path}
            href={href}
            id={`wd-course-${path}-link`}
            className={isActive ? "list-group-item active" : "list-group-item"}
          >
            {label}
          </Link>
        );
      })}
      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
