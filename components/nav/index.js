import Image from "next/image";
import logo from "../../public/Logo.svg";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-shape"></div>
      <div className="container">
        <div className="nav-items-wrapper">
          <div className="nav-logo">
            <Image src={logo} width={32} height={32} alt="logo" />
          </div>
          <div className="nav-auth-wrapper">
            <button className="auth-button">{"Sign in"}</button>
            <button className="auth-button">{"Sign up"}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
