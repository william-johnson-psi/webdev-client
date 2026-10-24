"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaCircleQuestion, FaRegEnvelope, FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Dashboard", path: "/dashboard", id: "wd-dashboard-link", icon: AiOutlineDashboard, match: (p: string) => p.startsWith("/dashboard") },
  { label: "Courses", path: "/dashboard", id: "wd-course-link", icon: LiaBookSolid, match: (p: string) => p.startsWith("/courses") },
  { label: "Calendar", path: "/calendar", id: "wd-calendar-link", icon: IoCalendarOutline, match: (p: string) => p.startsWith("/calendar") },
  { label: "Inbox", path: "/inbox", id: "wd-inbox-link", icon: FaRegEnvelope, match: (p: string) => p.startsWith("/inbox") },
  { label: "Labs", path: "/labs", id: "wd-labs-link", icon: LiaCogSolid, match: (p: string) => p.startsWith("/labs") },
  { label: "History", path: "/history", id: "wd-history-link", icon: IoCalendarOutline, match: (p: string) => p.startsWith("/history") },
] as const;

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/NEU.jpg"
          width={75}
          height={75}
          alt="Northeastern University"
          className="mx-auto"
        />
      </a>
      <Link
        href="/account"
        id="wd-account-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaRegCircleUser className="inline-block text-3xl text-white" />
        <br />
        Account
      </Link>
      {LINKS.map((link) => {
        const active = link.match(pathname);
        const Icon = link.icon;
        return (
          <Link
            key={link.id}
            href={link.path}
            id={link.id}
            className={`block py-3 text-center text-sm no-underline ${
              active ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon className="inline-block text-3xl text-red-600" />
            <br />
            {link.label}
          </Link>
        );
      })}
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Help
      </Link>
    </nav>
  );
}