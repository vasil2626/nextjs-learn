import sv from "../../public/sv.svg";

const Cards = ({ src, text, userName, rol }) => {
  const styleObj = {
    avatar: {
      width: "24px",
      height: "18px",
      backgroundImage: `url(${sv.src})`,
      backgroundRepeat: "no-repeat",
      marginLeft: "33px",
    },
  };

  return (
    <div className="cards">
      <div className="card-user">
        <div style={styleObj.avatar}></div>
      </div>
      <div className="card-content">
        <div className="card-content-text-container">
          <span className="card-text">{text}</span>
        </div>
        <div className="card-footer">
          <span className="card-user-name">{userName}</span>
          <span className="card-user-roll">{rol}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
