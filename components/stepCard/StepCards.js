import Image from "next/image";

const StepCards = ({ head, title, description, list, src }) => {
  return (
    <div className="step-card">
      <div className="step-card-text">
        <span className="step-style-head">{title}</span>
        <h4 className="step-cad-title">{head}</h4>
        <p className="step-card-description">{description}</p>
        <ul className="step-list-wrapper">
          {list?.map(({ id, text, icon }) => {
            return (
              <li className="step-list" key={id}>
                <Image src={icon} width={11.98} height={8.99} alt="check" />
                <span className="step-text">{text}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="step-card-image-wrapper">
        <Image
          src={src}
          width={540}
          height={405}
          alt="stem-img"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default StepCards;
