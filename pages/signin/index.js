import SignInLAyout from "@/components/layouts/SignInLAyout";
import SignInComponent from "@/components/signIn";

const SignIn = () => {
  return (
    <SignInLAyout>
      <SignInComponent />
    </SignInLAyout>
  );
};

SignIn.getLayout = function (page) {
  return <>{page}</>;
};

export default SignIn;
