import Header from "@/components/header";
import Features from "@/components/features";
import Solution from "@/components/solution";
import BottomCards from "@/components/bottomCards";
import { getSolutions } from "@/services/getSolution";
import { getUserData } from "@/services/getUserData";
import { getFooterInfo } from "@/services/getFooterData";
import MAinLAyout from "@/components/layouts/MainLayout";

export default function Home({ data, userData, footerData }) {
  return (
    <MAinLAyout footerData={footerData}>
      <Header />
      <Features />
      <Solution data={data} />
      <BottomCards users={userData.cards} />
    </MAinLAyout>
  );
}

export async function getServerSideProps() {
  const res = await getSolutions();
  const data = await res.json();

  const userDataRes = await getUserData();
  const userData = await userDataRes.json();

  const footerRes = await getFooterInfo();
  const footerData = await footerRes.json();

  return {
    props: { data, userData, footerData },
  };
}
