import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-black/80 p-4 border border-theme-600 max-w-lg rounded">
        <h2 className="text-2xl font-bold">
          <span className="text-brand">404</span> Not Found
        </h2>
        <p>The resource you are looking for is missing or it never existed</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
