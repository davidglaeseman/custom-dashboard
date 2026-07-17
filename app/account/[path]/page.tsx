import PageCard from "@/components/PageCard";
import { notFound } from "next/navigation";
import PageLinkBack from "@/components/PageLinkBack";

const validRoutes = ["security", "profile"];

export const dynamicParams = true;
export function generateStaticParams() {
  return ["security", "profile"].map((path) => ({ path }));
}
export default async function AccountPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  if (!validRoutes.includes(path)) {
    notFound();
  }
  return (
    <PageCard>
      <h1>{path}</h1>
      <PageLinkBack url="/account" label="Account" />
      <div>data</div>
    </PageCard>
  );
}
