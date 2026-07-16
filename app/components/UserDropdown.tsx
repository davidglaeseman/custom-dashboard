"use client";
import { useClickOutside, useDisclosure } from "@siberiacancode/reactuse";
import { AuthUser, signOutUser } from "@/app/actions";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import Link from "next/link";
const userLinks = [
  { label: "Account", url: "/account" },
  { label: "Profile", url: "/account/profile" },
  { label: "Security", url: "/account/security" },
];

export default function UserDropdown({ user }: { user: AuthUser }) {
  const dropdownMenu = useDisclosure();
  const ref = useClickOutside<HTMLDivElement>(() => dropdownMenu.close());
  return (
    <div ref={ref}>
      <button
        className={`flex items-center rounded px-2 gap-2 py-2 cursor-pointer ${dropdownMenu.opened ? "bg-theme-500" : "bg-theme-600"}`}
        onClick={() => dropdownMenu.toggle()}
      >
        <span>{user.name}</span>
        {dropdownMenu.opened ? <LuChevronDown /> : <LuChevronUp />}
      </button>
      <div
        className={`absolute border border-theme-500 right-[24px] p-4 top-[58px] text-sm rounded bg-theme-700 ${dropdownMenu.opened ? "block" : "hidden"}`}
      >
        <div>
          <div className="text-xl">{user.name}</div>
          <div className="text-xs text-zinc-300">{user.email}</div>
        </div>
        <div className="border-b border-theme-400  my-2" />
        <ul>
          {userLinks.map((link) => (
            <li key={link.url}>
              <Link
                className="block p-2 hover:bg-theme-600 rounded"
                href={link.url}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <div className="border-b border-theme-400  my-2" />
          <li>
            <button
              className="block p-2 hover:bg-theme-600 rounded w-full text-left cursor-pointer"
              onClick={() => signOutUser()}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
