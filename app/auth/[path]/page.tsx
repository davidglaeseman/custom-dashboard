import { AuthView } from "@neondatabase/auth-ui";
import "@/app/css/auth.css";
export const dynamicParams = false;
export default async function AuthPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  return (
    <div className="flex items-center justify-center h-full mx-auto | auth-container">
      <AuthView path={path} />
    </div>
  );
}
