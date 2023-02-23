import Image from "next/image";

const Footer = ({ data }) => {
  const { list, description, logo, copyRight, socialMedia } = data || {};
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-head">
            <div className="footer-head-wrapper">
              <h2 className="footer-title">{"Stay in the loop"}</h2>
              <span className="footer-subtitle">
                {"Join our newsletter to get top news before anyone else."}
              </span>
            </div>
            <div className="footer-search-block">
              <input type="email" placeholder={"Your best email…"} />
              <button className="footer-search-button">{"Subscribe"}</button>
            </div>
          </div>
          <div className="footer-bottom-wrapper">
            <div className="info-column">
              <div className="log">
                <Image width={32} height={32} src={logo} alt="logo" />
              </div>
              <div className="info-description">
                <p>{description}</p>
              </div>
            </div>
            <div className="list-column">
              {list?.map(({ id, listTitle, listItem }) => {
                return (
                  <div className="list-wrapper" key={id}>
                    <span className="list-title">{listTitle}</span>
                    <ul className="list">
                      {listItem?.map((item, index) => {
                        return (
                          <li key={index} className="list-item">
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="copy-right-wrapper">
            <div className="copy-right-slug">{copyRight}</div>
            <div className="social-media-wrapper">
              {socialMedia?.map(({ id, url }) => {
                return (
                  <div className="media-icon" key={id}>
                    <Image src={url} width={16} height={16} alt="icon" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
