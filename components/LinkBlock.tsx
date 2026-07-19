"use client";
import Link from "next/link";
import type { LinkBlockType } from "@/lib/Globals";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function LinkBlock({ links }: { links: LinkBlockType[] }) {
  const pathname = usePathname();
  const pathNameBase = `/${pathname?.split("/")?.filter((v) => v)[0]}`;
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const hoverBlockSize = 36;
  const hoverBlockPosition = hoverIndex > 0 ? hoverIndex * hoverBlockSize : 0;

  return (
    <ul className="p-2 text-sm  | border-b border-theme-700 pb-2 mb-2">
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <Link
            className={`text-zinc-300 hover:bg-theme-800 rounded-md flex gap-2 items-center py-1 px-2 hover:text-white ${pathname === link.url ? "bg-theme-800 text-white" : ""} ${pathname.includes(link.url) && link.url !== "/" ? "ring ring-theme-700" : ""}`}
            href={link.url}
          >
            {link?.icon && (
              <span
                className={`p-0.5 flex items-center justify-center ${pathname.includes(link.url) && link.url !== "/" ? "text-brand-400" : ""}`}
              >
                {link.icon}
              </span>
            )}
            {link.label}
          </Link>
          {pathNameBase === link.url &&
            link?.children &&
            link?.children?.length > 0 && (
              <ul className="ml-4 mt-2  relative">
                {hoverIndex > -1 &&
                  link?.children &&
                  link?.children?.length > 1 && (
                    <span
                      style={{ top: `${hoverBlockPosition}px` }}
                      className="w-[2px] h-[36px] z-10 bg-theme-300 absolute left-0 top-0 transition-all"
                    />
                  )}
                {link.children.map((child, childIndex) => (
                  <li
                    className={` border-l-2 py-1 relative  ${pathname === child.url ? " border-brand-400" : "border-theme-600"}`}
                    key={childIndex}
                    onMouseEnter={() => setHoverIndex(childIndex)}
                    onMouseLeave={() => setHoverIndex(-1)}
                  >
                    {child.url === pathname && (
                      <span className="absolute left-[-2px] z-20 top-0 w-[2px] h-[36px] bg-brand" />
                    )}
                    <Link
                      className={`   block py-1 px-2  hover:text-white ${pathname === child.url ? " text-white " : "text-zinc-300 "}`}
                      href={child.url}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
        </li>
      ))}
    </ul>
  );
}
