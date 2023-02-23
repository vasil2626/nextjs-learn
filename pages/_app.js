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
import "../styles/signButtons/googleSign.css";
import "../styles/slug/slug.css";
import "../styles/signIn/signIn.css";

export default function App({ Component, pageProps, data }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
