import "@/styles/globals.css";
import "../styles/navbar/navbar.css";
import "../styles/heading/heading.css";
import "../styles/header/header.css";
import "../styles/subTitle/subTitle.css";
import "../styles/button/button.css";
import "../styles/features/features.css";
import "../styles/solution/solution.css";
import "../styles/stepCards/stepCards.css";
import "../styles/bottomCards/bottomCards.css";
import "../styles/cards/cards.css";
import "../styles/footer/footer.css";
import MAinLAyout from "@/components/layouts/MainLayout";
import { getFooterInfo } from "@/services/getFooterData";

export default function App({ Component, pageProps, data }) {
  return (
    <MAinLAyout footerData={data}>
      <Component {...pageProps} />
    </MAinLAyout>
  );
}

App.getInitialProps = async () => {
  const response = await getFooterInfo();
  const data = await response.json();
  return { data };
};
