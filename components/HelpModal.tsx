import { Suspense } from "react";
import Modal from "@/components/Modal";

export default function HelpModal() {
  return (
    <Suspense fallback={null}>
      <Modal>
        <div>Help Modal</div>
      </Modal>
    </Suspense>
  );
}
