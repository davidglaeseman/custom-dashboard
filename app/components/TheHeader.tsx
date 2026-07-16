"use client";
import { AuthUser } from "@/app/actions";
import Link from "next/link";
import UserDropdown from "@/app/components/UserDropdown";
import { COMPANY_NAME } from "@/app/lib";
import { usePathname } from "next/navigation";

const NotLoggedInButtons = () => {
  const pathname = usePathname();
  const links = [
    { label: "Sign In", url: "/auth/sign-in" },
    { label: "Sign Up", url: "/auth/sign-up" },
  ].map((link) => ({
    ...link,
    active: link.url === pathname,
  }));

  return (
    <ul className="flex gap-2">
      {links.map((link) => (
        <li key={link.url}>
          <Link
            className={` block py-1 px-2 rounded ${link.active ? "bg-brand" : "bg-theme-500 hover:bg-theme-600"}`}
            href={link.url}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default function TheHeader({ user }: { user: AuthUser | false }) {
  return (
    <header className="h-[50px] bg-theme-700 z-30 fixed top-0 left-0 w-full flex gap-2 px-2 items-center">
      <div className="grow">
        <Link className="font-bold p-2" href="/">
          {COMPANY_NAME}
        </Link>
      </div>
      {user ? <UserDropdown user={user} /> : <NotLoggedInButtons />}
    </header>
  );
}
