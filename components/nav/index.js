import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from "../../public/Logo.svg";

const NavBar = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const router = useRouter();
  const handleClick = () => {
    router.push("/signin");
  };

  useEffect(() => {
    if (router.route === "/signin") {
      setShowSignIn(false);
    }
  });

  return (
    <nav className="nav">
      <div className="nav-shape"></div>
      <div className="container">
        <div className="nav-items-wrapper">
          <Link className="nav-logo" href={"/"}>
            <Image src={logo} width={32} height={32} alt="logo" />
          </Link>
          <div className="nav-auth-wrapper">
            {showSignIn && (
              <>
                <button className="auth-button" onClick={handleClick}>
                  {"Sign in"}
                </button>
                <button className="auth-button">{"Sign up"}</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
