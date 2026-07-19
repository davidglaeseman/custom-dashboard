import { COMPANY_NAME } from "@/lib/Globals";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="font-bold p-2 block">
      {COMPANY_NAME}
    </Link>
  );
}
