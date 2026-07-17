"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function ModalTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const openModal = useCallback(
    () => router.push("?modal=auth-login"),
    [router],
  );

  return <div onClick={openModal}>{children}</div>;
}
