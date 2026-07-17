import PageCard from "@/components/PageCard";
import { getUserAuth } from "@/app/actions";
import { COMPANY_NAME } from "@/lib/links";

export default async function HomePage() {
  const user = await getUserAuth();

  return (
    <PageCard>
      {user?.email ? (
        <>
          <h1>Welcome, {user.name}</h1>
          <div>home page dashboard</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
        </>
      ) : (
        <div>
          <h1>{COMPANY_NAME}</h1>
          <div className="border border-theme-600 bg-theme-900 p-2 rounded-md ">
            splash screen
          </div>
        </div>
      )}
    </PageCard>
  );
}
