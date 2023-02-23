const { default: Head } = require("next/head");
const { default: NavBar } = require("../nav");

const SignInLAyout = ({ children }) => {
  return (
    <div className="sign-in-layout">
      <Head>
        <title>Sign in</title>
        <meta name="description" content="content" />
      </Head>
      <NavBar />
      {children}
    </div>
  );
};

export default SignInLAyout;
