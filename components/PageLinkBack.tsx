import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default function PageLinkBack({
  url,
  label,
}: {
  url: string;
  label: string;
}) {
  return (
    <div className="-mt-2 mb-2">
      <Link
        className="text-sm text-zinc-300 hover:text-white flex items-center gap-1"
        href={url}
      >
        <LuArrowLeft size={16} /> {label}
      </Link>
    </div>
  );
}
