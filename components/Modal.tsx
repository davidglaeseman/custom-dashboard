"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import TheButton from "@/components/TheButton";
import { LuX } from "react-icons/lu";
import { useKeyPress } from "@siberiacancode/reactuse";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPortalRoot(document.getElementById("portalRoot"));
  }, []);

  const closeModal = useCallback(() => router.push("?"), [router]);
  const modalName = searchParams.get("modal");
  const isOpen = modalName !== null;
  useKeyPress("Escape", (pressed) => {
    if (pressed) closeModal();
  });

  if (isOpen && portalRoot) {
    return createPortal(
      <div
        onClick={closeModal}
        className="bg-theme-900/90 fixed left-0 top-0 w-full h-full flex items-center justify-center z-50"
      >
        <TheButton
          onClick={closeModal}
          className="absolute right-2 top-2 p-2 cursor-pointer bg-theme-700 hover:bg-theme-600 rounded"
        >
          <LuX />
        </TheButton>
        <div
          className="bg-theme-700 p-4 rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>,
      portalRoot,
    );
  }

  return null;
}
