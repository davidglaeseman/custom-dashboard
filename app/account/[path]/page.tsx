export const dynamicParams = false;
export function generateStaticParams() {
  return ["security", "profile"].map((path) => ({ path }));
}
export default async function AccountPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  return <div>{path}</div>;
}
