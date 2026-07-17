import PageCard from "@/components/PageCard";
import PageLinkBack from "@/components/PageLinkBack";

export default async function TaskPageId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log({ id });

  return (
    <PageCard>
      <h1>Task #{id}</h1>
      <PageLinkBack url="/tasks" label="Tasks" />
      <div>task info</div>
    </PageCard>
  );
}
