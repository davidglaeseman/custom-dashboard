import { AuthView } from "@neondatabase/auth-ui";
import "@/css/auth.css";
export const dynamicParams = false;
export default async function AuthPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  return (
    <div className="flex   items-center justify-center  mx-auto pt-0  md:pt-6 ">
      <div className="ai-box auth-container w-[300px] md:w-[400px]">
        <AuthView path={path} />
      </div>
    </div>
  );
}
