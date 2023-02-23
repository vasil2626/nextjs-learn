import Header from "@/components/header";
import Features from "@/components/features";
import Solution from "@/components/solution";
import BottomCards from "@/components/bottomCards";
import { getSolutions } from "@/services/getSolution";
import { getUserData } from "@/services/getUserData";

export default function Home({ data, userData }) {
  return (
    <>
      <Header />
      <Features />
      <Solution data={data} />
      <BottomCards users={userData.cards} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await getSolutions();
  const data = await res.json();

  const userDataRes = await getUserData();
  const userData = await userDataRes.json();

  return {
    props: { data, userData },
  };
}
