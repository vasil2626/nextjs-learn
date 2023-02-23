import Heading from "../heading/heading";
import StepCards from "../stepCard/StepCards";
import SubTitle from "../subtitle/subTitle";

const Solution = ({ data }) => {
  return (
    <section className="solution">
      <div className="solution-wrapper">
        <div className="container">
          <div className="solution-section-mark">
            <span className="solution-mark-text">
              {"Reach goals that matter"}
            </span>
          </div>
          <div className="heading-wrapper">
            <Heading head={"One product, unlimited solutions"} />
          </div>
          <div className="description-wrapper">
            <SubTitle
              text={`Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit laborum — semper quis lectus nulla.`}
            />
          </div>
          {data.map(({ id, title, description, head, img, stepList }) => {
            return (
              <div className="solution-items-wrapper" key={id}>
                <StepCards
                  title={title}
                  description={description}
                  src={img}
                  list={stepList}
                  head={head}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;
