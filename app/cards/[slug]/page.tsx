import PageCard from "@/components/PageCard";
import { notFound } from "next/navigation";
import PageLinkBack from "@/components/PageLinkBack";
const validRoutes = ["credit", "debit"];
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
      <PageLinkBack url="/cards" label="Cards" />
      <div>data</div>
    </PageCard>
  );
}
