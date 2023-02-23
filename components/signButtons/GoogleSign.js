import Image from "next/image";
import icon from "../../public/google.svg";

const GoogleSign = ({ text }) => {
  return (
    <div className="google-sign-in">
      <span className="icon">
        <Image src={icon} width={13.7} height={14} alt="icon" />
      </span>
      <div className="sign-google">{text}</div>
    </div>
  );
};

export default GoogleSign;
