"use client";
import { AuthUser } from "@/app/actions";
import Link from "next/link";
import UserDropdown from "@/components/UserDropdown";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

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

export default function TheHeader({ user }: { user: AuthUser }) {
  const isLoggedIn = !!user?.email;
  return (
    <header className="h-[50px] z-30 fixed top-0 left-0 w-full pl-2 md:pl-52 flex gap-2 px-2 items-center">
      <div className="grow flex items-center gap-2">
        <div className="block md:hidden">
          <Logo />
        </div>
        <div>search</div>
      </div>
      {isLoggedIn ? <UserDropdown user={user} /> : <NotLoggedInButtons />}
    </header>
  );
}
