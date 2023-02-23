import Heading from "../heading/heading";
import GoogleSign from "../signButtons/GoogleSign";
import Slug from "../slug/Slug";
import { db } from "@/db/db";

const SignInComponent = () => {
  const { signInForm } = db;
  return (
    <section className="sign-in">
      <div className="container">
        <div className="sign-in-heading-wrapper">
          <Heading head={"Welcome. We exist to make entrepreneurism easier."} />
        </div>
        <div className="sign-in-wrapper">
          <div className="sign-by-wrapper">
            <GoogleSign text={"Sign in with Google"} />
          </div>
          <div className="sign-in-slug-wrapper">
            <Slug text={"Or, sign in with your email"}/>
          </div>
          <div className="sign-form-wrapper">
            {signInForm.map(({ id, label, type, placeHolder }) => {
              return (
                <div className="input-wrapper" key={id}>
                  <span className="input-label">{label}</span>
                  <input type={type} placeholder={placeHolder} />
                </div>
              );
            })}
          </div>
          <div className="sign-check-wrapper">
            <div className="check-box">
              <span className="check-box-label">
                <input type={"checkbox"} />
                {"Keep me signed in"}
              </span>
              <div className="forgot-link">
                <span className="link-text">{"Forgot Password?"}</span>
              </div>
            </div>
            <button className="sign-in-button">{"Sign in"}</button>
          </div>
          <div className="sign-in-navigate">
            <span className="navigate-text">
              {"Don’t you have an account? "}{" "}
              <span className="navigate-link">{"Sign in"}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInComponent;
