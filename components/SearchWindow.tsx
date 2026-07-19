"use client";
import { LuSearch } from "react-icons/lu";
import Modal from "@/components/Modal";
import ModalTrigger from "@/components/ModalTrigger";
import { useRouter } from "next/navigation";
import { useEventListener } from "@siberiacancode/reactuse";

export default function SearchWindow() {
  const router = useRouter();

  useEventListener("keydown", (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault();
      router.push("?modal=search-window");
    }
  });

  return (
    <>
      <ModalTrigger name="search-window">
        <button className="flex items-center justify-center gap-2 bg-theme-700 hover:bg-theme-600  px-2  py-2 md:py-0.5 cursor-pointer text-sm rounded-full">
          <LuSearch />
          <div className="hidden md:flex">search</div>
        </button>
      </ModalTrigger>
      <Modal name="search-window">
        <div className="w-[300px] md:w-[600px]">
          <div>Search Window</div>
        </div>
      </Modal>
    </>
  );
}
