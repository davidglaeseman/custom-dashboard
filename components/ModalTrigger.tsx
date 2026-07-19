"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function ModalTrigger({
  children,
    name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const router = useRouter();
  const openModal = useCallback(
    () => router.push(`?modal=${name}`),
    [router, name],
  );

  return <div onClick={openModal}>{children}</div>;
}
