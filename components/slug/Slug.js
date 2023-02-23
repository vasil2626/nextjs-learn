const Slug = ({ text }) => {
  return (
    <div className="slug">
      <div className="slug-line"></div>{" "}
      <span className="slug-text">{text}</span>
      <div className="slug-line"></div>
    </div>
  );
};

export default Slug;
