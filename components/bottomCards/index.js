import Cards from "../cards/Cards";
import Heading from "../heading/heading";
import SubTitle from "../subtitle/subTitle";

const BottomCards = ({ users }) => {
  return (
    <section className="bottom-cards">
      <div className="bottom-cards-wrapper">
        <div className="container">
          <div className="bottom-cards-head-wrappers">
            <Heading head={"Don't take our word for it"} />
          </div>
          <div className="bottom-cards-subtitle-wrapper">
            <SubTitle
              text={
                "Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare."
              }
            />
            <div className="bottom-cads-items">
              {users.map(({ text, icon, id, userName, userRol }) => {
                return (
                  <div key={id}>
                    <Cards
                      text={text}
                      src={icon}
                      userName={userName}
                      rol={userRol}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCards;
