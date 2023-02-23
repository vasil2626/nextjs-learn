import NavBar from "../nav";
import Footer from "../footer";
import Head from "next/head";

const MAinLAyout = ({ children, footerData = {} }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="content" />
      </Head>
      <div className="main_layout">
        <NavBar />
        {children}
        <Footer data={footerData} />
      </div>
    </>
  );
};

export default MAinLAyout;
