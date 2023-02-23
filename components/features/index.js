import { db } from "@/db/db";
import Image from "next/image";
import Heading from "../heading/heading";
import SubTitle from "../subtitle/subTitle";

const Features = () => {
  return (
    <>
      <section className="features-section">
        <div className="features-section-wrapper">
          <div className="container">
            <div className="features-hed">
              <Heading
                head={`The majority our customers do not understand their workflows.`}
              />
              <SubTitle
                text={`Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
              />
            </div>
            <div className="features-items">
              {db.features.map(({ id, title, icon, description }) => {
                return (
                  <div className="features-item-wrapper" key={id}>
                    <div className="features-icon">
                      <Image src={icon} width={21} height={21} alt="icon" />
                    </div>
                    <h6 className="feature-title">{title}</h6>
                    <p className="features-description">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
