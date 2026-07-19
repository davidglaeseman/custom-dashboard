import PageCard from "@/components/PageCard";
import { getUserAuth } from "@/app/actions";
import LoggedInWelcome from "@/components/LoggedInWelcome";
import LoggedOutSplash from "@/components/LoggedOutSplash";

export default async function HomePage() {
  const user = await getUserAuth();

  return (
    <PageCard>
      {user?.email ? <LoggedInWelcome user={user} /> : <LoggedOutSplash />}
    </PageCard>
  );
}
