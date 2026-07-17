import PageCard from "@/components/PageCard";
import { notFound } from "next/navigation";
const validRoutes = ["checking", "joint-checking", "savings"];
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
      <div>data</div>
    </PageCard>
  );
}
