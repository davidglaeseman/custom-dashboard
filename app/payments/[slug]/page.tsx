import PageCard from "@/components/PageCard";
import { notFound } from "next/navigation";
import PageLinkBack from "@/components/PageLinkBack";
const validRoutes = [
  "bill-pay",
  "recipients",
  "taxes",
  "wire-withdraws",
  "ach-authorizations",
];
export default async function TaskPageId({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  if (!validRoutes.includes((await params).slug)) {
    notFound();
  }
  const { slug } = await params;
  return (
    <PageCard>
      <h1>{slug}</h1>
      <PageLinkBack url="/payments" label="Payments" />
      <div>data</div>
    </PageCard>
  );
}
