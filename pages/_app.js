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
import getFooterInfo from "./api/get_footer_info";

export default function App({ Component, pageProps }) {
  return (
    <MAinLAyout>
      {/* <MAinLAyout footerData={pageProps}> */}
      <Component {...pageProps} />
    </MAinLAyout>
  );
}

// export async function getStaticProps(ctx) {
//   const res = await getFooterInfo();
//   const data = await res.json();
//   return { props: { data } };
// }
