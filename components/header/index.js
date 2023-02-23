import Image from "next/image";
import Button from "../button/button";
import Heading from "../heading/heading";
import SubTitle from "../subtitle/subTitle";
import headerImg from "../../public/Video.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Heading head={"Landing template for startups"} />
          <div className="sub-title-wrapper">
            <SubTitle
              text={`Our landing page template works on all devices, so you only have to 
                    set it up once, and get beautiful results forever.`}
            />
          </div>
          <div className="buttons-wrapper">
            <Button text={"Start free trial"} />
            <Button text={"Learn more"} />
          </div>
          <div className="header-img">
            <Image
              src={headerImg}
              placeholder="blur"
              alt="header_img"
              property="true"
              fill="true"
            />
          </div>
          <div className="header-shape"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
