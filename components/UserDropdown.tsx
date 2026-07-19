"use client";
import { useClickOutside } from "@siberiacancode/reactuse";
import { AuthUser, signOutUser } from "@/app/actions";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
const userLinks = [
  { label: "Account", url: "/account" },
  { label: "Profile", url: "/account/profile" },
  { label: "Security", url: "/account/security" },
];

export default function UserDropdown({ user }: { user: AuthUser }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    if (open) {
      setOpen(() => false);
    }
  });
  const toggleDropdown = () => {
    setOpen((value) => !value);
  };
  return (
    <div ref={ref}>
      <button
        className={`flex items-center rounded px-2 gap-2 py-2 cursor-pointer ${open ? "bg-theme-700" : "bg-theme-700/50"}`}
        onClick={toggleDropdown}
      >
        <span>{user.name}</span>
        <span className="pointer-events-none">
          {open ? <LuChevronDown /> : <LuChevronUp />}
        </span>
      </button>
      <div
        className={`absolute border border-theme-500 right-[24px] ring-2 ring-black/20 p-2 top-[58px] text-sm rounded bg-theme-700 ${open ? "block" : "hidden"}`}
      >
        <div>
          <div className="text-xl">{user.name}</div>
          <div className="text-xs text-zinc-300">{user.email}</div>
        </div>
        <div className="border-b border-theme-400  my-2" />
        <ul>
          {userLinks.map((link) => (
            <li className="mb-1" key={link.url}>
              <Link
                className={`block p-1 hover:bg-theme-600 rounded ${pathname === link.url ? "bg-theme-600" : ""}`}
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
