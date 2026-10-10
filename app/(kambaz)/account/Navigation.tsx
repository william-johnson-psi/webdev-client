"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";

const links = [
  { label: "Signin", path: "signin" },
  { label: "Signup", path: "signup" },
  { label: "Profile", path: "profile" },
];

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map(({ label, path }) => {
        const href = `/account/${path}`;
        const isActive = pathname === href;
        return (
          <Link
            key={path}
            href={href}
            id={`wd-account-${path}-link`}
            className={isActive ? "list-group-item active" : "list-group-item"}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
