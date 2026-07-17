"use client";
import { LuMenu } from "react-icons/lu";
import { useRef, useState } from "react";
import { leftLinks, LinkBlockType } from "@/lib/links";
import LinkBlock from "@/components/LinkBlock";
import { AuthUser } from "@/app/actions";
import Logo from "@/components/Logo";
import { LuBadgeHelp } from "react-icons/lu";
import TheButton from "@/components/TheButton";
import ModalTrigger from "@/components/ModalTrigger";
import HelpModal from "@/components/HelpModal";
import { useClickOutside } from "@siberiacancode/reactuse";

function filterLinksByAuth(
  links: LinkBlockType[],
  isLoggedIn: boolean,
): LinkBlockType[] {
  return links
    .filter((link) => !link.auth || isLoggedIn)
    .map((link) => {
      const filtered = { ...link };
      if (link.children) {
        const filteredChildren = filterLinksByAuth(link.children, isLoggedIn);
        if (filteredChildren.length > 0) {
          filtered.children = filteredChildren;
        } else {
          delete filtered.children;
        }
      }
      return filtered;
    });
}

export default function LeftNavigation({ user }: { user: AuthUser }) {
  const ref = useRef<HTMLDivElement>(null);
  const [leftNavOpen, setLeftNavOpen] = useState<boolean>(false);
  const isLoggedIn = !!user?.id;
  const filteredLeftLinks = leftLinks
    .map((links) => filterLinksByAuth(links, isLoggedIn))
    .filter((links) => links.length > 0);
  useClickOutside(ref, () => {
    setLeftNavOpen(false);
  });

  return (
    <div ref={ref}>
      <div
        className={`w-50 min-w-50 p-2 z-30 ${leftNavOpen ? "left-0" : "-left-50"} md:left-0 transition-all flex flex-col fixed  top-0 h-full bg-theme-900/90 backdrop-blur-xs border-r border-theme-700`}
      >
        <div className="grow">
          <div>
            <Logo />
          </div>
          {filteredLeftLinks?.map((links, index) => (
            <LinkBlock key={index} links={links} />
          ))}
        </div>
        <div className={`mb-12 md:mb-0 ${leftNavOpen ? "" : ""}`}>
          <ModalTrigger>
            <TheButton className="bg-theme-700 hover:bg-theme-600 cursor-pointer w-full flex items-center p-2 rounded-md gap-4">
              <LuBadgeHelp size={30} /> <span>Help</span>
            </TheButton>
          </ModalTrigger>
          <HelpModal />
        </div>
      </div>
      <button
        onClick={() => setLeftNavOpen((value) => !value)}
        className={`fixed ring-4 ring-black/50 md:hidden z-50 left-2 bottom-2 block cursor-pointer rounded p-2 bg-theme-600 ${leftNavOpen ? "text-white" : "text-zinc-300"}`}
      >
        <LuMenu size={25} />
      </button>
    </div>
  );
}
